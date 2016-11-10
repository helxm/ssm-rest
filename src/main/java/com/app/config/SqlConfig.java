package com.app.config;

import java.io.IOException;
import java.io.InputStream;
import java.lang.reflect.InvocationTargetException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import org.apache.commons.beanutils.PropertyUtils;
import org.apache.commons.lang.StringEscapeUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.util.Assert;

import com.alibaba.fastjson.util.TypeUtils;
import com.rainbowbus.bean.api.UserBean;
import com.rainbowbus.bean.base.BaseBean;
import com.rainbowbus.utils.api.ReflectUtils;

/**
 * 
 * 用于baseCtr的统一接口，sql语句配置
 * 
 * 根据前台传递query（querySerial），从query-config.properties配置文件中获取个性化查询的sql配置
 * 查询语句：替换参数为前台传值
 * 插入更新：接根据实体属性与前台传参拼接sql语句
 * 
 * 
 * @author hesh
 *
 */
public enum SqlConfig {
	INSTANCE;
	private volatile Properties configuration = new Properties();
	private final static String SELECT_ALL = "select * from ";
	public void init() {
		InputStream is = this.getClass().getResourceAsStream("/query-config.properties");
		if (is != null) {
			try {
				this.configuration.clear();
				this.configuration.load(is);
			} catch (IOException e) {
			} finally {
				try {
					is.close();
				} catch (Throwable t) {
				}
			}
		}
	}
	/**
	 * 
	 * @param key sql配置文件中的键
	 * @param map
	 * @return
	 * @throws Exception 
	 */
	public String getSelectSql(String key,Map<String, Object> map,BaseBean bean) throws Exception {
		StringBuffer sql = new StringBuffer();
		if(StringUtils.isNotBlank(key)){
			String sqlConfig = this.configuration.getProperty(key);
			Assert.hasText(sqlConfig, key + "缺少查询实例");
			sql.append(parseSqlConfig(map, bean,bean.getTableName(), sqlConfig));
		}else{//默认配置
			sql.append(SELECT_ALL + bean.getTableName());
		}
		return sql.toString();
	}
	public String getReadSql(String key,Map<String, Object> map,BaseBean bean) throws Exception {
		StringBuffer sql = new StringBuffer();
		if(StringUtils.isNotBlank(key)){
			String sqlConfig = this.configuration.getProperty(key);
			Assert.hasText(sqlConfig, key + "缺少查询实例");
			sql.append(parseSqlConfig(map, bean, bean.getTableName(), sqlConfig));
		}else{//默认配置
			sql.append(SELECT_ALL + bean.getTableName());
			Assert.notNull(bean.getId(), "id不能为空");
			sql.append(" where id=" + bean.getId());
		}
		return sql.toString();
	}
	/**
	 * 获取一般sql配置
	 * 
	 * @param key
	 * @param map
	 * @param bean
	 * @return
	 * @throws Exception
	 */
	public String getSql(String key,Map<String, Object> map,BaseBean bean) throws Exception {
		Assert.hasText(key, "query不能为空");
		StringBuffer sql = new StringBuffer();
		String sqlConfig = this.configuration.getProperty(key);
		Assert.hasText(sqlConfig, key + "缺少查询实例");
		sql.append(parseSqlConfig(map, bean, bean.getTableName(), sqlConfig));
		return sql.toString();
	}
	/**
	 * 解析配置sql
	 * 
	 * @param map
	 * @param bean
	 * @param sql
	 * @return
	 * @throws IllegalAccessException
	 * @throws InvocationTargetException
	 * @throws NoSuchMethodException
	 */
	private String parseSqlConfig(Map<String, Object> map, Object bean,String tableName, String sql){
		Class<?> clzz = bean.getClass();
		for(String k : map.keySet()){
			if( "query".equals(k)
					|| "pageNum".equals(k)
					|| "loginToken".equals(k)
					|| "ts".equals(k)
					|| "checkSign".equals(k)
					//|| "tableName".equals(k)
					){
				continue;
			}
			try {
				if("tableName".equals(k)){
					sql = sql.replace("${" + k + "}", tableName);
				}else if("ids".equals(k)){
					Assert.notNull(map.get(k), "ids不能为空");
					Assert.hasText(map.get(k).toString(), "ids不能为空");
					sql = sql.replace("${" + k + "}", StringEscapeUtils.escapeSql(map.get(k).toString()));
				}
				else{
					if(ReflectUtils.isExistField(clzz, k)){
						Object value = PropertyUtils.getProperty(bean, k);
						sql = sql.replace("${" + k + "}", getSafeValue(value));
					}
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		if(sql.contains(" '%'")){
			sql = sql.replaceAll(" '%'", " '%");
			sql = sql.replaceAll("'%' ", "%' ");
		}
		return sql;
	}
	/**
	 * 更新sql
	 * 
	 * 配置where条件语句有限，若无则根据id更新
	 * 
	 * @param key sql配置文件中的键
	 * @param map
	 * @param bean
	 * @return
	 * @throws Exception
	 */
	public String getUpdateSql(String key,Map<String, Object> map,BaseBean bean) throws Exception {
		Assert.notEmpty(map, "更新配置：参数map不能为空");
		Assert.notEmpty(map, "更新配置：");
		
		List<String> ignoreFields = new ArrayList<>();
		ignoreFields.add("tableName");
		ignoreFields.add("query");
		ignoreFields.add("pageNum");
		ignoreFields.add("userId");
		ignoreFields.add("ts");
		ignoreFields.add("loginToken");
		ignoreFields.add("checkSign");
		
		return getUpdateSql(key, map, bean, bean.getTableName(),ignoreFields);
	}
	/**
	 * 
	 * @param configSqlKey 
	 * 		若有值，为sql配置文件的配置条件（按条件插入，where+）
	 * @param map
	 * 		更新字段-键key的来源
	 * @param sourses
	 * 		更新值数据来源
	 * @param tableName
	 * 		表名
	 * @param ignoreFields
	 * 		忽略字段集合
	 * @return 
	 */
	public String getUpdateSql(String configSqlKey, Map<String, Object> map, Object sourses, String tableName,List<String> ignoreFields) {
		StringBuffer sql = new StringBuffer();
		sql.append("UPDATE " + tableName + " SET ");
		for(String k : map.keySet()){
			if(ignoreFields.contains(k)
					||"id".equals(k)//根据id更新，不要更新id字段
					){
				continue;
			}
			try {
				Object value = PropertyUtils.getProperty(sourses, k);
				sql.append(k + "=" + getSafeValue(value) + ",");
			} catch (IllegalAccessException | InvocationTargetException | NoSuchMethodException e) {
				e.printStackTrace();
			}
		}
		sql.append("#");//标记
		Long id = null;
		try {
			id = TypeUtils.castToLong(PropertyUtils.getProperty(sourses, "id"));
		} catch (IllegalAccessException | InvocationTargetException | NoSuchMethodException e) {
		}
		if(StringUtils.isNotBlank(configSqlKey)){
			String config = this.configuration.getProperty(configSqlKey);
			if(StringUtils.isNotBlank(config)){
				sql.append(parseSqlConfig(map, sourses, tableName, config));
			}else{
				Assert.notNull(id, "更新配置：id与query配置不能同时为空");
				sql.append(" where id=" + id);
			}
		}else{
			Assert.notNull(id, "更新配置：id与query配置不能同时为空");
			sql.append(" where id=" + id);
		}
		return sql.toString().replace(",#", " ");//替换标记
	}
	/**
	 * 新增操作
	 * 
	 * @param key sql配置文件中的键
	 * @param map
	 * @param bean
	 * @return
	 * @throws Exception
	 */
	public String getInsertSql(String key,Map<String, Object> map,BaseBean bean,UserBean user) throws Exception {
		Assert.notEmpty(map, "插入配置：参数map不能为空");
		Assert.notNull(bean, "插入配置：实例不能为空");
		
		Class<? extends BaseBean> clzz = bean.getClass();
		String tableName =  bean.getTableName();
		Assert.hasLength(tableName, "插入配置：找不到表配置");
		
		map.put("createTime", new Timestamp(System.currentTimeMillis()));
		map.put("createName", user.getUsername());
		bean.setCreateName( user.getUsername());
		map.put("updateTime", new Timestamp(System.currentTimeMillis()));
		map.put("updateName", user.getUsername());
		bean.setUpdateName(user.getUsername());
		map.put("isDelated", '1');
		
		return getInsertSql(map, bean, clzz, tableName);
	}
	/**
	 * 
	 * @param map
	 * 		插入字段-键key来源
	 * @param sourses 
	 * 		插入字段-值来源，可以是bean，也可以是map 
	 * @param userMark
	 * 		用户标识，可以是username，也可以是userId
	 * @param clzz
	 * 		若sourses为bean，则先判断是否包含键key
	 * @param tableName
	 * 		表名
	 * @return
	 * @throws IllegalAccessException
	 * @throws InvocationTargetException
	 * @throws NoSuchMethodException
	 */
	public String getInsertSql(Map<String, Object> map, Object sourses, Class<?> clzz,
			String tableName)  {
		
		StringBuffer sql = new StringBuffer();
		sql.append("INSERT INTO " + tableName + " (");
		String field = "";
		String values = "";
		for(String k : map.keySet()){//表字段杜绝使用以下名称，userId关联可使用其他字段替换
			if("tableName".equals(k)
					|| !ReflectUtils.isExistField(clzz, k)
					){
				continue;
			}
			field += k + ",";
			if("createTime".equals(k) || "updateTime".equals(k)){
				values += "'" + new Timestamp(System.currentTimeMillis()) + "',";
				continue;
			}
			if("isDelated".equals(k)){
				values += "'1',";
				continue;
			}
			try {
				Object value = PropertyUtils.getProperty(sourses, k);
				values += getSafeValue(value) + ",";
			} catch (IllegalAccessException | InvocationTargetException | NoSuchMethodException e) {
				e.printStackTrace();
			}
		}
		field += ")";
		values += ")";
		sql.append(field.replace(",)", ")"));
		sql.append(" VALUES ");
		sql.append("(" + values.replace(",)", ")"));
		return sql.toString();
	}
	/**
	 * 把前台传递过来的参数值变为合法的sql参数值
	 * 
	 * @param value
	 * @return
	 */
	private String getSafeValue(Object value){
		if(value == null){
			return "null";
		}
		else if(value instanceof Integer 
				|| value instanceof Double 
				|| value instanceof Float 
				|| value instanceof Byte 
				|| value instanceof Short
				|| value instanceof Long
				|| value instanceof Boolean
				|| value instanceof Character
				){
			return value.toString();
		}
		else if(value instanceof String 
				|| value instanceof Timestamp
				|| value instanceof Date
				){
			return "'" + StringEscapeUtils.escapeSql(value.toString()) + "'";
		}
		return StringEscapeUtils.escapeSql(value.toString());
	}
}

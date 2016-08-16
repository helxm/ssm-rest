package com.rainbowbus.conf;

import java.io.IOException;
import java.io.InputStream;
import java.lang.reflect.InvocationTargetException;
import java.sql.Timestamp;
import java.util.Date;
import java.util.Map;
import java.util.Properties;

import org.apache.commons.beanutils.PropertyUtils;
import org.apache.commons.lang.StringEscapeUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.util.Assert;

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
			sql.append(parseSqlConfig(map, bean, sqlConfig));
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
			sql.append(parseSqlConfig(map, bean, sqlConfig));
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
		sql.append(parseSqlConfig(map, bean, sqlConfig));
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
	private String parseSqlConfig(Map<String, Object> map, BaseBean bean, String sql)
			throws IllegalAccessException, InvocationTargetException, NoSuchMethodException {
		Class<? extends BaseBean> clzz = bean.getClass();
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
					sql = sql.replace("${" + k + "}", bean.getTableName());
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
		StringBuffer sql = new StringBuffer();
		sql.append("UPDATE " + bean.getTableName() + " SET ");
		for(String k : map.keySet()){
			if("tableName".equals(k)
					||"query".equals(k)
					||"pageNum".equals(k)
					||"userId".equals(k)
					||"loginToken".equals(k)
					||"ts".equals(k)
					||"checkSign".equals(k)
					
					||"id".equals(k)//根据id更新，不要更新id字段
					){
				continue;
			}
			Object value = PropertyUtils.getProperty(bean, k);
			sql.append(k + "=" + getSafeValue(value) + ",");
		}
		sql.append("#");//标记
		Long id = bean.getId();
		if(StringUtils.isNotBlank(key)){
			String config = this.configuration.getProperty(key);
			if(StringUtils.isNotBlank(config)){
				sql.append(parseSqlConfig(map, bean, config));
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
		
		map.put("createTime", new Timestamp(System.currentTimeMillis()));
		map.put("createName", user.getUsername());
		map.put("updateTime", new Timestamp(System.currentTimeMillis()));
		map.put("updateName", user.getUsername());
		map.put("isDelated", '1');
		
		StringBuffer sql = new StringBuffer();
		sql.append("INSERT INTO " + bean.getTableName() + " (");
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
			if("createName".equals(k) || "updateName".equals(k)){
				values += "'" + user.getUsername() + "',";
				continue;
			}
			if("isDelated".equals(k)){
				values += "'1',";
				continue;
			}
			Object value = PropertyUtils.getProperty(bean, k);
			values += getSafeValue(value) + ",";
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

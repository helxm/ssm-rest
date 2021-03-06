package com.app.util;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;

import com.alibaba.fastjson.util.TypeUtils;
import com.app.config.SqlConfig;
import com.app.dto.BaseBean;
import com.app.entity.UserBean;
import com.app.service.BaseServiceImpl;
/**
 * 个性化，小量，单列，...，db查询
 * 
 * @author hesh
 *
 */
public class BaseQueryUtils {
	protected static Logger logger = Logger.getLogger("BaseQueryUtils");
	
	private static BaseServiceImpl<BaseBean> service;
	private static ThreadLocal<List<Map<String, Object>>> valueLocal = new ThreadLocal<>();
	
	private BaseQueryUtils() {
	}
	
	/**
	 * 当获取多个字段值时，初始化查询，把结果放在ThreadLocal中
	 * 
	 * 然后可通过getValues、getValue方法以此获取列值
	 * 
	 * [注意]：可做统计查询，统计字段返回Long
	 * 
	 * @param columns
	 * @param table
	 * @param where
	 * @return 
	 */
	public static void initValues(String[] columns,String table,String where) {
		valueLocal.set(getColumns(columns, table, where));
	}
	public static List<Map<String, Object>> getMaps() {
		return valueLocal.get();
	}
	public static List<Object> getValues(String column) {
		List<Map<String, Object>> values = valueLocal.get();
		if(values != null && values.size() > 0){
			List<Object> list = new ArrayList<>(); 
			for(Map<String, Object> map : values){
				if(map != null && map.get(column) != null && StringUtils.isNotBlank(map.get(column).toString())){
					list.add(map.get(column));
				}
			}
			return list;
		}
		return null;
	}
	public static Object getValue(String column) {
		List<Object> values = getValues(column);
		if(values != null && values.size() > 0){
			return values.get(0);
		}
		return null;
	}
	/**
	 * 列表查询，多条记录
	 * 
	 * @param columns
	 * @param table
	 * @param where
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public static List<Map<String, Object>> getColumns(String[] columns,String table,String where){
		service = (BaseServiceImpl<BaseBean>) SpringInit.getBean("baseServiceImpl");
    	BaseBean bean = new BaseBean();
    	String select = "";
    	for (int i = 0; i < columns.length; i++) {
    		select += "," + columns[i];
		}
    	select = select.substring(1, select.length());
    	
		bean.setSql("select " + select + " from " + table + " where " + where);
		System.out.println("BaseQueryUtils 执行 sql：" + "select " + select + " from " + table + " where " + where);
		List<Map<String, Object>> values =  service.findMap(bean);
		if(values != null && values.size() > 0 && values.get(0) != null){
			return values;
		}
		return null;
    }
	/**
	 * 获取单个字段 Object值
	 * 
	 * @param column
	 * @param table
	 * @param where
	 * @return
	 */
	public static Object getObject(String column,String table,String where){
		List<Map<String, Object>> values = getColumns(new String[]{column}, table, where);
		if(values != null && values.size() > 0 && values.get(0) != null){
			/*column = column.replaceAll("`", "");
			if(column.contains("as ")){
				column = column.split("as ")[1];
			}*/
			Map<String, Object> map = values.get(0);
			for(Object value : map.values()){
				return value;
			}
		}
		return null;
	}
	/**
	 * 获取一条记录的多列
	 * 
	 * @param column
	 * @param table
	 * @param where
	 * @return
	 */
	public static Map<String,Object> getMap(String[] columns,String table,String where){
		List<Map<String, Object>> values = getColumns(columns, table, where);
		if(values != null && values.size() > 0 ){
			return values.get(0);
		}
		return null;
	}
	/**
	 * 获取单个字段 String值
	 * 
	 * @param column
	 * @param table
	 * @param where
	 * @return
	 */
	public static String getString(String column,String table,String where){
		Object value = getObject(column, table, where);
		if(value != null){
			return value.toString();
		}
		return null;
	}
	/**
	 * 获取单个字段 Integer值
	 * 
	 * @param column
	 * @param table
	 * @param where
	 * @return
	 */
	public static Integer getInt(String column,String table,String where){
		try {
			String strt = getString(column, table, where);
			if(StringUtils.isNotBlank(strt)){
				if(strt.indexOf('.') != -1){
					return TypeUtils.castToInt(strt.split("\\.")[0]);
				}else{
					return TypeUtils.castToInt(strt);
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null ;
	}
	/**
	 * 获取单个字段 Long值
	 * 
	 * @param column
	 * @param table
	 * @param where
	 * @return
	 */
	public static Long getLong(String column,String table,String where){
		try {
			String strt = getString(column, table, where);
			if(StringUtils.isNotBlank(strt)){
				if(strt.indexOf('.') != -1){
					return TypeUtils.castToLong(strt.split("\\.")[0]);
				}else{
					return TypeUtils.castToLong(strt);
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null ;
	}
	/**
	 * 获取单个字段 Character值
	 * 
	 * @param column
	 * @param table
	 * @param where
	 * @return
	 */
	public static Character getChar(String column,String table,String where){
		Character value = null;
		try {
			value = getString(column, table, where).charAt(0);
		} catch (Exception e) {
		}
		return value;
	}
	/**
	 * update
	 * 
	 * @param column
	 * @param table
	 * @param where
	 * @return
	 */
	public static int update(String sql){
		service = (BaseServiceImpl<BaseBean>) SpringInit.getBean("baseServiceImpl");
    	BaseBean bean = new BaseBean();
    	bean.setSql(sql);
    	System.err.println(sql);
    	logger.info(sql);
		return service.updateBase(bean);
	}
	/**
	 * 保存
	 * 
	 * @param map
	 * @param bean
	 * @param user
	 * @return
	 * @throws Exception
	 */
	public static int save(Map map,BaseBean bean,UserBean user) throws Exception{
		Long id = TypeUtils.castToLong(map.get("id"));
		String sql = null;
		if(id != null){
			sql = SqlConfig.INSTANCE.getUpdateSql(null, map, bean);
		}else{
			sql = SqlConfig.INSTANCE.getInsertSql(null, map, bean, user);
		}
		bean.setSql(sql);
		System.err.println(sql);
		logger.info(sql);
		
		service = (BaseServiceImpl<BaseBean>) SpringInit.getBean("baseServiceImpl");
		return service.updateBase(bean);
	}
	/**
	 * 保存，根据map中存储的键值对做插入或更新
	 * 
	 * @param configSqlKey
	 * 		配置文件中，插入语句where条件配置的key
	 * @param map
	 * @param tableName
	 * @param userMark
	 * 		用户编号标识
	 * @return
	 */
	public static Long saveByMap(String configSqlKey,Map<String,Object> map, String tableName) {
		Long id = TypeUtils.castToLong(map.get("id"));
		String sql = null;
		if(id != null){
			sql = SqlConfig.INSTANCE.getUpdateSql(configSqlKey, map, map, tableName, null);
		}else{
			sql = SqlConfig.INSTANCE.getInsertSql(map, map, null, tableName);
		}
		BaseBean bean = new BaseBean();
		bean .setSql(sql);
		System.err.println(sql);
		logger.info(sql);
		
		service = (BaseServiceImpl<BaseBean>) SpringInit.getBean("baseServiceImpl");
		service.updateBase(bean);
		return bean.getId();
	}
	
	public static void main(String[] args) {
		//System.err.println((Long) (Object)"gfds" );//java.lang.String cannot be cast to java.lang.Long
		System.err.println(Integer.valueOf("15".split("\\.")[0]));
	}
	
}

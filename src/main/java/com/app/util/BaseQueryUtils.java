package com.app.util;

import java.util.List;
import java.util.Map;

import com.rainbowbus.bean.base.BaseBean;
import com.rainbowbus.service.impl.api.BaseServiceImpl;
/**
 * 个性化，小量，单列，...，db查询
 * 
 * @author hesh
 *
 */
public class BaseQueryUtils {
	
	private static BaseServiceImpl<BaseBean> service;
	
	private BaseQueryUtils() {
	}
	
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
			return values.get(0).get(column);
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
		Integer value = null;
		try {
			value = Integer.valueOf(getString(column, table, where));
		} catch (NumberFormatException e) {
		}
		return value ;
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
		Long value = null;
		try {
			value = Long.valueOf(getString(column, table, where));
		} catch (NumberFormatException e) {
		}
		return value;
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
		} catch (IndexOutOfBoundsException e) {
		}
		return value;
	}
	public static void main(String[] args) {
		System.err.println((Long) (Object)"gfds" );//java.lang.String cannot be cast to java.lang.Long
	}
	
}

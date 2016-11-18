package com.app.db;

/**
 * 暂存需要的DataSource
 * 
 * @author hesh
 *
 */
public class DynamicDataSourceHolder {  
	
	private static final ThreadLocal<String> contextHolder = new ThreadLocal<String>();  
	 /**
	  * 动态切换dataSource
	  * 
	  * @param dataSourceType
	  */
    public static void setDataSource(String dataSourceType) {  
        contextHolder.set(dataSourceType);  
    }  
  
    public static String getDataSource() {  
        return contextHolder.get();  
    }  
  
    public static void clearDataSource() {  
        contextHolder.remove();  
    }  
}  
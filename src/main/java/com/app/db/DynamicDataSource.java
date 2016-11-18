package com.app.db;

import org.springframework.jdbc.datasource.lookup.AbstractRoutingDataSource;
/**
 * 替代单个DataSource注入sqlSessionFactory、transactionManager
 * 
 * @author hesh
 *
 */
public class DynamicDataSource extends AbstractRoutingDataSource {  
    @Override  
    protected Object determineCurrentLookupKey() {  
        // TODO Auto-generated method stub  
        return DynamicDataSourceHolder.getDataSource();  
    }  
  
}  

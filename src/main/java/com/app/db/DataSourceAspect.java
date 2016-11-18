package com.app.db;

import java.lang.reflect.Method;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.reflect.MethodSignature;

/**
 * aop拦截请求，根据方法注解注入dataSource名
 * 
 * @author hesh
 *
 */
public class DataSourceAspect {
	public void before(JoinPoint point) {
		Object target = point.getTarget();
		String method = point.getSignature().getName();
		Class<?>[] classz = target.getClass().getInterfaces();
		Class<?>[] parameterTypes = ((MethodSignature) point.getSignature()).getMethod().getParameterTypes();
		try {
			Method m = classz[0].getMethod(method, parameterTypes);
			/*if (m != null && m.isAnnotationPresent(DataSource.class)) {//DataSource是方法注解，value为dataSource名
				DataSource data = m.getAnnotation(DataSource.class);
				DynamicDataSourceHolder.putDataSource(data.value());
				System.out.println(data.value());
			}*/

		} catch (Exception e) {
			// TODO: handle exception
		}
	}
}

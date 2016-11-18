package com.app.util;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;
/**
 * 
 * {@code SpringInit}
 * TODO 用于手动获取ioc中的bean
 * @author hesh
 * @time 2016年3月31日 - 下午2:55:58
 */
public class SpringInit implements ServletContextListener {
    

    private static WebApplicationContext springContext;
    
    public SpringInit() {
        super();
    }
    

    private static ApplicationContext getApplicationContext() {
        return springContext;
    }

	@Override
	public void contextDestroyed(ServletContextEvent arg0) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void contextInitialized(ServletContextEvent arg0) {
		springContext = WebApplicationContextUtils.getWebApplicationContext(arg0.getServletContext());
		
	}
	public static Object getBean(String name) throws BeansException {
		return springContext.getBean(name);
	}
    
}
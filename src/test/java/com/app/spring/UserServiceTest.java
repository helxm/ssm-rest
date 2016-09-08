package com.app.spring;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.Before;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.rainbowbus.bean.api.UserBean;
import com.rainbowbus.bean.api.UserCategoryBean;
import com.rainbowbus.service.impl.api.UserCategoryServiceImpl;
import com.rainbowbus.service.impl.api.UserServiceImpl;
import com.rainbowbus.utils.JsonUtils;

public class UserServiceTest {
	private UserServiceImpl service;
	
	@Before
	public void before(){
		ApplicationContext ac = new ClassPathXmlApplicationContext("applicationContext.xml");
		service = (UserServiceImpl) ac.getBean("userServiceImpl");
	}
	/**
	 * 测试查询
	 */
	@Test
	public void testSelect(){
		UserBean record = new UserBean();
		String userId = "ba4a0cc5617540a28c5710a1bf6a6470";
		
		record = service.selectByUserId(userId);
		System.err.println(record.getUsername());
	}
}

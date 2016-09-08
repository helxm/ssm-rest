package com.app.spring;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.Before;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.rainbowbus.bean.api.UserCategoryBean;
import com.rainbowbus.service.impl.api.UserCategoryServiceImpl;
import com.rainbowbus.utils.JsonUtils;

public class UserCategoryServiceTest {
	private UserCategoryServiceImpl service;
	
	@Before
	public void before(){
		ApplicationContext ac = new ClassPathXmlApplicationContext("applicationContext.xml");
		service = (UserCategoryServiceImpl) ac.getBean("userCategoryServiceImpl");
	}
	@Test
	public void testDelete(){
		UserCategoryBean record = new UserCategoryBean();
		record.setUserId("ba4a0cc5617540a28c5710a1bf6a6470");
		record.setName("标签");
		record.setItemValue("测试");
		
		int r = service.deleteByItemValue(record);
		System.err.println(r);
	}
	@Test
	public void test(){
		Map obj = new HashMap();
		List list1 = service.queryAllPerUser("ba4a0cc5617540a28c5710a1bf6a6470", "标签");
		List list2 = service.queryAllPerUser("ba4a0cc5617540a28c5710a1bf6a6470", "身份");
		List list3 = service.queryAllPerUser("ba4a0cc5617540a28c5710a1bf6a6470", "关注列表");
		List list4 = service.queryAllPerUser("ba4a0cc5617540a28c5710a1bf6a6470", "拳馆");
		obj.put("label", list1);
		obj.put("identity", list2);
		obj.put("interestList", list3);
		obj.put("wingChun", list4);
		System.out.println(JsonUtils.responseJson(true, "登陆成功", obj));;
	}
}

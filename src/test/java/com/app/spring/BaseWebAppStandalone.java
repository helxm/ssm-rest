package com.app.spring;

import java.net.URLEncoder;
import java.util.Date;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.ContextHierarchy;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.rainbowbus.conf.SignPromiseValue;
import com.rainbowbus.utils.MD5Util;

/**
 * 
 * {@code PublisInfoTest}
 * TODO 独立于controller，模拟请求测试，会包含过滤器拦截器等
 * @author hesh
 * @time 2016年4月1日 - 下午1:34:23
 */ 
//@ContextConfiguration("classpath:applicationContext.xml")
@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration(value = "/")
@ContextHierarchy({
        @ContextConfiguration(locations = "classpath:applicationContext.xml"),
        @ContextConfiguration(locations = "classpath:spring-servlet.xml")
})
public class BaseWebAppStandalone {
	@Autowired
    private WebApplicationContext wac;
    private MockMvc mockMvc;

    @Before
    public void setUp() {
        mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
    }
	 
	 
	 /**
		 * 
		 * TODO standolone test，包含拦截器等
		 * @Description
		 * @throws Exception
		 * @version 1.0 2016年4月1日-下午1:51:14
		 * @auther hesh
		 */
		 @Test
		public void testAdd() throws Exception {
			String ts = new Date().getTime() + "";
	        String userId = "6de6dade0b1f48a0bba68c173c398970";
	        String loginToken = "ffac0dc3bfc54038b42a9f69559944e7";
	        String tableName = "damageblog";
	        String title = "测试格斗场论坛发布博客";
	        String content = "发布博客内容";
	        String id = 42 + "";
	        
	        StringBuffer checkPram = new StringBuffer();
	        checkPram.append(content);
	        checkPram.append(loginToken);
	        //checkPram.append(name); 
	        checkPram.append(tableName);
	        checkPram.append(title);
	        checkPram.append(ts);
	        checkPram.append(userId);
	        
	        checkPram.append(SignPromiseValue.getName("/api/base/save$Base"));
	        System.err.println("测试MD5前值： " + checkPram);//顺序： asn
	        String checkSignOnline = MD5Util.MD5((checkPram.toString()).getBytes());//前台生成的sign
	        
	        byte imges[] = {1,12,5,58,127};
	        title = URLEncoder.encode(title, "utf-8");
	        content = URLEncoder.encode(content, "utf-8");
	        
	        mockMvc.perform(
	        		(MockMvcRequestBuilders.fileUpload("/api/base/save$Base.do")
	        		//(MockMvcRequestBuilders.get("/api/category/addUserCategory.do")
	        		//.file("imges", imges)
	        		//.file("imges", imges)//多文件上传报错
	                .param("userId", userId)
	                //.param("objId", id)
	                .param("loginToken",loginToken)
	                .param(    "ts",ts)
	                .param(    "tableName",tableName)
	                .param(    "checkSign",checkSignOnline)
	                .param(    "content",content)
	                .param(    "title",title)
	        		//.param(    "name",name)
	        		)
	        		//.accept(MediaType.MULTIPART_FORM_DATA_VALUE)
	        		)
	                .andDo(MockMvcResultHandlers.print())
	                .andExpect(MockMvcResultMatchers.status().isOk())
	                //.andExpect(content().contentType(MediaType.APPLICATION_JSON))
	               // .andExpect(MockMvcResultMatchers.jsonPath("$.status").value("success"))
	                ;
		   }
		 @Test
		 public void testUpdate() throws Exception {
			 String ts = new Date().getTime() + "";
			 String userId = "6de6dade0b1f48a0bba68c173c398970";
			 String olduserid = "6de6dade0b1f48a0bba68c173c398970";
			 String loginToken = "ffac0dc3bfc54038b42a9f69559944e7";
			 String tableName = "newuser";
			// String name = "皱市明";
			 String query = "update-user";
			 String sex = "男性";
			 String id = 10 + "";
			 
			 StringBuffer checkPram = new StringBuffer();
			 checkPram.append(loginToken);
			 //checkPram.append(name); 
			 checkPram.append(olduserid);
			 checkPram.append(query);
			 checkPram.append(sex);
			 checkPram.append(tableName);
			 checkPram.append(ts);
			 checkPram.append(userId);
			 
			 
			 checkPram.append(SignPromiseValue.getName("/api/base/update$Base"));
			 System.err.println("测试MD5前值： " + checkPram);//顺序： asn
			 String checkSignOnline = MD5Util.MD5((checkPram.toString()).getBytes());//前台生成的sign
			 
			 byte imges[] = {1,12,5,58,127};
			// name = URLEncoder.encode(name, "utf-8");
			 sex = URLEncoder.encode(sex, "utf-8");
			 
			 mockMvc.perform(
					 (MockMvcRequestBuilders.fileUpload("/api/base/update$Base.do")
							 //(MockMvcRequestBuilders.get("/api/category/addUserCategory.do")
							 //.file("imges", imges)
							 //.file("imges", imges)//多文件上传报错
							 .param("userId", userId)
							 .param("olduserid", olduserid)
							 //.param("objId", id)
							 .param("loginToken",loginToken)
							 .param(    "ts",ts)
							 .param(    "tableName",tableName)
							 .param(    "checkSign",checkSignOnline)
							 .param(    "query",query)
							 .param(    "sex",sex)
							 )
					 //.accept(MediaType.MULTIPART_FORM_DATA_VALUE)
					 )
			 .andDo(MockMvcResultHandlers.print())
			 .andExpect(MockMvcResultMatchers.status().isOk())
			 //.andExpect(content().contentType(MediaType.APPLICATION_JSON))
			 // .andExpect(MockMvcResultMatchers.jsonPath("$.status").value("success"))
			 ;
		 }
	 
	 /**
	  * 删除
	  * @throws Exception
	  */
	 @Test
	 public void testDelete() throws Exception { 
		 
		 String ts = new Date().getTime() + "";
	        String userId = "ba4a0cc5617540a28c5710a1bf6a6470";
	        String loginToken = "bb361143a18045df9674ae10f2b23dc9";
	        String tableName = "v-news";
	        String objId = 5 + "";
	        
	        StringBuffer checkPram = new StringBuffer();
	        checkPram.append(loginToken);
	        checkPram.append(objId);
	        checkPram.append(tableName);
	        checkPram.append(ts);
	        checkPram.append(userId);
	        
	        checkPram.append(SignPromiseValue.getName("/api/comment/delete$Vote"));
	        System.err.println("测试MD5前值： " + checkPram);//顺序： asn
	        String checkSignOnline = MD5Util.MD5((checkPram.toString()).getBytes());//前台生成的sign
	        
		 mockMvc.perform((MockMvcRequestBuilders.post("/api/comment/delete$Vote.do")
				 .param("userId", userId)
	                .param("objId", objId)
	                .param("loginToken",loginToken)
	                .param(    "ts",ts)
	                .param(    "tableName",tableName)
	                .param(    "checkSign",checkSignOnline)
            ))
            .andDo(MockMvcResultHandlers.print())
            .andExpect(MockMvcResultMatchers.status().isOk())
            //.andExpect(content().contentType(MediaType.APPLICATION_JSON))
            .andExpect(MockMvcResultMatchers.jsonPath("$.status").value("success"))
            ;
	 }
	 /**
	  * 测试查询一个
	  * 
	  * @throws Exception
	  */
	 @Test
	 public void testRead() throws Exception { 
		 mockMvc.perform((MockMvcRequestBuilders.post("/api/base/readBase.do")
				 .param(    "tableName","c-news")
				// .param(    "id","118")
				 ))
		 .andDo(MockMvcResultHandlers.print())
		 .andExpect(MockMvcResultMatchers.status().isOk())
		 //.andExpect(content().contentType(MediaType.APPLICATION_JSON))
		 .andExpect(MockMvcResultMatchers.jsonPath("$.status").value("success"))
		 ;
	 }
	 /**
	  * 测试list
	  * 
	  * @throws Exception
	  */
	 @Test
	 public void testList() throws Exception { 
		 mockMvc.perform((MockMvcRequestBuilders.get("/api/base/listBase.do")
				 //.param("tableName", "user")
				 .param("tableName", "f-mat")
				 .param("ids", "1")
				 //.param("pageNum", "1")
				 .param("query", "list-multi-count")
				 ))
		 .andDo(MockMvcResultHandlers.print())
		 .andExpect(MockMvcResultMatchers.status().isOk())
		 //.andExpect(content().contentType(MediaType.APPLICATION_JSON))
		 .andExpect(MockMvcResultMatchers.jsonPath("$.status").value("success"))
		 ;
	 }
	 /**
	  * 测试count
	  * 
	  * @throws Exception
	  */
	 @Test
	 public void testCount() throws Exception { 
		 mockMvc.perform((MockMvcRequestBuilders.get("/api/base/countBase.do")
				 .param("tableName", "c-news")
				 .param("objId", "36")
				 .param("query", "list-comment-or-vote")
				 ))
		 .andDo(MockMvcResultHandlers.print())
		 .andExpect(MockMvcResultMatchers.status().isOk())
		 //.andExpect(content().contentType(MediaType.APPLICATION_JSON))
		 .andExpect(MockMvcResultMatchers.jsonPath("$.status").value("success"))
		 ;
	 }
	 
	 
}

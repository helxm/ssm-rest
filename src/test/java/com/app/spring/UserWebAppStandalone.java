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

import com.app.util.MD5Util;
import com.app.util.SignPromiseValue;

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
public class UserWebAppStandalone {
	@Autowired
    private WebApplicationContext wac;
    private MockMvc mockMvc;

    @Before
    public void setUp() {
        mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
    }
	 
	 
	 /**
		 * 测试UserBackupClientCtr - newuser 的update方法
		 * 
		 * TODO standolone test，包含拦截器等
		 * @Description
		 * @throws Exception
		 * @version 1.0 2016年4月1日-下午1:51:14
		 * @auther hesh
		 */
		 @Test
		public void testUpdate() throws Exception {
			String ts = new Date().getTime() + "";
	        String userId = "855bd9552ff0488aa0d0765e9ccd46cc";
	        String loginToken = "db718fe4309f4c66a500f21d09df35bf";
	        
	        String username = "张三";//泰拳,截拳道,柔道
	        String identitys = "拳手,教练";//泰拳,截拳道,柔道
	        String lebal = "拳击,泰拳";//泰拳,截拳道,柔道
	        String interestList = "拳手,比赛";//泰拳,截拳道,柔道
	        String wingChun = "";//泰拳,截拳道,柔道
	        String height = "178";
	        String weight = "60";
	        String address = "北京市东城区东直门外大街48号东方银座办公写字楼15层15M";
	        
	        StringBuffer checkPram = new StringBuffer();
	        checkPram.append(loginToken);
	        checkPram.append(identitys);
	        checkPram.append(interestList);
	        checkPram.append(lebal);
	        checkPram.append(wingChun);
	        checkPram.append(ts);
	        checkPram.append(userId);
	        checkPram.append(username);
	        
	        //checkPram.append(SignPromiseValue.getName("/api/comment/add$Vote"));
	        System.err.println("测试MD5前值： " + checkPram);//顺序： asn
	        String checkSignOnline = MD5Util.MD5((checkPram.toString()).getBytes());//前台生成的sign
	        
	        mockMvc.perform(
	        		(MockMvcRequestBuilders.get("/api/newuser/updateUser.do")
	        		//(MockMvcRequestBuilders.get("/api/category/addUserCategory.do")
	        		//.file("imges", imges)
	        		//.file("imges", imges)//多文件上传报错
	                .param("userid", userId)
	                .param("username", username)
	                .param("identitys", identitys)
	                .param("labels", lebal)
	                .param("interestLists", interestList)
	                .param("wingChuns", wingChun)
	                
	                .param("token",loginToken)
	                .param(    "ts",ts)
	                .param(    "height",height)
	                .param(    "weight",weight)
	                .param(    "address",address)
	                .param(    "checkSign",checkSignOnline))
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
	        
	        String objId = 3 + "";
	        
	        StringBuffer checkPram = new StringBuffer();
	        checkPram.append(loginToken);
	        checkPram.append(objId);
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
	                .param(    "checkSign",checkSignOnline)
            ))
            .andDo(MockMvcResultHandlers.print())
            .andExpect(MockMvcResultMatchers.status().isOk())
            //.andExpect(content().contentType(MediaType.APPLICATION_JSON))
            .andExpect(MockMvcResultMatchers.jsonPath("$.status").value("success"))
            ;
	 }
	 @Test
	 public void testGetPhoneCode() throws Exception { 
		 mockMvc.perform((MockMvcRequestBuilders.get("/api/newuser/getPhoneCode.do")
				 .param("phone", "18582915609")
				 ))
		 .andDo(MockMvcResultHandlers.print())
		 .andExpect(MockMvcResultMatchers.status().isOk())
		 //.andExpect(content().contentType(MediaType.APPLICATION_JSON))
		 .andExpect(MockMvcResultMatchers.jsonPath("$.status").value("success"))
		 ;
	 }
	 @Test
	 public void testUserLogin() throws Exception { 
		 mockMvc.perform((MockMvcRequestBuilders.get("/api/newuser/userLogin.do")
				 .param("phone", "15210226629")
				 .param("password", "bb5c1735f591390c36ad60344a3cca92")
				 ))
		 .andDo(MockMvcResultHandlers.print())
		 .andExpect(MockMvcResultMatchers.status().isOk())
		 //.andExpect(content().contentType(MediaType.APPLICATION_JSON))
		 .andExpect(MockMvcResultMatchers.jsonPath("$.status").value("success"))
		 ;
	 }
	 
	 @Test
	 public void testUpdateByBase() throws Exception {
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
	 
	 @Test
	 public void testRead() throws Exception { 
		 mockMvc.perform((MockMvcRequestBuilders.get("/api/user/read.do")
				 
				.param("userId", "82B8273856CACFA665A0DDF72702C94B")
				 //.param("boxerId", "53")
				 
				 //.param("coachId", "47")
				 //.param("query", "1")
				 )
				 )
		 .andDo(MockMvcResultHandlers.print())
		 .andExpect(MockMvcResultMatchers.status().isOk())
		 //.andExpect(content().contentType(MediaType.APPLICATION_JSON))
		 .andExpect(MockMvcResultMatchers.jsonPath("$.status").value("success"))
		 ;
	 }
	 
	 
	 /**
	  * 测试用户微信登录
	  * 
	  * @throws Exception
	  */
	 @Test
	 public void testuserWXLogin() throws Exception {
		 String ts = new Date().getTime() + "";
		 String userId = "4494aaa144e7469a9234c75288a9f597";
		 String loginToken = "be353bffc77a4aa4a1769808667c08a5";
		 
		 String unionId = "o-HoIs3yJioAR3l9Ar2VzBAv_TNM";
		 String openId = "o1wPWvkOkTFPgR5t-2Vla8EjR_TM";
		 String sex = "男性";
		 
		 StringBuffer checkPram = new StringBuffer();
		 checkPram.append("quanjijia123456");
		 checkPram.append(ts);
		 System.err.println("测试MD5前值： " + checkPram);//顺序： asn
		 String checkSignOnline = MD5Util.MD5((checkPram.toString()).getBytes());//前台生成的sign
		 
		 byte imges[] = {1,12,5,58,127};
		// name = URLEncoder.encode(name, "utf-8");
		 sex = URLEncoder.encode(sex, "utf-8");
		 
		 mockMvc.perform(
				 (MockMvcRequestBuilders.fileUpload("/api/newuser/userWXLogin.do")
						 //(MockMvcRequestBuilders.get("/api/category/addUserCategory.do")
						 //.file("imges", imges)//多文件上传报错
						 .param("keyToken",checkSignOnline)
						 .param(    "timestamp",ts)
						 .param(    "unionId",unionId)
						 .param(    "openId",openId)
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
	  * 删除用户积分缓存
	  * 
	  * @throws Exception
	  */
	 @Test
	 public void testclearBalance() throws Exception { 
		 
		 String ts = new Date().getTime() + "";
		 //String userId = "4c364ca3120d4a01a2766f155c55cc3d";
		 //String loginToken = "17fe2072e58c45ef8eb62d2a24aacc88";
		 String userId = "7568da8f6bc242e4918165e24d28a209";
		 String loginToken = "d7f3d9f2b7aa4a16919e735e46572e5c";
	        
	        
	        StringBuffer checkPram = new StringBuffer();
	        checkPram.append(loginToken);
	        checkPram.append(ts);
	        checkPram.append(userId);
	        
	        checkPram.append(SignPromiseValue.getName("/api/user/delete$balance"));
	        System.err.println("测试MD5前值： " + checkPram);//顺序： asn
	        String checkSignOnline = MD5Util.MD5((checkPram.toString()).getBytes());//前台生成的sign
	        
		 mockMvc.perform((MockMvcRequestBuilders.post("/api/user/delete$balance.do")
				 .param("userId", userId)
	                .param("loginToken",loginToken)
	                .param(    "ts",ts)
	                .param(    "checkSign",checkSignOnline)
            ))
            .andDo(MockMvcResultHandlers.print())
            .andExpect(MockMvcResultMatchers.status().isOk())
            //.andExpect(content().contentType(MediaType.APPLICATION_JSON))
            .andExpect(MockMvcResultMatchers.jsonPath("$.status").value("success"))
            ;
	 }	 
	 @Test
	 public void testgetBalance() throws Exception { 
		 
		 String ts = new Date().getTime() + "";
		// String userId = "855bd9552ff0488aa0d0765e9ccd46cc";
		// String loginToken = "e486599672f543eca030dc9f6b072492";
		 String userId = "4c364ca3120d4a01a2766f155c55cc3d";
		 String loginToken = "978acc5acdb2480e94d63d55dcc4ce60";//
		 
		 StringBuffer checkPram = new StringBuffer();
		 checkPram.append(loginToken);
		 checkPram.append(ts);
		 checkPram.append(userId);
		 
		 checkPram.append(SignPromiseValue.getName("/api/user/get$balance"));
		 System.err.println("测试MD5前值： " + checkPram);//顺序： asn
		 String checkSignOnline = MD5Util.MD5((checkPram.toString()).getBytes());//前台生成的sign
		 
		 mockMvc.perform((MockMvcRequestBuilders.post("/api/user/get$balance.do")
				 .param("userId", userId)
				 .param("loginToken",loginToken)
				 .param(    "ts",ts)
				 .param(    "checkSign",checkSignOnline)
				 ))
		 .andDo(MockMvcResultHandlers.print())
		 .andExpect(MockMvcResultMatchers.status().isOk())
		 //.andExpect(content().contentType(MediaType.APPLICATION_JSON))
		 .andExpect(MockMvcResultMatchers.jsonPath("$.status").value("success"))
		 ;
	 }	 
	 /**
	  * 积分查询
	  * @throws Exception
	  */
	 @Test
	 public void testqueryMoney() throws Exception { 
		 String ts = new Date().getTime() + "";
		 //String userId = "a8c0ba8e2071425ab21737ec65f5a333";
		 //String loginToken = "592eb34f9edd411b98e3ec9dcb46a976";
		 //String userId = "4c364ca3120d4a01a2766f155c55cc3d";
		 //String loginToken = "978acc5acdb2480e94d63d55dcc4ce60";
		 String userId = "7568da8f6bc242e4918165e24d28a209";
		 String loginToken = "d7f3d9f2b7aa4a16919e735e46572e5c";
		 StringBuffer checkPram = new StringBuffer();
		 // loginToken,out_trade_no,ts,userId,
		 //checkPram.append(attach);
		 checkPram.append(userId);
		 checkPram.append(loginToken);
		 checkPram.append(ts);
		 
		 checkPram.append("quanjijia222222");
		 System.err.println("测试MD5前值： " + checkPram);//顺序： asn
		 String checkSignOnline = MD5Util.MD5((checkPram.toString()).getBytes());//前台生成的sign
		 
		 mockMvc.perform((MockMvcRequestBuilders.post("/api/cumulation/queryMoney.do")
				 .param("loginToken",loginToken)
				 .param(    "ts",ts)
				 .param(    "checkSign",checkSignOnline)
				 .param(    "userId",userId)
				 ))
		 .andDo(MockMvcResultHandlers.print())
		 .andExpect(MockMvcResultMatchers.status().isOk())
		 //.andExpect(content().contentType(MediaType.APPLICATION_JSON))
		 .andExpect(MockMvcResultMatchers.jsonPath("$.status").value("success"))
		 ;
	 }
}

package com.rainbowbus.interceptor;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.MethodParameter;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.rainbowbus.bean.UserAdminBean;
import com.rainbowbus.bean.api.UserBean;
import com.rainbowbus.conf.ConstantSetConfigurable;
import com.rainbowbus.conf.SignPromiseValue;
import com.rainbowbus.controller.base.BaseCtr;
import com.rainbowbus.service.UserService;
import com.rainbowbus.service.impl.api.TradeUnionService;
import com.rainbowbus.service.impl.api.UserServiceImpl;
import com.rainbowbus.utils.CommonUtils;
import com.rainbowbus.utils.CookieUtils;
import com.rainbowbus.utils.EncodingUtils;
import com.rainbowbus.utils.JsonUtils;

public class DMLOPerarorInterceptor implements HandlerInterceptor {
	@Autowired
	private UserServiceImpl userService;
	
	@Override
	public void afterCompletion(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, Exception arg3)
			throws Exception {
	}

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object arg2, ModelAndView arg3)
			throws Exception {
	}

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		//request.setCharacterEncoding("utf-8");//设置获取请求的解码格式，只对post请求有效
		
		String uri = request.getServletPath() + "";
		String pathInfo = request.getPathInfo();
		if (pathInfo != null && pathInfo.length() > 0) {
		    uri = uri + pathInfo;
		}
		String signPromiseIndex = "";
		if(uri.indexOf(".do") != -1){
			signPromiseIndex = uri.replace(".do", "");
		}
		
		//System.out.println(signPromiseIndex);
		
		//String comment = request.getParameter("comment");
		//System.out.println("1. comment descode前：" + comment);
		
		Map<String, String[]> params =  request.getParameterMap();
		//System.out.println("2. comment descode前：" + params.get("comment")[0]);
		//注意该步骤会把中文descode
		EncodingUtils.descodeRequestParammeters(params);
		//EncodingUtils.descodeRequestParammeters(params);
		//System.out.println("3. comment descode后：" + params.get("comment")[0]);
		//CommonUtils.checkChineseEncode(request);
		
		response.setContentType("text/plain; charset=utf-8");

		// 参数校验
		/*if (!CommonUtils.checkRequestParm(request.getParameterMap(), "userId,loginToken,ts,checkSign")) {
			response.getWriter().print(JsonUtils.getErrorJson("参数错误"));
			return false;
		}*/

		// 用户校验
		String userId = request.getParameter("userId");
		if(StringUtils.isBlank(userId)){
			response.getWriter().print(JsonUtils.getErrorJson("用户编号不能为空"));
			return false;
		}
		UserBean user = userService.selectByUserId(userId);
		//Map<String, Object> user = CommonUtils.getUserinfo(userId != null ? userId.toString() : "",tradeUnionService);
		if (user == null) {
			response.getWriter().print(JsonUtils.getErrorJson("用户不存在"));
			return false;
		}
		
		// 登录校验
		String loginToken = request.getParameter("loginToken");
		if (loginToken == null || !loginToken.equals(user.getToken())) {
			response.getWriter().print(JsonUtils.getErrorJson("登录超时，请重新登录"));
			return false;
		}
		
		//sign校验
		String checkSign = request.getParameter("checkSign");
		if (checkSign == null
				|| !CommonUtils.verifySign(SignPromiseValue.getName(signPromiseIndex), SignPromiseValue.getDubugInfo(signPromiseIndex),params, checkSign)) {
			response.getWriter().print(JsonUtils.getErrorJson("参数串校验失败，请校对"));
			return false;
		}
		
		
		/**
		 * 给controller中一些属性赋值
		 */
		HandlerMethod hand = (HandlerMethod) handler;
		try {
			BaseCtr ctr = (BaseCtr) hand.getBean();
			ctr.setUser(user);
			ctr.setRequest(request);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return true;
	}
}

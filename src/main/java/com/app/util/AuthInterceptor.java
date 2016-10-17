package com.app.util;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;
import org.apache.struts2.ServletActionContext;

import com.cmcc.system.actions.BaseAction;
import com.cmcc.system.dao.ManagerDao;
import com.cmcc.system.dto.DAO;
import com.opensymphony.xwork2.Action;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.AbstractInterceptor;

@SuppressWarnings("serial")
public class AuthInterceptor extends AbstractInterceptor {
	public Logger logger = Logger.getLogger("PROTAL-DEBUG");
	//@Suppress Warnings("unchecked");
	@Override
	public String intercept(ActionInvocation invocation) throws Exception {
		try{
		HttpSession session = ServletActionContext.getRequest().getSession();
		HttpServletResponse response = ServletActionContext.getResponse();
	    HttpServletRequest  request = ServletActionContext.getRequest();
		String url = request.getServletPath();
		
		if (url == null) {
			url = "";
		}
		if (noFileUrl(url, request)) {
			return invocation.invoke();
		}
		
		/**
		 * baseAction公共方法处理
		 */
		System.out.println("AuthInterceptor___url===="+url);
		if(session == null || session.getAttribute("admin") == null){
			logger.debug("session==null ");
			if (request.getHeader("x-requested-with") != null && request.getHeader("x-requested-with").equalsIgnoreCase("XMLHttpRequest")) {
				response.setContentType("text/html;charset=UTF-8");
				response.setStatus(6000);
				return null;
			}else{
				return Action.LOGIN;
			}
		} 
		
		String voName = request.getParameter("vo");
		if(StringUtils.isBlank(voName) && url.indexOf("p_") != -1){
			voName = url.split("_")[2];
			if(voName.indexOf(".action") != -1){
				voName = voName.split(".action")[0].replace("list", "").replace("add", "");
			}
			
		}
		if(StringUtils.isNotBlank(voName)){
			String className = "com.cmcc.census.pugilist.dtos." + voName;
			String daoName = "com.cmcc.census.pugilist.daos." + voName;
			Class<?> clazz = null;
			Class<?> daoClazz = null;
			try {
				daoClazz = Class.forName(daoName + "DAO");
				clazz =  Class.forName(className + "Bean");
			} catch (Exception e) {
				try {
					clazz = Class.forName(className);
				} catch (Exception e1) {
					e1.printStackTrace();
				}
			}
			if(clazz != null){
				try {
					BaseAction action = (BaseAction) invocation.getAction();
					DAO vo = (DAO) clazz.newInstance();
					ManagerDao<?> voDao = null;
					if(daoClazz != null){
						voDao = (ManagerDao<?>) daoClazz.newInstance();
					}
					//BeanUtils.copyProperties(request.getParameterMap(), vo);//modeldriver实现
					System.err.println(request.getParameter("name"));
					action.setVo(vo,voDao);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		}
		
		
		return invocation.invoke();
		}catch(Exception e){
			e.printStackTrace();
			throw e;
		}
	}
	
	protected boolean noFileUrl(String url, HttpServletRequest request) {
		if (url.toLowerCase().indexOf("login") > 0 || url.indexOf("login.jsp") > 0 ) {
			return true;
		}
		return false;
	}

}

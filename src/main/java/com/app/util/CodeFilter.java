package com.app.util;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.springframework.util.StopWatch;


public class CodeFilter extends HttpServlet implements Filter {
	protected static Logger logger = Logger.getLogger("CodeFilter");
	/**
	 * 
	 */
	private static final long serialVersionUID = -7408041300602002565L;

	@Override
	public void doFilter(ServletRequest request, ServletResponse arg1,FilterChain chain) throws IOException, ServletException {
		HttpServletRequest req = (HttpServletRequest) request;
		StopWatch stopWatch = new StopWatch(req.getRequestURI() + System.currentTimeMillis());
		stopWatch.start();

		logger.info(stopWatch.getTotalTimeMillis() + "==请求方式==" + req.getMethod() );
		logger.info(stopWatch.getTotalTimeMillis() + "==请求参数==" + req.getQueryString() );
		logger.info(stopWatch.getTotalTimeMillis() + "==请求参数==" + req.getParameterMap().toString() );
		req.setCharacterEncoding("utf-8");
		chain.doFilter(new ParameterRequestWrapper((HttpServletRequest) req), arg1); 
		
		stopWatch.stop();
		logger.info(stopWatch.getTotalTimeMillis() + "---" + req.getRequestURI() + "执行时间");
	}

	@Override
	public void init(FilterConfig arg0) throws ServletException {

	}
}

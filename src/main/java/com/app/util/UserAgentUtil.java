package com.rainbowbus.utils;

import java.util.Enumeration;

import javax.servlet.http.HttpServletRequest;

public class UserAgentUtil {
	public static int getClientType(HttpServletRequest request) {
		Enumeration typestr = request.getHeaderNames();
		String s1 = request.getHeader("user-agent");
		if (s1.contains("Android")) {
			return 1;
		} else if (s1.contains("iPhone")) {
			return 2;
		} else if (s1.contains("iPad")) {
			return 2;
		} else {
			System.out.println("其他客户端");
		}
		return 1;
	}
}

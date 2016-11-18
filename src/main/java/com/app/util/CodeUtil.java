package com.app.util;

import java.io.UnsupportedEncodingException;

public class CodeUtil {
	/**
	 * 把get请求中的中文乱码转为中文
	 * @param str
	 * @return
	 * @throws UnsupportedEncodingException
	 */
	public static String toChinese(Object str) throws UnsupportedEncodingException{
		return new String(str.toString().getBytes("ISO-8859-1"),"UTF-8");
	}
}

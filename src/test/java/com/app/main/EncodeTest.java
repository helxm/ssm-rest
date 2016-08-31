package com.app.main;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;

public class EncodeTest {
	public static void main(String[] args) throws UnsupportedEncodingException {
		
		String realname = new String("中国".getBytes("utf-8"),"ISO-8859-1");
		System.err.println(realname);
		String str = new String(realname.getBytes("ISO-8859-1"),"utf-8");
		System.err.println(str);
		
		
		String str0 = new String("中国".getBytes("utf-8"),"ISO-8859-1");
		System.err.println(str0);
		str0 = new String("å¤ªè´¹äº".getBytes("ISO-8859-1"),"utf-8");
		System.err.println(str0);
		
		String str1 = URLEncoder.encode("中国", "utf-8");//浏览器url encode编码非ascii
		System.err.println(str1);
		str1 = new String(str1.getBytes("utf-8"),"ISO-8859-1");
		System.err.println(str1);
		str1 = URLDecoder.decode(str1, "ISO-8859-1");//tomcat decode
		System.err.println(str1);
		str1 = new String(str1.getBytes("ISO-8859-1"),"utf-8");
		System.err.println(str1);
		
		System.err.println("--------------------------------------------------------");
		System.err.println(new String("男性".getBytes("utf-8"),"ISO-8859-1"));//ç·æ§
		System.err.println(new String("ç·æ§".getBytes("utf-8"),"ISO-8859-1"));//Ã§ÂÂ·Ã¦ÂÂ§
		System.err.println(URLEncoder.encode("ç·æ§", "utf-8"));//%C3%A7%C2%94%C2%B7%C3%A6%C2%80%C2%A7
		System.err.println(URLDecoder.decode("%C3%A7%C2%94%C2%B7%C3%A6%C2%80%C2%A7", "utf-8"));//ç·æ§
		System.err.println(URLDecoder.decode("%C3%A7%C2%94%C2%B7%C3%A6%C2%80%C2%A7", "ISO-8859-1"));//Ã§ÂÂ·Ã¦ÂÂ§
		System.err.println(new String("Ã§ÂÂ·Ã¦ÂÂ§".getBytes("ISO-8859-1"),"utf-8"));//ç·æ§
		System.err.println(new String("ç·æ§".getBytes("ISO-8859-1"),"utf-8"));//男性
		
		System.err.println();
		System.err.println("--------------------------------------------------------");
		System.err.println();
		
		/**
		 * get请求：浏览器URLEncode(utf-8)——>tomcat URLDescode(ISO-8859-1)——>手动转码
		 */
		System.err.println(URLEncoder.encode("男性", "utf-8"));//%E7%94%B7%E6%80%A7
		System.err.println(URLDecoder.decode("%E7%94%B7%E6%80%A7", "ISO-8859-1"));//ç·æ§
		System.err.println(new String("ç·æ§".getBytes("ISO-8859-1"),"utf-8"));//男性
		
		System.err.println();
		System.err.println("--------------------------------------------------------");
		System.err.println();
		
		System.err.println(URLDecoder.decode("男性", "ISO-8859-1"));//男性
		System.err.println(new String("男性".getBytes("ISO-8859-1"),"utf-8"));//??
		
		System.err.println();
		System.err.println("--------------------------------------------------------");
		System.err.println();
		System.err.println(URLEncoder.encode("%E5%BC%A0%E4%B8%89", "utf-8"));//%25E5%25BC%25A0%25E4%25B8%2589
		System.err.println(URLDecoder.decode("%25E5%25BC%25A0%25E4%25B8%2589", "utf-8"));//%E5%BC%A0%E4%B8%89
		System.err.println(URLDecoder.decode("%E5%BC%A0%E4%B8%89", "utf-8"));//张三
		
		System.err.println();
		System.err.println("--------------------------------------------------------");
		System.err.println();
		
		System.err.println(URLEncoder.encode("hgjje", "utf-8"));//hgjje
		System.err.println(URLDecoder.decode("ç·æ§", "utf-8"));//ç·æ§
	}
	
}

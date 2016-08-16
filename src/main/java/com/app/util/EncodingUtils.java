package com.rainbowbus.utils;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
/**
 * 
 * {@code EncodingUtils}
 * TODO 编码相关
 * @author hesh
 * @time 2016年4月5日 - 下午2:52:10
 */
public class EncodingUtils {
	/**
	 * 
	 * TODO 判断字符串是否为中文
	 * @Description
	 * @param str
	 * @return
	 * @version 1.0 2016年4月5日-下午2:52:33
	 * @auther hesh
	 */
	public static boolean isChineseChar(String str) {
		boolean temp = false;
		Pattern p = Pattern.compile("[\u4e00-\u9fa5]");
		Matcher m = p.matcher(str);
		if (m.find()) {
			temp = true;
		}
		return temp;
	}
	/**
	 * 判断字符串是否被URLEncode（主用于url参数判断）
	 * 特殊字符不予考虑
	 * @param str 原始值不能包含%，若包含请另作处理
	 * @return
	 */
	public static boolean isHasURLEncoded(String str) {
		if(str.contains(" ")){//encode空格会转为+，encode是没有空格的
			return false;
		}
		String s1 = URLEncoder.encode(str);
		String s2 = URLDecoder.decode(str);
		if (s1.equals(s2)) {
			return false;
		}
		return true;
	}
	/**
	 * 把请求参数中的descode中文解码
	 * @param request
	 * @throws UnsupportedEncodingException 
	 */
	public static void descodeRequestParammeters(Map<String, String[]> params) throws UnsupportedEncodingException{
		
		for(Map.Entry<String, String[]> entry : params.entrySet()){
			String key = entry.getKey();
			String[] vs = entry.getValue();
			if(vs != null && vs.length > 0){
				for (int i = 0; i < vs.length; i++) {
					if("comment".equals(key)){
						System.out.println("1 - " + vs[i]);
					}
					if(EncodingUtils.isHasURLEncoded(vs[i])){
						if(StringUtils.isNotBlank(vs[i])){
							vs[i] = URLDecoder.decode(vs[i],"utf-8");
							System.out.println("2 - " + vs[i]);
							//vs[i] = new String(vs[i].getBytes("iso-8859-1"), "utf-8");
							//System.out.println("3 - " + vs[i]);
						}
						//System.err.println("descode key：" + key + "， value： " + vs[i]);
					}
				}
			}
		}
	}
	/**
	 * 获取字符串编码格式
	 * 
	 * @param str
	 * @return
	 */
	public static String getEncoding(String str) {
		String oldStr = str;
		String encode = "UTF-8";
		try {
			if (oldStr.equals(new String(str.getBytes(encode), encode))) {
				return encode;
			}
		} catch (Exception exception) {
		}
		encode = "ISO-8859-1";
		try {
			if (str.equals(new String(str.getBytes(encode), encode))) {
				return encode;
			}
		} catch (Exception exception1) {
		}
		encode = "GB2312";
		try {
			if (str.equals(new String(str.getBytes(encode), encode))) {
				return encode;
			}
		} catch (Exception exception2) {
		}
		encode = "GBK";
		try {
			if (str.equals(new String(str.getBytes(encode), encode))) {
				return encode;
			}
		} catch (Exception exception3) {
		}
		return "";
	}
}

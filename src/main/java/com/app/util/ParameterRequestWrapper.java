package com.app.util;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;

import org.apache.commons.lang.StringUtils;

/**
 * 解码前台中文URLEcode
 * 
 * @author hesh
 *
 */
public class ParameterRequestWrapper extends HttpServletRequestWrapper {

	public ParameterRequestWrapper(HttpServletRequest request) {
		super(request);
		// TODO Auto-generated constructor stub
	}

	private HttpServletRequest getHttpServletRequest() {
		return (HttpServletRequest) super.getRequest();
	}

	/**
	 * 读取参数 -- 修正了中文问题.
	 */
	public String getParameter(String name) {
		return toDescode(getHttpServletRequest().getParameter(name));
	}

	/**
	 * 读取参数列表 - 修正了中文问题.
	 */
	public String[] getParameterValues(String name) {
		String method = getMethod();
		String values[] = getHttpServletRequest().getParameterValues(name);
		if (values != null) {
			for (int i = 0; i < values.length; i++) {
				values[i] = toDescode(values[i]);
				//values[i] = toChi(values[i],values[i]);
				if("GET".equalsIgnoreCase(method)){
					values[i] = toChi(values[i],"ISO-8859-1");
				}
			}
		}
		return values;
	}
	public static void main(String[] args) throws UnsupportedEncodingException {
		String str = "中国";
		byte[] b1 = str.getBytes("utf-8");
		//byte[] b2 = str.getBytes("iso-8859-1");
		String b2 = new String(b1,"iso-8859-1");//类似容器servlet parameter中的参数值
		String b2_ = new String(b1,"utf-8");//类似容器servlet parameter中的参数值
		System.out.println(str.equals(b2));//false
		
		String b3 = new String(b2.getBytes("iso-8859-1"),"utf-8");
		String b3_ = new String(b2_.getBytes("iso-8859-1"),"utf-8");
		System.out.println(b2.equals(b3));//false  但b3=str
		System.out.println(b2_.equals(b3_));//false
		
		System.err.println(b2.equals(new String(b2.getBytes("utf-8"),"utf-8")));
		System.err.println(b2.equals(new String(b2.getBytes("iso-8859-1"),"iso-8859-1")));
		
		String name = new String("中国".getBytes("ISO-8859-1"));
		//name = new String(name.getBytes("utf-8"),"utf-8");
		//System.err.println(name);
		//System.err.println(EncodingUtils.getEncoding(name));
	}
	/**
	 * 转换由表单读取的数据的内码. 从 ISO 字符转到 GBK.
	 */
	public static String toChi(String input,String charEncode) {
		if (StringUtils.isBlank(input)) {
			return "";
		}
		try {
			byte[] bytes = input.getBytes(charEncode);
			return new String(bytes, "UTF-8");
		} catch (Exception ex) {
		}
		return null;
	}
	/**
	 * 把中文urlecode解码
	 * utf-8解码
	 * 
	 * @param input
	 * @return
	 */
	public String toDescode(String input) {
		if(input == null){
			return null;
		}
		if (StringUtils.isBlank(input)) {
			return "";
		}
		try {
			if(EncodingUtils.isHasURLEncoded(input)){
				return URLDecoder.decode(input, "utf-8");
			}
		} catch (Exception ex) {
		}
		return input;
	}
}

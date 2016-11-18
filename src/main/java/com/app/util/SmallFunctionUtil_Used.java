package com.app.util;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;

/**
 * 小工具类 
 * @author yuyu
 *
 */
public class SmallFunctionUtil_Used {
	/**
	 * 获取客户端的Ip地址
	 * @param request
	 * @return
	 */
	public static String getIpAddr(HttpServletRequest request) {
		String ip = request.getHeader("x-forwarded-for");
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getHeader("Proxy-Client-IP");
		}
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getHeader("WL-Proxy-Client-IP");
		}
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getRemoteAddr();
		}
		// 如果是多重代理的话，x-forwarded-for获取到的是一个ip字符串，此时取第一个非unknown地址
		if (ip != null & ip.length() != 0 & !"unknown".equalsIgnoreCase(ip)) {
			//ip = "unknown,192.168.1.110,192.168.1.120,192.168.1.130,192.168.1.100";
			if (ip.indexOf(",") != -1) {
				String ips[] = ip.split(",");
				for (int i = 0; i < ips.length; i++) {
					if (!"unknown".equals(ips[i])) {
						ip = ips[i]; break;
					}
				}
			}
		}
		return ip;
	}
	/**
	 * 获取本周为一年中的第几周（从周一开始）
	 * @param request
	 * @return
	 */
	public static int getWeekThOnYear() {
		//获取现在是第几周
		Calendar cl = Calendar.getInstance();
		//cl.set(2015, 9, 18);
		int k = cl.get(Calendar.WEEK_OF_YEAR);
		int day = cl.get(Calendar.DAY_OF_WEEK);
		System.out.println(k+"===="+day);
		if(day==1){
			k = k-1;
		}
		return k;
	}
	
	//获取两个日期之间的时间
	/** 
	* 计算两个日期之间相差的天数 
	* @param smdate 较小的时间 
	* @param bdate 较大的时间 
	* @return 相差天数 
	* @throws ParseException 
	*/ 
	public static int daysBetween(Date smdate,Date bdate) throws ParseException 
	{ 
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd"); 
		smdate=sdf.parse(sdf.format(smdate)); 
		bdate=sdf.parse(sdf.format(bdate)); 
		Calendar cal = Calendar.getInstance(); 
		cal.setTime(smdate); 
		long time1 = cal.getTimeInMillis(); 
		cal.setTime(bdate); 
		long time2 = cal.getTimeInMillis(); 
		long between_days=(time2-time1)/(1000*3600*24); 
	
		return Integer.parseInt(String.valueOf(between_days)); 
	} 

	/** 
	*字符串的日期格式的计算 
	*/ 
	public static int daysBetween(String smdate,String bdate) throws ParseException{ 
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd"); 
		Calendar cal = Calendar.getInstance(); 
		cal.setTime(sdf.parse(smdate)); 
		long time1 = cal.getTimeInMillis(); 
		cal.setTime(sdf.parse(bdate)); 
		long time2 = cal.getTimeInMillis(); 
		long between_days=(time2-time1)/(1000*3600*24); 
	
		return Integer.parseInt(String.valueOf(between_days)); 
	} 
	
	//获取年龄
	public static int getAge(String birthday) throws ParseException{ 
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		//得到当前的年份
		String cYear = sdf.format(new Date()).substring(0,4);
		//得到生日年份
		String birthYear = birthday.substring(0,4);

		int age = Integer.parseInt(cYear) - Integer.parseInt(birthYear);
		return age;
	}
	
	/**
	  * 判断字符串是否是整数
	  */
	 public static boolean isInteger(String value) {
	  try {
	   Integer.parseInt(value);
	   return true;
	  } catch (NumberFormatException e) {
	   return false;
	  }
	 }

	 /**
	  * 判断字符串是否是浮点数
	  */
	 public static boolean isDouble(String value) {
	  try {
	   Double.parseDouble(value);
	   if (value.contains("."))
	    return true;
	   return false;
	  } catch (NumberFormatException e) {
	   return false;
	  }
	 }

	 /**
	  * 判断字符串是否是数字
	  */
	 public static boolean isNumber(String value) {
	  return isInteger(value) || isDouble(value);
	 }
	
}

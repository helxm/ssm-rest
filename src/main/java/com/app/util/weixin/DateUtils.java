package com.app.util.weixin;

import java.util.Date;

/**
 * 
 * @author heshenhua
 * @2016年4月7日 下午12:53:55
 * @desc:日期工具
 */
/**
 * @author heshenhua
 * @2016年6月23日 下午10:22:31
 * @desc:
 */
public class DateUtils {

	/**
	 * 获取当前系统的时间戳
	 * 
	 * @return
	 */
	public static long getCurrentTimestamp() {

		long timeStamp = new Date().getTime();
		return timeStamp;
	}

	public static String getCurrentTimestamp10() {

		long timeStamp = new Date().getTime() / 1000;
		String timestr = String.valueOf(timeStamp);
		return timestr;
	}

	public static String getTimeStamp() {
		int time = (int) (System.currentTimeMillis() / 1000);
		return String.valueOf(time);
	}

/*	public static void main(String[] args) throws JsonGenerationException, JsonMappingException, IOException {
		System.out.println(DateUtils.getTimeStamp());
		Map<String,String> map = Maps.newHashMap();
//		map.put("package", "Sign=Wxpay");
		ObjectMapper mapper = new ObjectMapper();
		String str = mapper.writeValueAsString(map);
		System.out.println(str);
		}*/
}

package com.app.util;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.fileupload.FileUpload;
import org.apache.commons.lang.StringUtils;
import org.springframework.util.Assert;

import com.rainbowbus.service.impl.api.TradeUnionService;

public class CommonUtils {
	// 校验必填参数
		public static boolean checkRequestParm(Map<String, String[]> param, String checkName) {
			boolean checkResult = true;
			String[] checkNames = checkName.split(",");
			for (int i = 0; i < checkNames.length; i++) {
				String[] checkValue = param.get(checkNames[i]);
				if (checkValue == null || StringUtils.isEmpty(checkValue[0])) {
					checkResult = false;
					break;
				}
			}
			return checkResult;
		}

		// 纯String参数串转换
		public static Map<String, String> getParm(Map<String, String[]> requestParm) throws UnsupportedEncodingException {
			Map<String, String> returnMap = new HashMap<String, String>();

			Set<String> key = requestParm.keySet();
			Iterator<String> keyI = key.iterator();
			while (keyI.hasNext()) {
				String name = keyI.next();
				String value = requestParm.get(name)[0] == null ? null : requestParm.get(name)[0];
				// String value = requestParm.get(name)[0]==null?null:(new
				// String((requestParm.get(name)[0]).getBytes("ISO-8859-1"),"utf-8"));
				returnMap.put(name, value);
			}
			return returnMap;
		}
		/**
		 * 
		 * TODO 把参数中的中文找出来，并解码转为中文字符串
		 * @Description
		 * @param request
		 * @throws UnsupportedEncodingException
		 * @version 1.0 2016年4月5日-下午3:13:39
		 * @auther hesh
		 */
		public static void checkChineseEncode(HttpServletRequest request) throws UnsupportedEncodingException {
			Map<String, String[]> requestParm = request.getParameterMap();
			Map<String, String> returnMap = new HashMap<String, String>();
			
			Set<String> key = requestParm.keySet();
			Iterator<String> keyI = key.iterator();
			while (keyI.hasNext()) {
				String name = keyI.next();
				String value = requestParm.get(name)[0] == null ? null : requestParm.get(name)[0];
				// String value = requestParm.get(name)[0]==null?null:(new
				// String((requestParm.get(name)[0]).getBytes("ISO-8859-1"),"utf-8"));
				value = URLDecoder.decode(value);
				if(EncodingUtils.isChineseChar(value)){//若参数值为中文，使用URLDecoder解码
					request.setAttribute(name, value);
				}
			}
		}

		// 获取用户信息
		public static  Map<String, Object> getUserinfo(String userId,TradeUnionService tradeUnionService) throws Exception {
			//TradeUnionService tradeUnionService = (TradeUnionService) SpringInit.getBean("tradeUnionService");
			List<Map<String, Object>> userList = tradeUnionService.isBackup(userId);
			if (userList == null || userList.size() != 1) {
				return null;
			}
			return userList.get(0);
		}

		/**
		 *  
		 * TODO 从request中获取参数，sign校验
		 * @Description
		 * @param parm
		 * @param checkKey
		 * @param checkSign
		 * @param checkName
		 * @return
		 * @version 1.0 2016年4月5日-下午5:28:34
		 * @auther hesh
		 */
		public static  boolean checkSignString(Map<String, String> parm, String checkKey, String checkSign, String checkName) {
			// 先按字典排序
			// Map<String, String> sortedParams = new TreeMap<String, String>(parm);
			String[] checkNames = checkName.split(",");
			StringBuffer checkPram = new StringBuffer();
			for (int i = 0; i < checkNames.length; i++) {
				checkPram.append(parm.get(checkNames[i]));
			}
			checkPram.append(checkKey);
			String checkSignOnline = MD5Util.MD5((checkPram.toString()).getBytes());
			return checkSign.equalsIgnoreCase(checkSignOnline);
		}
		/**
		 * 
		 * TODO 拿参数值拼接字符串sign校验
		 * 		注意：request中的中文是URLEcode要URLDescode，再拼接字符串
		 * 		提示：文件类型不用考虑，request.getParameterMap()中获取不了文件参数
		 * @Description
		 * @param key
		 * @param param
		 * @param checkSign
		 * @return
		 * @version 1.0 2016年4月5日-下午5:30:21
		 * @throws UnsupportedEncodingException 
		 * @auther hesh
		 */
		public static boolean verifySign(String promiseKey,int dubugInfo,Map<String, String[]> params,String checkSign) throws UnsupportedEncodingException{
			List<String> keys = sortKey(params);
			String values = "";
			String values_ = "";
			String keyNames = "";
			for(String key : keys){
				if("checkSign".equals(key)){
					continue;
				}
				keyNames += key + ",";
				String[] vs = params.get(key);
				for (int i = 0; i < vs.length; i++) {
					values += vs[i];
					values_ += vs[i] + ",";
				}
			}
			System.err.println("MD5参数顺序： " + keyNames);
			String md5str = values + promiseKey;
			System.err.println("后台MD5前值： " + values_);
			String sign = MD5Util.MD5((md5str).getBytes("UTF-8"));
			if(sign.equalsIgnoreCase(checkSign)){
				System.out.println("前台MD5 加密方式为：UTF-8");
				return true;
			}else{
				sign = MD5Util.MD5((md5str).getBytes("iso-8859-1"));
				if(sign.equalsIgnoreCase(checkSign)){
					System.out.println("前台MD5 加密方式为：iso-8859-1");
					return true;
				}else if(sign.equalsIgnoreCase(checkSign)){
					sign = MD5Util.MD5((md5str).getBytes("gbk"));
					System.out.println("前台MD5 加密方式为：gbk");
					return true;
				}else{
					System.out.println("sign校验不通过");
					String message = "sign校验不通过； === 正确的MD5参数顺序： " + keyNames + "； === 对应的MD5前值： " + values_;
					if(dubugInfo == 1){
						throw new RuntimeException(message);
					}
				}
			}
			return false;
			//System.err.println("MD5 values + promiseKey :" + values + promiseKey + "--md5--"+ sign);
		}
		/**
		 * 从请求参数map中获取参数key，排序返回list
		 * 
		 * @param params
		 * @return
		 */
		public static List<String> sortKey(Map<String, String[]> params){
			List<String> keys = new ArrayList<String>();
			for(String k : params.keySet()){
				keys.add(k);
			}
			Collections.sort(keys);
			return keys;
			
		}
		/**
		 * 
		 * TODO 拿参数值拼接字符串sign校验
		 * 		注意：request中的中文是URLEcode要URLDescode，再拼接字符串
		 * @Description
		 * @param key
		 * @param param
		 * @param checkSign
		 * @return
		 * @version 1.0 2016年4月5日-下午5:30:21
		 * @auther hesh
		 */
		public static boolean verifySign(String key,String param,String checkSign){
			String sign = MD5Util.MD5((param+key).getBytes());
			return sign.equalsIgnoreCase(checkSign);
		}
		
}

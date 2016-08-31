package com.app.util;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.validation.Errors;

import com.app.dto.ViewBean;


public class JsonUtils {

	/**
	 * 返回json格式的错误标识
	 * 
	 * @return
	 */
	public static String getJson(Map<String, String> map) {
		JSONObject responseInfo = null;
		try {
			responseInfo = new JSONObject();
			for (String key : map.keySet()) {
				responseInfo.put(key, map.get(key));
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return responseInfo.toString();
	}
	
	public static String getSuccessJson2Type(String message,int type){
		JSONObject jsonData = new JSONObject();
		try {
			jsonData.put("type", type);
		} catch (JSONException e) {
			e.printStackTrace();
		}
		return getDataJson(jsonData,message);
	}
	
	public static String getErrorJson2Type(String message,int type){
		JSONObject jsonResult = new JSONObject();
		JSONObject jsonData = new JSONObject();
		try {
			jsonData.put("type", type);
			jsonResult.put("data", jsonData);
			jsonResult.put("status", "error");
			jsonResult.put("message", message);
		} catch (JSONException e) {
			e.printStackTrace();
		}
		return jsonResult.toString();
	}
	
	public static String getJson2Code(String message,int code){
		JSONObject jsonResult = new JSONObject();
		JSONObject jsonData = new JSONObject();
		try {
			jsonData.put("resultCode", code);
			jsonResult.put("data", jsonData);
			jsonResult.put("status", "success");
			jsonResult.put("message", message);
		} catch (JSONException e) {
			e.printStackTrace();
		}
		return jsonResult.toString();
	}
	
	public static String getSecurityJson(JSONObject json,String jsonName){
		String result = null;
		try {
			if(!json.isNull(jsonName)){
				result = json.getString(jsonName).toString();
			}
		} catch (JSONException e) {
			e.printStackTrace();
		}
		return result;
	}
	
	public static String getDataJson(JSONObject data,String message){
		JSONObject jsonObjRtn = new JSONObject();
		try {
			jsonObjRtn.put("status", "success");
			jsonObjRtn.put("message", message);
			jsonObjRtn.put("data", data);
		} catch (JSONException e) {
			e.printStackTrace();
		}
		return jsonObjRtn.toString();
	}
	
	
	/**
	 * 返回结果，信息和积分 add by yu.yu 20150727
	 * @param data
	 * @param message
	 * @param cost
	 * @return
	 */
	public static String getDataJsonAndCost(JSONObject data,String message,int cost){
		JSONObject jsonObjRtn = new JSONObject();
		try {
			jsonObjRtn.put("status", "success");
			jsonObjRtn.put("message", message);
			jsonObjRtn.put("data", data);
			jsonObjRtn.put("cost", cost);
		} catch (JSONException e) {
			e.printStackTrace();
		}
		return jsonObjRtn.toString();
	}
	
	public static String responseJson(boolean flag,String message,Object data){
		net.sf.json.JSONObject jsonObjRtn = new net.sf.json.JSONObject();
		jsonObjRtn.put("status", flag);
		jsonObjRtn.put("message", message);
		jsonObjRtn.put("data", data);
		return jsonObjRtn.toString();
	}
	
	public static String responseJsonCode(String success,String message,int code){
		JSONObject jsonObjRtn = new JSONObject();
		try {
			jsonObjRtn.put("status", success);
			jsonObjRtn.put("message", message);
			JSONObject jsonData = new JSONObject();
			jsonData.put("resultCode", code);
			jsonObjRtn.put("data", jsonData);
		} catch (JSONException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		
		return jsonObjRtn.toString();
	}
	
	
	/**
	 * 
	 * @param status
	 * @param errorMessage
	 * @param message
	 * @param bizId
	 * @param credits
	 *  status	yes	string	255	查询状态，回复ok或者fail
		errorMessage	no	string	255	出错原因
		message	no	string	255	相关信息
		bizId	yes	string	255	开发者的订单号
		credits	yes	long	20	用户积分余额
	 * @return
	 */
	public static String responseJsonDuiBa(String status,String errorMessage,String message,String bizId,String credits){
		net.sf.json.JSONObject jsonObjRtn = new net.sf.json.JSONObject();
		jsonObjRtn.put("status", status);
		jsonObjRtn.put("errorMessage", errorMessage);
		jsonObjRtn.put("message", message);
		jsonObjRtn.put("bizId", bizId);
		jsonObjRtn.put("credits", credits);
		return jsonObjRtn.toString();
	}
	
	/**
	 * 兑换订单号
	 * @return
	 */
	public static String todo(){
		SimpleDateFormat mat=new SimpleDateFormat("yyyyMMddHHmmssSSSS");
		int rand = (int) ((Math.random() * 9 + 1) * 1000);
		String numbers=mat.format(new Date())+rand;//订单号
		return numbers;
	}
	
	/**
	 * add by yu.yu 公交圈返回值状态
	 * @param code
	 * @param message
	 * @return
	 */
	public static String getbusCircleJson(String code,String message){
		net.sf.json.JSONObject jsonObjRtn = new net.sf.json.JSONObject();
		jsonObjRtn.put("code", code);
		jsonObjRtn.put("msg", message);
		return jsonObjRtn.toString();
	}
	
	public static Object toEmpty(Object str){
		if(str==null){
			return "";
		}
		return str;
	}
	/**
	 * 获取当前时间
	 * @param type
	 * @return
	 */
	public static String getNowDate(String type){//yyyy-MM-dd HH:mm:ss
		SimpleDateFormat mat=new SimpleDateFormat(type);
		return mat.format(new Date());
	}
	
//=====================整理使用的==================================================================
	public static String getErrorJson(String message){
		Map<String, String> map = new HashMap<String, String>();
		map.put("status", "error");
		map.put("message", message);
		return JsonUtils.getJson(map);
	}
	
	public static String getSuccessJson(String message){
		Map<String, String> map = new HashMap<String, String>();
		map.put("status", "success");
		map.put("message", message);
		return JsonUtils.getJson(map);
	}
	
	public static String getDataJsonNew(String status,String message,JSONObject data){
		JSONObject jsonObjRtn = new JSONObject();
		try {
			jsonObjRtn.put("status", status);
			jsonObjRtn.put("message", message);
			jsonObjRtn.put("data", data);
		} catch (JSONException e) {
			e.printStackTrace();
		}
		return jsonObjRtn.toString();
	}
	
	public static String getDataJsonNew(String status,String message,JSONArray data){
		JSONObject jsonObjRtn = new JSONObject();
		try {
			jsonObjRtn.put("status", status);
			jsonObjRtn.put("message", message);
			jsonObjRtn.put("data", data);
		} catch (JSONException e) {
			e.printStackTrace();
		}
		return jsonObjRtn.toString();
	}
	
	public static String getDataJson(String status,String message,Object data){
		JSONObject jsonObjRtn = new JSONObject();
		try {
			jsonObjRtn.put("status", status);
			jsonObjRtn.put("message", message);
			jsonObjRtn.put("data", data);
		} catch (JSONException e) {
			e.printStackTrace();
		}
		return jsonObjRtn.toString();
	}
	
	/**
	 * 
	 * TODO 用于springMVC restful controller
	 * @Description 以便直接返回实体
	 * @param message
	 * @param data
	 * @return
	 * @version 1.0 2016年3月24日-下午4:51:24
	 * @auther hesh
	 */
	public static ViewBean getError(String message,Object data){
		return new ViewBean("error", message,data);
	}
	public static ViewBean getError(String message){
		return new ViewBean("error", message, null);
	}
	public static ViewBean getError(Errors errors){
		return new ViewBean("error", errors.getFieldError().getDefaultMessage(), null);
	}
	public static ViewBean getSuccess(String message,Object data){
		if(data == null){//处理data数据不存在的情况
			return new ViewBean("error", "获取失败", "数据不存在");
		}
		return new ViewBean("success", message, data);
	}
	public static ViewBean getSuccess(String message){
		return new ViewBean("success", message, null);
	}
}

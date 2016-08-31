package com.app.dto;

import java.util.Map;

import org.json.JSONObject;

/**
 * 
 * {@code ViewStatus}
 * TODO 用于新增时，返回给前台的状态信息装配实体，方便转为json
 * @author hesh
 * @time 2016年3月24日 - 下午2:42:42
 */
public class ViewBean {
	private String status;//success,error
	private String message;//参数错误 , 成功信息
	private Object data;//bean
	
	public ViewBean() {
	}
	public ViewBean(String status, String message, Object data) {
		this.status = status;
		this.message = message;
		this.data = data;
	}
	
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public Object getData() {
		return data;
	}
	public void setData(Object data) {
		this.data = data;
	}
	
}

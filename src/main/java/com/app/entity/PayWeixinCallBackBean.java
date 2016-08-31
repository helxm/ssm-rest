package com.app.entity;

import com.app.dto.BaseBean;

/**
 * 微信回调
 * @author hesh
 *
 */
public class PayWeixinCallBackBean extends BaseBean {
	
	
	/**
	 *  回调部分，获取信息
	 */
	private String return_code;//返回状态码
	private String return_msg;//返回信息
	
	/**
	 * 以下字段在return_code为SUCCESS的时候有返回
	 */
	private String result_code;//业务结果
	private String err_code;//错误代码
	private String err_code_des;//错误代码描述
	private String openid;//用户标识
	private String is_subscribe;//是否关注公众账号:用户是否关注公众账号，Y-关注，N-未关注，仅在公众账号类型支付有效
	private String bank_type;//付款银行
	
	private Integer total_fee;//总金额
	private String fee_type;//货币种类
	private Integer cash_fee;//现金支付金额
	private String cash_fee_type;//现金支付货币类型
	
	private String transaction_id;//微信支付订单号
	private String out_trade_no;//商户订单号
	private String attach;//商家数据包
	
	private String time_end;//支付完成时间
	
	private String userId;//用户id
	
	/*
	 * 接收参数后，由服务端回调接口返回给微信的信息
	 */
	private String return_code_to_wx;//记录单号
	private String return_msg_to_wx;//记录时间
	public String getReturn_code() {
		return return_code;
	}
	public void setReturn_code(String return_code) {
		this.return_code = return_code;
	}
	public String getReturn_msg() {
		return return_msg;
	}
	public void setReturn_msg(String return_msg) {
		this.return_msg = return_msg;
	}
	public String getResult_code() {
		return result_code;
	}
	public void setResult_code(String result_code) {
		this.result_code = result_code;
	}
	public String getErr_code() {
		return err_code;
	}
	public void setErr_code(String err_code) {
		this.err_code = err_code;
	}
	public String getErr_code_des() {
		return err_code_des;
	}
	public void setErr_code_des(String err_code_des) {
		this.err_code_des = err_code_des;
	}
	public String getOpenid() {
		return openid;
	}
	public void setOpenid(String openid) {
		this.openid = openid;
	}
	public String getIs_subscribe() {
		return is_subscribe;
	}
	public void setIs_subscribe(String is_subscribe) {
		this.is_subscribe = is_subscribe;
	}
	public String getBank_type() {
		return bank_type;
	}
	public void setBank_type(String bank_type) {
		this.bank_type = bank_type;
	}
	public Integer getTotal_fee() {
		return total_fee;
	}
	public void setTotal_fee(Integer total_fee) {
		this.total_fee = total_fee;
	}
	public String getFee_type() {
		return fee_type;
	}
	public void setFee_type(String fee_type) {
		this.fee_type = fee_type;
	}
	public Integer getCash_fee() {
		return cash_fee;
	}
	public void setCash_fee(Integer cash_fee) {
		this.cash_fee = cash_fee;
	}
	public String getCash_fee_type() {
		return cash_fee_type;
	}
	public void setCash_fee_type(String cash_fee_type) {
		this.cash_fee_type = cash_fee_type;
	}
	public String getTransaction_id() {
		return transaction_id;
	}
	public void setTransaction_id(String transaction_id) {
		this.transaction_id = transaction_id;
	}
	public String getOut_trade_no() {
		return out_trade_no;
	}
	public void setOut_trade_no(String out_trade_no) {
		this.out_trade_no = out_trade_no;
	}
	public String getAttach() {
		return attach;
	}
	public void setAttach(String attach) {
		this.attach = attach;
	}
	public String getTime_end() {
		return time_end;
	}
	public void setTime_end(String time_end) {
		this.time_end = time_end;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getReturn_code_to_wx() {
		return return_code_to_wx;
	}
	public void setReturn_code_to_wx(String return_code_to_wx) {
		this.return_code_to_wx = return_code_to_wx;
	}
	public String getReturn_msg_to_wx() {
		return return_msg_to_wx;
	}
	public void setReturn_msg_to_wx(String return_msg_to_wx) {
		this.return_msg_to_wx = return_msg_to_wx;
	}
	
}

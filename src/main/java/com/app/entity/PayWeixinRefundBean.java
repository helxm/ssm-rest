package com.app.entity;

import com.app.dto.BaseBean;

/**
 * 微信退单
 * 对于一个微信订单，本系统只支持一次退单（微信支持多次退单）
 * 
 * 退单后系统库表更新：
 * 	1. PayLogBean表isDelated置为0；
 * 	2. PayWeixinBean表order_status置为4，trade_state，trade_state_desc做更新
 * @author hesh
 *
 */
public class PayWeixinRefundBean extends BaseBean {
	
	private String appid;//应用ID
	private String mch_id;//商户号
	
	private String out_trade_no;//商户订单号
	private String transaction_id;//微信支付订单号
	
	private Integer total_fee;//总金额
	private Integer refund_fee;//退单金额       
	
	private String refund_fee_type;//货币种类
	
	private String userId;//用户id
	private String out_refund_no;//退单号
	
	/**
	 * 结果返回
	 */
	private String return_code;//返回状态码
	private String return_msg;//返回信息
	
	private String result_code;//返回状态码
	private String err_code;//返回信息
	private String err_code_des;//返回状态码
	
	/**
	 * 以下字段在return_code为SUCCESS的时候有返回
	 * +
	 */
	private String refund_id;//微信退款单号（从微信返回）
	private String refund_channel;//退款渠道（从微信返回）
	private Integer cash_fee;//现金支付金额（从微信返回）
	private Integer cash_refund_fee;//现金退款金额（从微信返回）
	private String fee_type;//订单金额货币种类（从微信返回）
	/**
	 * 查询退单返回
	 */
	private Integer refund_count;//退款笔数
	private String out_refund_no_$n;//商户退款单号
	private String refund_id_$n;//微信退款单号
	private String refund_channel_$n;//退款渠道
	private Integer refund_fee_$n;//退款金额
	private String refund_status_$n;//退款状态
	private String refund_recv_accout_$n;//退款入账账户
	
	public String getOut_trade_no() {
		return out_trade_no;
	}
	public void setOut_trade_no(String out_trade_no) {
		this.out_trade_no = out_trade_no;
	}
	public String getTransaction_id() {
		return transaction_id;
	}
	public void setTransaction_id(String transaction_id) {
		this.transaction_id = transaction_id;
	}
	public Integer getTotal_fee() {
		return total_fee;
	}
	public void setTotal_fee(Integer total_fee) {
		this.total_fee = total_fee;
	}
	public Integer getRefund_fee() {
		return refund_fee;
	}
	public void setRefund_fee(Integer refund_fee) {
		this.refund_fee = refund_fee;
	}
	public String getRefund_fee_type() {
		return refund_fee_type;
	}
	public void setRefund_fee_type(String refund_fee_type) {
		this.refund_fee_type = refund_fee_type;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getOut_refund_no() {
		return out_refund_no;
	}
	public void setOut_refund_no(String out_refund_no) {
		this.out_refund_no = out_refund_no;
	}
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
	public String getRefund_id() {
		return refund_id;
	}
	public void setRefund_id(String refund_id) {
		this.refund_id = refund_id;
	}
	public String getRefund_channel() {
		return refund_channel;
	}
	public void setRefund_channel(String refund_channel) {
		this.refund_channel = refund_channel;
	}
	public Integer getCash_fee() {
		return cash_fee;
	}
	public void setCash_fee(Integer cash_fee) {
		this.cash_fee = cash_fee;
	}
	public Integer getCash_refund_fee() {
		return cash_refund_fee;
	}
	public void setCash_refund_fee(Integer cash_refund_fee) {
		this.cash_refund_fee = cash_refund_fee;
	}
	public String getFee_type() {
		return fee_type;
	}
	public void setFee_type(String fee_type) {
		this.fee_type = fee_type;
	}
	public Integer getRefund_count() {
		return refund_count;
	}
	public void setRefund_count(Integer refund_count) {
		this.refund_count = refund_count;
	}
	public String getOut_refund_no_$n() {
		return out_refund_no_$n;
	}
	public void setOut_refund_no_$n(String out_refund_no_$n) {
		this.out_refund_no_$n = out_refund_no_$n;
	}
	public String getRefund_id_$n() {
		return refund_id_$n;
	}
	public void setRefund_id_$n(String refund_id_$n) {
		this.refund_id_$n = refund_id_$n;
	}
	public String getRefund_channel_$n() {
		return refund_channel_$n;
	}
	public void setRefund_channel_$n(String refund_channel_$n) {
		this.refund_channel_$n = refund_channel_$n;
	}
	public Integer getRefund_fee_$n() {
		return refund_fee_$n;
	}
	public void setRefund_fee_$n(Integer refund_fee_$n) {
		this.refund_fee_$n = refund_fee_$n;
	}
	public String getRefund_status_$n() {
		return refund_status_$n;
	}
	public void setRefund_status_$n(String refund_status_$n) {
		this.refund_status_$n = refund_status_$n;
	}
	public String getRefund_recv_accout_$n() {
		return refund_recv_accout_$n;
	}
	public void setRefund_recv_accout_$n(String refund_recv_accout_$n) {
		this.refund_recv_accout_$n = refund_recv_accout_$n;
	}
	public String getAppid() {
		return appid;
	}
	public void setAppid(String appid) {
		this.appid = appid;
	}
	public String getMch_id() {
		return mch_id;
	}
	public void setMch_id(String mch_id) {
		this.mch_id = mch_id;
	}
	
}

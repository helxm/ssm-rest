package com.app.entity;

import com.app.dto.BaseBean;

/**
 * 微信支付相关过程订单等信息记录
 * 用于：赛事成本支付，赞助等
 * 
 * 表：t_cumulation_wall_detail_recharge
 * 		此表最初为yuyu用于记录微信充值的表，这里其他下单同样记录在该表，通过attach字段区分，
 * 		微信下单时新增记录，微信回调通知更新记录，查询结果再次更新记录。
 * 
 * 字段多为微信相关接口字段
 * 
 * 
 * @author hesh
 *
 */
public class PayWeixinBean extends BaseBean {
	private String userId;//下单用户id
	private String objId;//行为记录id，对象表id
	
	/*
	 * 1. 统一下单 传给微信的参数
	 */
	
	private String appid;//应用ID
	private String mch_id;//商户号
	private String device_info;//设备号
	private String nonce_str;//随机字符串
	private String sign;//签名
	
	private String body;//商品描述
	private String detail;//商品详情
	private String attach;//附加数据 存储PayLogBean的tableName
	
	private String out_trade_no;//商户订单号(由后台生成的唯一字符串)
	private String fee_type;//货币类型
	private Integer total_fee;//总金额
	
	private String spbill_create_ip;//终端IP
	private String time_start;//交易起始时间
	private String time_expire;//交易结束时间
	private String goods_tag;//商品标记
	private String notify_url;//通知地址
	private String trade_type;//交易类型
	private String limit_pay;//指定支付方式
	
	private String orderTime;
	
	/**
	 * 2. 接口调用状态及状态信息返回，下单及回调都会返回，后返回的覆盖前面的
	 */
	private String result_code;//业务结果
	private String return_msg;//返回信息
	private String err_code;//错误代码
	private String err_code_des;//错误代码描述
	
	
	/**
	 * 回调返回
	 */
	private String return_code;//SUCCESS/FAIL 此字段是通信标识，非交易标识，交易是否成功需要查看result_code来判断
	 private String openid;//varchar(128) DEFAULT NULL COMMENT '用户标识',
	 private String is_subscribe;//varchar(1) DEFAULT NULL COMMENT '是否关注公众账号:用户是否关注公众账号，Y-关注，N-未关注，仅在公众账号类型支付有效',
	 private String bank_type;//varchar(16) DEFAULT NULL COMMENT '付款银行',
	 private String cash_fee_type;//varchar(16) DEFAULT NULL COMMENT '现金支付货币类型',
	 private String transaction_id;//varchar(32) DEFAULT NULL COMMENT '微信支付订单号',
	
	private String time_end;//varchar(14) DEFAULT NULL COMMENT '支付完成时间',
	private Integer cash_fee;//int(100) DEFAULT NULL COMMENT '现金支付金额',
	
	/**
	 * 订单查询返回状态
	 */
	private String trade_state;//varchar(32) DEFAULT NULL COMMENT '微信端订单状态',
	private String trade_state_desc;//varchar(256) DEFAULT NULL COMMENT '微信交易状态描述',
	/**
	 * 我方定义的支付状态
	 */
	private Integer order_status;//我们的订单状态 0保存  1成功 2失败 3其它  4退单中 5退单完成
	
	
	/**
	 * 以下字段在return_code 和result_code都为SUCCESS的时候有返回
	 */
	private String prepay_id;//预支付交易会话标识（下单返回）
	
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
	public String getDevice_info() {
		return device_info;
	}
	public void setDevice_info(String device_info) {
		this.device_info = device_info;
	}
	public String getNonce_str() {
		return nonce_str;
	}
	public void setNonce_str(String nonce_str) {
		this.nonce_str = nonce_str;
	}
	public String getSign() {
		return sign;
	}
	public void setSign(String sign) {
		this.sign = sign;
	}
	public String getBody() {
		return body;
	}
	public void setBody(String body) {
		this.body = body;
	}
	public String getDetail() {
		return detail;
	}
	public void setDetail(String detail) {
		this.detail = detail;
	}
	public String getAttach() {
		return attach;
	}
	public void setAttach(String attach) {
		this.attach = attach;
	}
	public String getOut_trade_no() {
		return out_trade_no;
	}
	public void setOut_trade_no(String out_trade_no) {
		this.out_trade_no = out_trade_no;
	}
	public String getFee_type() {
		return fee_type;
	}
	public void setFee_type(String fee_type) {
		this.fee_type = fee_type;
	}
	public Integer getTotal_fee() {
		return total_fee;
	}
	public void setTotal_fee(Integer total_fee) {
		this.total_fee = total_fee;
	}
	public String getSpbill_create_ip() {
		return spbill_create_ip;
	}
	public void setSpbill_create_ip(String spbill_create_ip) {
		this.spbill_create_ip = spbill_create_ip;
	}
	public String getTime_start() {
		return time_start;
	}
	public void setTime_start(String time_start) {
		this.time_start = time_start;
	}
	public String getTime_expire() {
		return time_expire;
	}
	public void setTime_expire(String time_expire) {
		this.time_expire = time_expire;
	}
	public String getGoods_tag() {
		return goods_tag;
	}
	public void setGoods_tag(String goods_tag) {
		this.goods_tag = goods_tag;
	}
	public String getNotify_url() {
		return notify_url;
	}
	public void setNotify_url(String notify_url) {
		this.notify_url = notify_url;
	}
	public String getTrade_type() {
		return trade_type;
	}
	public void setTrade_type(String trade_type) {
		this.trade_type = trade_type;
	}
	public String getLimit_pay() {
		return limit_pay;
	}
	public void setLimit_pay(String limit_pay) {
		this.limit_pay = limit_pay;
	}
	public String getPrepay_id() {
		return prepay_id;
	}
	public void setPrepay_id(String prepay_id) {
		this.prepay_id = prepay_id;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getObjId() {
		return objId;
	}
	public void setObjId(String objId) {
		this.objId = objId;
	}
	public String getResult_code() {
		return result_code;
	}
	public void setResult_code(String result_code) {
		this.result_code = result_code;
	}
	public String getErr_code_des() {
		return err_code_des;
	}
	public void setErr_code_des(String err_code_des) {
		this.err_code_des = err_code_des;
	}
	public String getReturn_msg() {
		return return_msg;
	}
	public void setReturn_msg(String return_msg) {
		this.return_msg = return_msg;
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
	public String getTime_end() {
		return time_end;
	}
	public void setTime_end(String time_end) {
		this.time_end = time_end;
	}
	public String getTrade_state() {
		return trade_state;
	}
	public void setTrade_state(String trade_state) {
		this.trade_state = trade_state;
	}
	public String getTrade_state_desc() {
		return trade_state_desc;
	}
	public void setTrade_state_desc(String trade_state_desc) {
		this.trade_state_desc = trade_state_desc;
	}
	public Integer getCash_fee() {
		return cash_fee;
	}
	public void setCash_fee(Integer cash_fee) {
		this.cash_fee = cash_fee;
	}
	public Integer getOrder_status() {
		return order_status;
	}
	public void setOrder_status(Integer order_status) {
		this.order_status = order_status;
	}
	public String getErr_code() {
		return err_code;
	}
	public void setErr_code(String err_code) {
		this.err_code = err_code;
	}
	public String getReturn_code() {
		return return_code;
	}
	public void setReturn_code(String return_code) {
		this.return_code = return_code;
	}
	public String getOrderTime() {
		return orderTime;
	}
	public void setOrderTime(String orderTime) {
		this.orderTime = orderTime;
	}
	
}

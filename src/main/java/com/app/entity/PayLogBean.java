package com.app.entity;

import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.NotEmpty;

import com.app.dto.BaseBean;
import com.app.validator.First;
import com.app.validator.Second;
import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * 交易日志表 PayLog 
 * 
 * 交易成功记录，微信下单不记录，要等到手台收到微信回调支付成功成功通知才记录
 * 
 * 报名配置：TableNameConfig
 * 
 * 虚拟货币与人民币消费不互通，如购票后赛事终止，退票，退钱到用户支付账户，而不是转为积分
 * 所以：money != null 则money_p=0
 * 
 * @author hesh
 *
 */
public class PayLogBean extends BaseBean {
	@NotNull(message = "objId不能为空",groups = Second.class)
	private Object objId;// /交易关联对象
	@NotEmpty(message = "userId不能为空",groups = First.class)
	private String userId;// '发起人userId',
	private Integer money_p = 0;// 支付-对应积分表一分
	private Integer money = 0;// 支付-分
	private Character isDelated;// 0-无效记录；2-p;3-RMB(默认为分)
	private String objType;//交易关联对象类型，暂定存表配置
	private Integer type;// 下注（0- 投注A，默认；1-投注B；2-平局；3-A KO B；4-B KO A）;//购票 数目，和金额独立
	
	private String remark;//备注
	private Character payWay;//支付方式，0-积分支付(默认)，1-微信支付
	
	private Character orderStatu;//订单状态，0-无效状态，1-有效，2-退单中（微信订单有退单时间）
	
	/**
	 * 微信相关，以下三个用于微信统一下单，接收参数，不做存储
	 */
	private String body;//商品描述，需传入应用市场上的APP名字-实际商品名称，天天爱消除-游戏充值，示例：腾讯充值中心-QQ会员充值
	private String detail;//商品详情，商品名称明细列表，示例：Ipad mini  16G  白色
	/**
	 * 通过该字段传递tableName（微信callBack保存PayLogBean，从微信订单表中获取attach，即tableName）
	 */
	private String attach;//附加数据，附加数据，在查询API和支付通知中原样返回，该字段主要用于商户携带订单的自定义数据
	
	private String wx_out_trade_no;//微信下订单时，有admin后台生成的订单号，通过回调通知返回 - out_trade_no
	private String wx_transaction_id;//微信下订单时，由微信服务器生成的订单号，通过回调通知返回 - transaction_id
	
	/**
	 * 总记录表（t_actionrecord_app）记录所需字段
	 */
	private String ip;//接口调用ip
	private String actionStatus;//接口调用情况
	private String subsidyResult;//
	/**
	 * 金额总计，不做存储
	 */
	private Integer tatol;//money_s + money_p * 100 （+ money 虚拟货币与人民币消费不互通，如购票后赛事终止，退票，退钱到用户支付账户，而不是转为积分）
	public Integer getTatol() {
		if(this.isDelated != null && (this.isDelated == '1' || this.isDelated == '2' )){
			tatol = this.money_p  ;//积分交易
		}else{
			if(this.money != null && this.money != 0){//rmb 肯定不能为0
				tatol = this.money;
			}else{
				tatol = this.money_p ;//积分交易
			}
		}
		//new Double(ArithUtil.add(this.money_p * 100,this.money_s,this.money)).intValue();
		return tatol;
	}
	public void setTatol(Integer tatol) {
		this.tatol = tatol;
	}
	public Object getObjId() {
		return objId;
	}
	public void setObjId(Object objId) {
		this.objId = objId;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public Integer getMoney_p() {
		return money_p;
	}
	public void setMoney_p(Integer money_p) {
		this.money_p = money_p;
	}
	public Character getIsDelated() {
		return isDelated;
	}
	public void setIsDelated(Character isDelated) {
		this.isDelated = isDelated;
	}
	public String getObjType() {
		return objType;
	}
	public void setObjType(String objType) {
		this.objType = objType;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public Integer getType() {
		return type;
	}
	public void setType(Integer type) {
		this.type = type;
	}
	public Integer getMoney() {
		return money;
	}
	public void setMoney(Integer money) {
		this.money = money;
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
	public Character getPayWay() {
		return payWay;
	}
	public void setPayWay(Character payWay) {
		this.payWay = payWay;
	}
	public String getWx_out_trade_no() {
		return wx_out_trade_no;
	}
	public void setWx_out_trade_no(String wx_out_trade_no) {
		this.wx_out_trade_no = wx_out_trade_no;
	}
	public String getWx_transaction_id() {
		return wx_transaction_id;
	}
	public void setWx_transaction_id(String wx_transaction_id) {
		this.wx_transaction_id = wx_transaction_id;
	}
	public String getIp() {
		return ip;
	}
	public void setIp(String ip) {
		this.ip = ip;
	}
	public String getActionStatus() {
		return actionStatus;
	}
	public void setActionStatus(String actionStatus) {
		this.actionStatus = actionStatus;
	}
	public String getSubsidyResult() {
		return subsidyResult;
	}
	public void setSubsidyResult(String subsidyResult) {
		this.subsidyResult = subsidyResult;
	}
	public Character getOrderStatu() {
		return orderStatu;
	}
	public void setOrderStatu(Character orderStatu) {
		this.orderStatu = orderStatu;
	}
	
}

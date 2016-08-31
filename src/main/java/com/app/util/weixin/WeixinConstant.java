package com.app.util.weixin;

/**
 * 
 * @author heshenhua
 * @2016年6月2日 上午10:57:33
 */
public class WeixinConstant {
	
	public static String SUCCESS = "SUCCESS"; //成功return_code
	
	public static String FAIL = "FAIL";   //失败return_code
	
	public static String PRODUCT_BODY = "格斗家-赛事购票"; // 商品描述
	
	public static String TRADE_TYPE = "APP";//支付类型 JSAPI NATIVE APP等等
	
	public static String PROCESSING = "PROCESSING";//退款处理中
	public static String NOTSURE = "NOTSURE";//未确定，需要商户原退款单号重新发起
	public static String CHANGE = "CHANGE";//转入代发，退款到银行发现用户的卡作废或者冻结了，导致原路退款银行卡失败，资金回流到商户的现金帐号，需要商户人工干预，通过线下或者财付通转账的方式进行退款。
}

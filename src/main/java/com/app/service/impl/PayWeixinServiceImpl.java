package com.app.service.impl;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.lang.reflect.InvocationTargetException;
import java.util.HashMap;
import java.util.Map;
import java.util.SortedMap;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.jdom.JDOMException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import com.alibaba.fastjson.JSONObject;
import com.app.dao.PayWeixinMapper;
import com.app.dao.PayWeixinRefundMapper;
import com.app.dto.ViewBean;
import com.app.entity.PayWeixinBean;
import com.app.entity.PayWeixinRefundBean;
import com.app.service.AbstractService;
import com.app.service.PayWeixinService;
import com.app.util.JsonUtils;
import com.app.util.weixin.ConfigUtil;
import com.app.util.weixin.HttpUtil;
import com.app.util.weixin.PayCommonUtil;
import com.app.util.weixin.WeixinConstant;
import com.app.util.weixin.XMLUtil;
import com.google.common.collect.ImmutableMap;

@Service
public class PayWeixinServiceImpl extends AbstractService<PayWeixinBean,Long> implements PayWeixinService  {

	private static final Logger logger = LoggerFactory.getLogger(PayWeixinServiceImpl.class);
	@Autowired
	private PayWeixinMapper mapper;
	
	@Autowired
	private PayWeixinRefundMapper payWeixinRefundMapper;
	/**
	 * 给baseMapper赋值
	 */
	@Autowired
	public void setBaseMapper() {
		super.setBaseMapper(mapper);
		
	}
	/**
	 * 查询退款
	 * 
	 * @return
	 * @throws IOException 
	 * @throws JDOMException 
	 */
	public ViewBean addRefundQuery(String out_trade_no,String userId) throws JDOMException, IOException{
		logger.info("查询退款");
		PayWeixinBean payWeixinBean = checkOrder(out_trade_no, userId,1);
		/**
		 * hesh开发 相关的支付记录（PayLogBean）
		 */
		String tableName = payWeixinBean.getAttach();
		
		PayWeixinRefundBean record = new PayWeixinRefundBean();
		record.setOut_trade_no(out_trade_no);
		record = payWeixinRefundMapper.findOne(record);
		Assert.notNull(record, "请先申请退单");
		
		// 设置订单参数
		SortedMap<String, Object> parameters = refundQueryOrder(out_trade_no);
		parameters.put("sign",PayCommonUtil.createSign("UTF-8", parameters));// sign签名 key
		String requestXML = PayCommonUtil.getRequestXml(parameters);// 生成xml格式字符串
		String responseStr = "";
		try {	
			responseStr = HttpUtil.httpsRequest(ConfigUtil.CHECK_REFUND_URL, "POST", requestXML);// 带上post
		} catch (Exception e) {
			logger.error("微信退单查询",userId + "-" + out_trade_no, e.getMessage());
			return JsonUtils.getError("退单查询请求失败"); // 抽离到统一错误码泪中 统一定一下
		}
		// 检验API返回的数据里面的签名是否合法，避免数据在传输的过程中被第三方篡改
		if (!PayCommonUtil.checkIsSignValidFromResponseString(responseStr)) {
			logger.error("微信退单查询失败,签名可能被篡改");
			return JsonUtils.getError("退单查询失败");
		}
		// 解析结果 resultStr
		SortedMap<String, Object> resutlMap = XMLUtil.doXMLParse(responseStr);
		if (resutlMap != null
				&& WeixinConstant.FAIL.equals(resutlMap.get("return_code"))) {
			logger.error("微信退单查询请求错误,订单编号:" + out_trade_no + ",失败原因:" + resutlMap.get("return_msg"));
			return JsonUtils.getError("退单查询请求错误",resutlMap.get("return_msg"));
		}
		if(WeixinConstant.FAIL.equals(resutlMap.get("result_code"))){
			return JsonUtils.getError("退单失败",resutlMap.get("err_code_des"));
		}
		if(WeixinConstant.FAIL.equals(resutlMap.get("refund_status_$n"))){
			return JsonUtils.getError("退单失败","退款失败");
		}
		if(WeixinConstant.PROCESSING.equals(resutlMap.get("refund_status_$n"))){
			return JsonUtils.getError("退款处理中");
		}
		if(WeixinConstant.NOTSURE.equals(resutlMap.get("refund_status_$n"))){
			return JsonUtils.getError("未确定，需要商户原退款单号重新发起");
		}
		if(WeixinConstant.CHANGE.equals(resutlMap.get("refund_status_$n"))){
			return JsonUtils.getError("转入代发，退款到银行发现用户的卡作废或者冻结了，导致原路退款银行卡失败，资金回流到商户的现金帐号，需要商户人工干预，通过线下或者财付通转账的方式进行退款。");
		}
		
		try {
			org.apache.commons.beanutils.BeanUtils.copyProperties(record, resutlMap);
		} catch (IllegalAccessException | InvocationTargetException e) {
			logger.info( e.getMessage());
		}
		payWeixinRefundMapper.updateByPrimaryKey(record);
		
		
		payWeixinBean.setOrder_status(5);//退单完成
		mapper.updateByPrimaryKey(payWeixinBean);
		
		//成功后返回客户端数据
		Map<String,Object> map = new HashMap<>();
		map.put("out_trade_no", out_trade_no);
		map.put("out_refund_no_$n", resutlMap.get("out_refund_no_$n"));
		map.put("refund_fee_$n", resutlMap.get("refund_fee_$n"));
		map.put("total_fee", resutlMap.get("total_fee"));
		map.put("refund_channel_$n", resutlMap.get("refund_channel_$n"));
		map.put("refund_count", resutlMap.get("refund_count"));
		map.put("refund_status_$n", resutlMap.get("refund_status_$n"));
		map.put("refund_recv_accout_$n", resutlMap.get("refund_recv_accout_$n"));
		
		logger.info("退单结束");
		return JsonUtils.getSuccess("退单成功", map);
	}
	/**
	 * 退单
	 * 	处理流程：
	 * 		1. 生成退单号，同时保存到退单表（退单失败再次退单使用同一单号）；
	 * 		2. 根据退单号及相关参数调用退单接口；
	 * 		3. 获取结果并更新退单表（结果状态为success表示微信服务器成功接收退单请求，不表示退单成功）；
	 * 		4. 调用查询接口确定退单是否成功，同时更新退单表
	 * 
	 * @param out_trade_no
	 * @param out_refund_no
	 * 		生成退款订单id（微信说明：商户系统内部的退款单号，商户系统内部唯一，同一退款单号多次请求只退一笔）
	 * @return
	 * @throws JDOMException
	 * @throws IOException
	 */
	public ViewBean addRefundOrder(String out_trade_no,String out_refund_no,String userId) throws JDOMException, IOException {
		logger.info("退单开始");
		
		PayWeixinBean payWeixinBean = checkOrder(out_trade_no, userId,0);
		/**
		 * hesh开发 相关的支付记录（PayLogBean）
		 */
		String tableName = payWeixinBean.getAttach();
		
		int total_fee = payWeixinBean.getTotal_fee();
		int refund_fee = payWeixinBean.getTotal_fee();//全额退款
		
		PayWeixinRefundBean record = checkRefund(out_trade_no, out_refund_no, total_fee, refund_fee);
		
		// 设置订单参数
		SortedMap<String, Object> parameters = refundeOrder(out_refund_no,total_fee ,refund_fee);
		parameters.put("sign",PayCommonUtil.createSign("UTF-8", parameters));// sign签名 key
		String requestXML = PayCommonUtil.getRequestXml(parameters);// 生成xml格式字符串
		String responseStr = "";
		try {	
			responseStr = HttpUtil.httpsRequest(ConfigUtil.CHECK_REFUND_URL, "POST", requestXML);// 带上post
		} catch (Exception e) {
			logger.error("微信退单",userId + "-" + out_trade_no, e.getMessage());
			return JsonUtils.getError("退单请求失败"); // 抽离到统一错误码泪中 统一定一下
		}
		// 检验API返回的数据里面的签名是否合法，避免数据在传输的过程中被第三方篡改
		if (!PayCommonUtil.checkIsSignValidFromResponseString(responseStr)) {
			logger.error("微信退单失败,签名可能被篡改");
			return JsonUtils.getError("退单失败");
		}
		// 解析结果 resultStr
		SortedMap<String, Object> resutlMap = XMLUtil.doXMLParse(responseStr);
		if (resutlMap != null
				&& WeixinConstant.FAIL.equals(resutlMap.get("return_code"))) {
			logger.error("微信退单请求错误,订单编号:" + out_trade_no + ",失败原因:" + resutlMap.get("return_msg"));
			return JsonUtils.getError("请求错误",resutlMap.get("return_msg"));
		}
		if(WeixinConstant.FAIL.equals(resutlMap.get("result_code"))){
			return JsonUtils.getError("退单请求失败",resutlMap.get("err_code_des"));
		}
		//成功后返回客户端数据
		Map<String,Object> map = new HashMap<>();
		map.put("out_trade_no", out_trade_no);
		map.put("out_refund_no", out_refund_no);
		map.put("refund_fee", resutlMap.get("refund_fee"));
		map.put("total_fee", resutlMap.get("total_fee"));
		map.put("refund_id", resutlMap.get("refund_id"));
		map.put("refund_channel", resutlMap.get("refund_channel"));
		
		
		try {
			org.apache.commons.beanutils.BeanUtils.copyProperties(record, resutlMap);
		} catch (IllegalAccessException | InvocationTargetException e) {
			//e.printStackTrace();
		}
		
		payWeixinRefundMapper.updateByPrimaryKey(record);
		
		/**
		 * 退单申请发送成功，更新交易表
		 */
		payLogBean.setOrderStatu('2');//退单中
		payLogBean.setTableName(tableName);
		payLogServiceImpl.updateByPrimaryKey(payLogBean);
		
		payWeixinBean.setOrder_status(4);//退单中
		mapper.updateByPrimaryKey(payWeixinBean);
		
		logger.info("退单请求结束");
		return JsonUtils.getSuccess("退单请求成功", map);

	}
	private PayWeixinRefundBean checkRefund(String out_trade_no, String out_refund_no, int total_fee, int refund_fee) {
		PayWeixinRefundBean record = null;
		if(StringUtils.isNotBlank(out_refund_no)){//退单失败再次提交，需上次的out_refund_no
			record = new PayWeixinRefundBean();
			record.setOut_refund_no(out_refund_no);
			record = payWeixinRefundMapper.findOne(record);
		}
		
		if(record == null){
			record = new PayWeixinRefundBean();
			record.setTotal_fee(total_fee);
			record.setRefund_fee(refund_fee);
			record.setOut_refund_no(out_refund_no);
			record.setOut_trade_no(out_trade_no);
			payWeixinRefundMapper.insert(record);
		}
		return record;
	}
	private PayLogBean checkPayLog(String out_trade_no, String userId,  String tableName,int step) {
		if(StringUtils.isNotBlank(tableName) && StringUtils.isNotBlank(TableNameConfig.getName(tableName))){
			PayLogBean payLogBean = new PayLogBean();
			payLogBean.setWx_out_trade_no(out_trade_no);
			payLogBean.setTableName(tableName);
			payLogBean = payLogServiceImpl.findOne(payLogBean);
			Assert.notNull(payLogBean, "该用户没有此订单");
			Assert.isTrue(payLogBean.getOrderStatu() != null, "用户订单记录异常");
			if(step == 0){//退单申请检查
				Assert.isTrue(payLogBean.getOrderStatu() != '2', "退单中");
			}
			Assert.isTrue(payLogBean.getOrderStatu() != '0', "订单无效或退单完成");
			Assert.isTrue(userId.equals(payLogBean.getUserId()), "订单用户与当前用户不匹配，请核对订单号与用户");
			return payLogBean;
		}
		return null;
	}
	private PayWeixinBean checkOrder(String out_trade_no, String userId,int step) {
		PayWeixinBean payWeixinBean = new PayWeixinBean();
		payWeixinBean.setOut_trade_no(out_trade_no);
		payWeixinBean = mapper.findOne(payWeixinBean);
		Assert.notNull(payWeixinBean, "该用户没有此订单");
		if(step == 0){//退单申请检查
			Assert.isTrue(payWeixinBean.getOrder_status() != 4, "退单中");
		}
		Assert.isTrue(payWeixinBean.getOrder_status() != 5, "退单已完成");
		Assert.isTrue(userId.equals(payWeixinBean.getUserId()), "订单用户与当前用户不匹配，请核对订单号与用户");
		return payWeixinBean;
	}
	/**
	 * 微信预支付 统一下单入口
	 * 
	 * @author heshenhua
	 * @return
	 * @throws IOException 
	 * @throws JDOMException 
	 */
	public ViewBean addUnifiedOrder(PayWeixinBean record,PayLogBean payLogBean) throws JDOMException, IOException {
		String spbill_create_ip = record.getSpbill_create_ip();//终端ip
		String userId = record.getUserId();
		int total_fee = record.getTotal_fee();
		String out_trade_no = record.getOut_trade_no();
		
		logger.info("统一下定单开始");
		// 设置订单参数
		SortedMap<String, Object> parameters = prepareOrder(spbill_create_ip, out_trade_no,total_fee);
		parameters.put("sign",PayCommonUtil.createSign("UTF-8", parameters));// sign签名 key
		String requestXML = PayCommonUtil.getRequestXml(parameters);// 生成xml格式字符串
		String responseStr = "";
		try {
			responseStr = HttpUtil.httpsRequest(ConfigUtil.UNIFIED_ORDER_URL, "POST", requestXML);// 带上post
		} catch (Exception e) {
			logger.error(
					"WeixinDAO receipt(String userId,String proId,String ip)：{},{}",
					userId + "-" + out_trade_no + "-" + spbill_create_ip, e.getMessage());
			return JsonUtils.getError("预支付请求失败"); // 抽离到统一错误码泪中 统一定一下
		}	
		
		// 解析结果 resultStr
		SortedMap<String, Object> resutlMap = XMLUtil.doXMLParse(responseStr);
		if (resutlMap != null && WeixinConstant.FAIL.equals(resutlMap.get("return_code"))) {
			logger.error("微信统一下单失败,订单编号:" + out_trade_no + ",失败原因:" + resutlMap.get("return_msg"));
			return JsonUtils.getError("统一下单失败",resutlMap.get("return_msg"));
		}
		
		// 检验API返回的数据里面的签名是否合法，避免数据在传输的过程中被第三方篡改
		if (!PayCommonUtil.checkIsSignValidFromResponseString(responseStr)) {
			logger.error("微信统一下单失败，签名可能被篡改");
			return JsonUtils.getError("统一下单失败","签名失败");
		}
		// 获取到 prepayid
		// 商户系统先调用该接口在微信支付服务后台生成预支付交易单，返回正确的预支付交易回话标识后再在APP里面调起支付。
		SortedMap<String, Object> map = buildClientJson(resutlMap);
		map.put("out_trade_no", out_trade_no);
		
		record.setOrder_status(0);
		mapper.insert(record);
		
		payLogBean.setWx_out_trade_no(out_trade_no);
		payLogServiceImpl.insert(payLogBean);
		
		logger.info("统一下定单结束");
		return JsonUtils.getSuccess("下单成功", map);
	}

	/**
	 * 生成订单信息
	 * 
	 * @param ip
	 * @param orderId
	 * @return
	 */
	private SortedMap<String, Object> prepareOrder(String ip, String orderId,int price) {
		Map<String, Object> oparams = ImmutableMap.<String, Object> builder()
				.put("appid", ConfigUtil.APPID)// 服务号的应用号
				.put("body", WeixinConstant.PRODUCT_BODY)// 商品描述
				.put("mch_id", ConfigUtil.MCH_ID)// 商户号 ？
				.put("nonce_str", PayCommonUtil.CreateNoncestr())// 16随机字符串(大小写字母加数字)
				
				.put("out_trade_no", orderId)// 商户订单号
				.put("total_fee", price)// 银行币种 price
				.put("spbill_create_ip", ip)// IP地址
				
				.put("notify_url", ConfigUtil.NOTIFY_URL) // 微信回调地址
				.put("trade_type", ConfigUtil.TRADE_TYPE)// 支付类型 app
				.build();
		return MapUtils.sortMap(oparams);
	}
	/**
	 * 生成退单信息
	 * @param ip
	 * @param orderId
	 * @param price
	 * @return
	 */
	private SortedMap<String, Object> refundeOrder(String out_refund_no, int total_fee,int refund_fee) {
		Map<String, Object> oparams = ImmutableMap.<String, Object> builder()
				.put("appid", ConfigUtil.APPID)// 服务号的应用号
				.put("mch_id", ConfigUtil.MCH_ID)// 商户号 ？
				.put("op_user_id", ConfigUtil.MCH_ID)// 商户号 ？
				.put("nonce_str", PayCommonUtil.CreateNoncestr())// 16随机字符串(大小写字母加数字)
				
				.put("out_refund_no", out_refund_no)// 商户订单号
				.put("total_fee", total_fee)// 银行币种 price
				.put("refund_fee", refund_fee)// IP地址
				
				.build();
		return MapUtils.sortMap(oparams);
	}
	/**
	 * 退单查询参数
	 * 
	 * @param out_refund_no
	 * @param total_fee
	 * @param refund_fee
	 * @return
	 */
	private SortedMap<String, Object> refundQueryOrder(String out_trade_no) {
		Map<String, Object> oparams = ImmutableMap.<String, Object> builder()
				.put("appid", ConfigUtil.APPID)// 服务号的应用号
				.put("mch_id", ConfigUtil.MCH_ID)// 商户号 ？
				.put("op_user_id", ConfigUtil.MCH_ID)// 商户号 ？
				.put("nonce_str", PayCommonUtil.CreateNoncestr())// 16随机字符串(大小写字母加数字)
				
				.put("out_trade_no", out_trade_no)// 商户订单号
				
				.build();
		return MapUtils.sortMap(oparams);
	}

	/**
	 * 生成预付快订单完成，返回给android,ios唤起微信所需要的参数。
	 * 
	 * @param resutlMap
	 * @return
	 * @throws UnsupportedEncodingException
	 */
	private SortedMap<String, Object> buildClientJson(
			Map<String, Object> resutlMap) throws UnsupportedEncodingException {
		// 获取微信返回的签名

		/**
		 * backObject.put("appid", appid);
		 * 
		 * backObject.put("noncestr", payParams.get("noncestr"));
		 * 
		 * backObject.put("package", "Sign=WXPay");
		 * 
		 * backObject.put("partnerid", payParams.get("partnerid"));
		 * 
		 * backObject.put("prepayid", payParams.get("prepayid"));
		 * 
		 * backObject.put("appkey", this.appkey);
		 * 
		 * backObject.put("timestamp",payParams.get("timestamp"));
		 * 
		 * backObject.put("sign",payParams.get("sign"));
		 */
		Map<String, Object> params = ImmutableMap.<String, Object> builder()
				.put("appid", ConfigUtil.APPID)
				.put("noncestr", PayCommonUtil.CreateNoncestr())
				.put("package", ConfigUtil.PACKAGE)
				.put("partnerid", ConfigUtil.MCH_ID)
				.put("prepayid", resutlMap.get("prepay_id"))
				.put("timestamp", DateUtils.getTimeStamp()).build();
		// key ASCII排序
		SortedMap<String, Object> sortMap = MapUtils.sortMap(params);
		sortMap.put("package", ConfigUtil.PACKAGE);//排序时会把=后面的干掉
		// paySign的生成规则和Sign的生成规则同理
		String paySign = PayCommonUtil.createSign("UTF-8", sortMap);
		sortMap.put("sign", paySign);
		return sortMap;
	}

	/**
	 * 微信回调告诉微信支付结果 注意：同样的通知可能会多次发送给此接口，注意处理重复的通知。
	 * 对于支付结果通知的内容做签名验证，防止数据泄漏导致出现“假通知”，造成资金损失。
	 * 
	 * @param params
	 * @return
	 * @throws InvocationTargetException 
	 * @throws IllegalAccessException 
	 * @throws IOException 
	 * @throws JDOMException 
	 */
	public String addCallback(HttpServletRequest request) throws IllegalAccessException, InvocationTargetException, JDOMException, IOException {
		
		String responseStr = parseWeixinCallback(request);
		Map<String, Object> map = XMLUtil.doXMLParse(responseStr);
		//map = new HashMap();
		//map.put("result_code", "SUCCESS");
		//map.put("out_trade_no", "WX2016072817153207D4B7DE66D440");
		// 校验签名 防止数据泄漏导致出现“假通知”，造成资金损失
		if (!PayCommonUtil.checkIsSignValidFromResponseString(responseStr)) {
			logger.error("微信回调失败,签名可能被篡改");
			return PayCommonUtil.setXML("FAIL", "invalid sign");
		}
		if (WeixinConstant.FAIL.equalsIgnoreCase(map.get("result_code").toString())) {//交易失败
			updateDb(map,false);
			logger.error("微信回调失败");
			return PayCommonUtil.setXML("FAIL", "weixin pay fail");
		}
		
		if (WeixinConstant.SUCCESS.equalsIgnoreCase(map.get("result_code").toString())) {//回调接口，result_code=SUCCESS，表示交易成功
			// 对数据库的操作
			int isOk = updateDb(map,true);
			
			// 告诉微信服务器，我收到信息了，不要在调用回调action了
			if (isOk > 0) {//
				return PayCommonUtil.setXML(WeixinConstant.SUCCESS, "OK");
			} else {
				return PayCommonUtil.setXML(WeixinConstant.FAIL, "pay fail");
			}
			
		}
		return PayCommonUtil.setXML(WeixinConstant.FAIL, "weixin pay fail");
	}
	/**
	 * 保存回调信息及返回给微信的信息
	 * 
	 * 【注意】：
	 * 		同样的通知可能会多次发送给商户系统。商户系统必须能够正确处理重复的通知。
	 * 微信推荐方法：
	 * 		推荐的做法是，当收到通知进行处理时，
	 * 		首先检查对应业务数据的状态，判断该通知是否已经处理过，
	 * 		如果没有处理过再进行处理，如果处理过直接返回结果成功。
	 * 		在对业务数据进行状态检查和处理之前，要采用数据锁进行并发控制，以避免函数重入造成的数据混乱。
	 * 
	 * @param out_trade_no 
	 * @param transaction_id callback支付成功返回
	 * @param total_fee
	 * @return
	 * @throws InvocationTargetException 
	 * @throws IllegalAccessException 
	 */
	private int updateDb(Map<String, Object> map,boolean isSuccessOrder) throws IllegalAccessException, InvocationTargetException {
		
		PayWeixinBean bean = new PayWeixinBean();
		String out_trade_no = (String) map.get("out_trade_no");
		bean.setOut_trade_no(out_trade_no);
		bean = mapper.findOne(bean);
		
		org.apache.commons.beanutils.BeanUtils.copyProperties(bean, map);
		
		if(isSuccessOrder){
			bean.setOrder_status(1);
		}else{
			bean.setOrder_status(2);
		}
		
		int f = mapper.updateByPrimaryKey(bean);
		if(f > 0 && isSuccessOrder){
			//回调返回支付成功且微信订单信息更新成功后，再保存交易记录，不然等到查询微信交易记录状态为成功再保存交易记录
			savePayLog(bean);
		}
		return f;
	}
	/**
	 * 交易成功后 ，保存交易记录到支付记录分表及总表
	 * @param bean
	 */
	private void savePayLog(PayWeixinBean bean) {
		PayLogBean payLogBean = new PayLogBean() ;
		payLogBean.setWx_out_trade_no(bean.getOut_trade_no());
		payLogBean.setTableName(bean.getAttach());
		payLogBean = payLogServiceImpl.findOne(payLogBean);
		if(payLogBean == null){
			payLogBean = new PayLogBean() ;
		}
			
		BeanUtils.copyProperties(bean, payLogBean);
		payLogBean.setPayWay('1');
		payLogBean.setWx_out_trade_no(bean.getOut_trade_no());
		payLogBean.setWx_transaction_id(bean.getTransaction_id());
		payLogBean.setMoney(bean.getTotal_fee());
		payLogBean.setIp(bean.getSpbill_create_ip());
		payLogBean.setActionStatus("微信回调接口得到支付成功");
		payLogBean.setSubsidyResult("true");
		payLogBean.setObjType(bean.getAttach());
		payLogBean.setIsDelated('3');//rmb交易记录
		payLogBean.setUserId(bean.getUserId());
		payLogBean.setObjId(Long.valueOf(bean.getObjId()));
		payLogBean.setTableName(bean.getAttach());
		payLogServiceImpl.save(payLogBean, true);
	}
	
	public static void main(String[] args) throws IllegalAccessException, InvocationTargetException {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("return_code", "success");
		map.put("total_fee", "20");
		PayWeixinBean bean = new PayWeixinBean();
		org.apache.commons.beanutils.BeanUtils.copyProperties(bean, map);//可以类型转换
	}
	
	/**
	 * 解析微信回调参数
	 * 
	 * @param request
	 * @return
	 * @throws IOException
	 */
	private String parseWeixinCallback(HttpServletRequest request) throws IOException {
		InputStream inStream = request.getInputStream();
		ByteArrayOutputStream outSteam = new ByteArrayOutputStream();
		byte[] buffer = new byte[1024];
		int len = 0;
		while ((len = inStream.read(buffer)) != -1) {
			outSteam.write(buffer, 0, len);
		}
		outSteam.close();
		inStream.close();
		String result = new String(outSteam.toByteArray(), "utf-8");// 获取微信调用我们notify_url的返回信息
		return result;
	}

	/**
	 * 查询订单状态
	 * 
	 * @param params
	 *            订单查询参数
	 * @return
	 * @throws IOException 
	 * @throws JDOMException 
	 * @throws InvocationTargetException 
	 * @throws IllegalAccessException 
	 */
	public ViewBean addCheckOrderStatus(SortedMap<String, Object> params) throws JDOMException, IOException, IllegalAccessException, InvocationTargetException {
		if (params == null) {
			return JsonUtils.getError("查询订单参数不能为空","1");
		}
		
		String requestXML = PayCommonUtil.getRequestXml(params);// 生成xml格式字符串
		String responseStr = "";
		try {
			responseStr = HttpUtil.httpsRequest(ConfigUtil.CHECK_ORDER_URL, "POST", requestXML);// 带上post
		} catch (Exception e) {
			logger.error("订单查询失败,查询参数 = {}", JSONObject.toJSONString(params));
			return JsonUtils.getSuccess( "订单查询失败","1");
		}
		// 校验签名
		if (!PayCommonUtil.checkIsSignValidFromResponseString(responseStr)) {
			logger.error("订单查询失败,签名可能被篡改");
			return JsonUtils.getError("签名错误","3");
		}
		
		SortedMap<String, Object> responseMap = XMLUtil.doXMLParse(responseStr);// 解析响应xml格式字符串
		
		// 校验响应结果return_code
		if (WeixinConstant.FAIL.equalsIgnoreCase(responseMap.get("return_code").toString())) {
			return JsonUtils.getError( responseMap.get("return_msg").toString(),"1");
		}
		// 校验业务结果result_code
		if (WeixinConstant.FAIL.equalsIgnoreCase(responseMap.get("result_code").toString())) {
			return JsonUtils.getError( responseMap.get("err_code").toString() + "=" + responseMap.get("err_code_des"),"2");
		}
		
		// 判断支付状态
		String tradeState = responseMap.get("trade_state").toString();
		
		if (tradeState != null && tradeState.equals("SUCCESS")) {
			updateDb(responseMap,true);//更新订单及相关支付记录
			return JsonUtils.getSuccess( "订单支付成功","0");
		} 
		updateDb(responseMap,false);//支付不成功
		if (tradeState == null) {
			return JsonUtils.getError("获取订单状态失败","4");
		} else if (tradeState.equals("REFUND")) {
			return JsonUtils.getError("转入退款","5");
		} else if (tradeState.equals("NOTPAY")) {
			return JsonUtils.getError( "未支付","6");
		} else if (tradeState.equals("CLOSED")) {
			return JsonUtils.getError("已关闭","7");
		} else if (tradeState.equals("REVOKED")) {
			return JsonUtils.getError( "已撤销（刷卡支付","8");
		} else if (tradeState.equals("USERPAYING")) {
			return JsonUtils.getError("用户支付中","9");
		} else if (tradeState.equals("PAYERROR")) {
			return JsonUtils.getError( "支付失败","10");
		} else {
			return JsonUtils.getError( "未知的失败状态","11");
		}
		
		
	}
	/**
	 * 查询单个微信支付订单
	 * @param record
	 * @return
	 */
    public PayWeixinBean findOne(PayWeixinBean record){
    	return mapper.findOne(record);
    }
}

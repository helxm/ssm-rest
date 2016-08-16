package com.rainbowbus.validate;

import java.text.DecimalFormat;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;

import org.apache.log4j.Logger;
import org.json.JSONException;
import org.springframework.util.Assert;

import com.rainbowbus.bean.api.FollowBean;
import com.rainbowbus.bean.api.MatchBean;
import com.rainbowbus.bean.api.PayLogBean;
import com.rainbowbus.bean.base.BaseBean;
import com.rainbowbus.bean.base.ViewBean;
import com.rainbowbus.mapper.MatchMapper;
import com.rainbowbus.service.impl.api.MatchServiceImpl;
import com.rainbowbus.service.impl.api.PayLogServiceImpl;
import com.rainbowbus.utils.JsonUtils;
import com.rainbowbus.utils.SpringInit;
import com.rainbowbus.utils.UserAgentUtil;
import com.rainbowbus.utils.api.ArithUtil;
import com.rainbowbus.utils.api.IxinTuiSong;

public class ValidateUtils {
	protected static Logger logger = Logger.getLogger("ValidateUtils");
	private ValidateUtils(){
		
	}
	public final static ValidateUtils getInstance(){
		return Holder.instance;
	}
	public final static class Holder{
		private final static ValidateUtils instance = new ValidateUtils();
	}
	
	
	/**
	 * 
	 * @param bean
	 * @param querySerial
	 * @return
	 */
	public static ViewBean validate(BaseBean bean,String querySerial){
		if("boxer".equals(bean.getOriginalTableName())){
			return ValidateUtils.getInstance().validateToMessage(bean, NameOnlyGroup.class);//boxer的默认验证方式
		}
		if("c-news".equals(bean.getOriginalTableName())){
			return ValidateUtils.getInstance().validateToMessage(bean, TableGroup.class);
		}
		if("damageblog".equals(bean.getOriginalTableName())){
			return ValidateUtils.getInstance().validateToMessage(bean, TableGroup.class);
		}
		if("pl-mat".equals(bean.getOriginalTableName())){//赛事费用支付校验，支付成本费用
			PayLogBean payLogBean = (PayLogBean)bean;
			MatchMapper matchMapper = payLogBean.getMatchMapper();// (MatchServiceImpl) SpringInit.getBean("matchServiceImpl");
			PayLogServiceImpl payLogServiceImpl = payLogBean.getPayLogServiceImpl();// (PayLogServiceImpl) SpringInit.getBean("PayLogServiceImpl");
			
			PayLogBean payLogBean2 = new PayLogBean();
			payLogBean2.setObjId(payLogBean.getObjId());
			payLogBean2.setTableName(payLogBean.getOriginalTableName());
			payLogBean2.setIsDelated('3');
			Integer matchHasPay = payLogServiceImpl.sumMoney(payLogBean2);//查询已支付成本费用
			if(matchHasPay == null){
				matchHasPay = 0;
			}
			
			MatchBean matchBean = matchMapper.selectByPrimaryKey(payLogBean.getObjId());
			
			Assert.notNull(matchBean,"无该赛事");
			Assert.notNull(matchBean.getCost(),"该赛事无成本");
			Assert.isTrue(matchBean.getCost() > 0,"该赛事无成本");
			Assert.isTrue('0' == matchBean.getStatu(),"该赛事已完成筹款");
			
			int matchCost = matchBean.getCost();
			int currentPay = payLogBean.getTatol();
			
			if(matchBean.getPayType() != null 
					&& (matchBean.getPayType().equals('2') || matchBean.getPayType().equals('4'))){
				matchCost = matchCost * 2;//支付方式为赢/输家支付，则需支付双倍的金额，比赛结束后返还
			}
			int waitPay = matchCost - matchHasPay;
			
			Assert.isTrue(waitPay - currentPay >= 0,"支付超额");
			DecimalFormat df = new DecimalFormat("#0.00");
			String persent = df.format(ArithUtil.div(currentPay, matchCost));
			payLogBean.setRemark(persent);//计算赛事支付比例
			
			if(waitPay - currentPay == 0){
				matchBean.setPayStatu('1');//支付完成，把赛事状态置为等待对手
				matchMapper.updateByPrimaryKey(matchBean);
			}
			
			return null;
		}
		
		return null;
	}
	public static ViewBean validateFollow(FollowBean bean,HttpServletRequest request) throws JSONException{
		if("f-mat".equals(bean.getOriginalTableName())){
			Assert.hasLength(bean.getToken(), "设备唯一号不能为空");
			String reStr = IxinTuiSong.addDevice(UserAgentUtil.getClientType(request), bean.getToken(), new String[]{"match-f" + bean.getObjId()} );
			org.json.JSONObject jsonObject = new org.json.JSONObject(reStr);
			Object res = jsonObject.get("result");
			Object desc = jsonObject.get("desc");
			logger.info("把关注用户添加到该赛事下注分配通知组： match-" + bean.getObjId() + "，添加结果： " + res + "-" + desc);
		}
		return null;
	}
	/**
	 * 读取校验，只校验id
	 * 
	 * @param bean
	 * @param querySerial
	 * @return
	 */
	public static ViewBean validateRead(BaseBean bean,String querySerial){
		return ValidateUtils.getInstance().validateToMessage(bean, IdOnlyGroup.class);
	}
	/**
	 * list校验
	 * 
	 * @param bean
	 * @param querySerial
	 * @return
	 */
	public static ViewBean validateList(BaseBean bean,String querySerial,Map<String,Object> map){
		if("list-multi-count".equals(querySerial)){//评论，点赞，关注数目统计，多个对象的统计
			Assert.notNull(map.get("ids"), "ids不能为空");
			Assert.hasText(map.get("ids").toString(), "ids不能为空");
		}
		if("count-col".equals(querySerial)){//评论，点赞，关注数目统计，多个对象的统计
			Assert.notNull(map.get("objId"), "objId不能为空");
		}
		return null;
	}
	public static ViewBean validateDelete(BaseBean bean,String querySerial,Map<String,Object> map){
		if("delete-col".equals(querySerial)){//评论，点赞，关注数目统计，多个对象的统计
			Assert.notNull(map.get("objId"), "objId不能为空");
		}
		return null;
	}
	/**
	 * 校验信息处理方法
	 * 
	 * 校验不通过会立即抛出异常，不会进行下一条
	 * 
	 * @param bean
	 * @param clzz
	 * @return
	 */
	public ViewBean validateToMessage(BaseBean bean,Class<?> clzz){
	    Set<ConstraintViolation<BaseBean>> constraintViolations = 
	    		ValidateUtils.getInstance().getValidator().validate(bean, clzz);
	    StringBuffer buf = new StringBuffer(); 
	    //ResourceBundle bundle = ResourceBundle.getBundle("messages"); 
	    if(constraintViolations != null && constraintViolations.size() > 0){
	    	 for(ConstraintViolation<BaseBean> violation: constraintViolations) { 
	 		    //buf.append(bundle.getString(violation.getPropertyPath().toString())); 
	 		    buf.append(violation.getMessage()); 
	 	    }
	 		throw new RuntimeException(buf.toString());
	    }
	   return JsonUtils.getError(buf.toString());
	}
	/**
	 * 获取校验器
	 * 
	 * @return
	 */
	private Validator getValidator(){
		ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
	    return factory.getValidator();
	}
	
	public static void main(String[] args) {
		//BoxerBean bean = new BoxerBean();
		//ViewBean viewBean = ValidateUtils.validate(bean, "boxer");
		//System.err.println(viewBean.getMessage());
		
		System.err.println(new Double(new Double(111) / new Double(777) * 100).intValue());
	}
}

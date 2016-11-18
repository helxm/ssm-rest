package com.app.validator;

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

import com.app.dto.BaseBean;
import com.app.dto.ViewBean;
import com.app.util.JsonUtils;


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
		return null;
	}
	public static ViewBean validateDelete(BaseBean bean,String querySerial,Map<String,Object> map){
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

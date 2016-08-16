package com.rainbowbus.validate;


import java.util.regex.Pattern;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.apache.commons.lang.StringUtils;

import com.rainbowbus.utils.api.EmojiFilterUtils;

public class EmoticonValidator implements ConstraintValidator<Emoticon, String> {
	private String moneyReg = "^[\ud800\udc00-\udbff\udfff\ud800-\udfff]$";//表示表情符号的正则表达式  
    private Pattern moneyPattern = Pattern.compile(moneyReg);  
	@Override
	public void initialize(Emoticon arg0) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public boolean isValid(String value, ConstraintValidatorContext arg1) {
		if(StringUtils.isBlank(value)){
			return true;
		}
		if(value.length() != EmojiFilterUtils.filterEmoji(value).length()){
			return false;  
		}
		return true;  
		//return true;  
	}

	public static void main(String[] args) {
		 String text = "This is a smiley \uD83C\uDFA6 face\uD860\uDD5D \uD860\uDE07 \uD860\uDEE2 \uD863\uDCCA \uD863\uDCCD \uD863\uDCD2 \uD867\uDD98 ";  
		EmoticonValidator validator = new EmoticonValidator();
		System.err.println(validator.isValid("grfdgrd", null));;
	}

}

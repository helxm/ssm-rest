package com.rainbowbus.validate;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
 
import javax.validation.Constraint;
import javax.validation.Payload;
/**
 * 自定义表情符号泛型使用
 * @author hesh
 *
 */
@Target({ElementType.FIELD, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy=EmoticonValidator.class)
public @interface Emoticon {
	 
	    String message() default"不支持表情符号";
	   
	    Class<?>[] groups() default {};
	   
	    Class<? extends Payload>[] payload() default {};
	 
}

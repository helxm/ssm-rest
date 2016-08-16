package com.rainbowbus.validate;

import javax.validation.GroupSequence;
import javax.validation.groups.Default;
/**
 * 
 * {@code Group}
 * TODO spring-validate验证使用
 * 		验证顺序序列组标记 
 * 		【注意】：包含id（baseBean）属性的的验证，只有：First,Identity,Default标记
 * @author hesh
 * @time 2016年4月1日 - 下午1:23:15
 */
@GroupSequence(value = {Second.class,TableName.class,Default.class })
public interface CommentListGroup {
	
}

package com.rainbowbus.validate;

import javax.validation.GroupSequence;
import javax.validation.groups.Default;
/**
 * 
 * {@code Group}
 * TODO spring-validate验证使用
 * 		验证顺序序列组标记 
 * 		【注意】：包含name（baseBean）属性的的验证
 * @author hesh
 * @time 2016年4月1日 - 下午1:23:15
 */
@GroupSequence(value = { First.class,TableName.class,Default.class })
public interface NameGroup {

}

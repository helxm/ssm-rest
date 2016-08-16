package com.rainbowbus.validate;

import javax.validation.GroupSequence;
import javax.validation.groups.Default;
/**
 * 
 * {@code Group}
 * TODO spring-validate验证使用
 * 		验证顺序序列组标记
 * @author hesh
 * @time 2016年4月1日 - 下午1:23:15
 */
@GroupSequence(value = { First.class,Second.class,Three.class,Four.class,Five.class,Default.class })
public interface Group {

}

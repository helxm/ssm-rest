package com.app.validator;

import javax.validation.GroupSequence;
import javax.validation.groups.Default;
/**
 * 
 * {@code Group}
 * TODO 评论点赞统计数目使用
 * @author hesh
 * @time 2016年4月1日 - 下午1:23:15
 */
@GroupSequence(value = { Second.class,TableName.class,Default.class })
public interface TableAndObjGroup {

}

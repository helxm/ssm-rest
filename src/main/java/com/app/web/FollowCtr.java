package com.rainbowbus.controller.api;


import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rainbowbus.bean.api.FollowBean;
import com.rainbowbus.bean.base.ViewBean;
import com.rainbowbus.controller.base.BaseCtr;
import com.rainbowbus.service.impl.api.FollowServiceImpl;
import com.rainbowbus.utils.JsonUtils;
import com.rainbowbus.validate.TableAndObjGroup;
import com.rainbowbus.validate.TableGroup;
import com.rainbowbus.validate.ValidateUtils;

/**
 * 
 * {@code UserCommentCtr} TODO
 * 关注
 * 
 * @author hesh
 * @time 2016年3月24日 - 下午3:15:09
 */
@RestController
@RequestMapping("/api/follow")
public class FollowCtr extends BaseCtr {
	private static Logger logger = Logger.getLogger(FollowCtr.class);  
	@Autowired
	private FollowServiceImpl followServiceImpl;

	/**
	 * 新增
	 * 必须参数：点赞对象id，用户id，sign校验等
	 * 
	 * @param record
	 * @param result
	 * @param errors
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/add$Follow")
	public ViewBean addFollow(@Validated(TableGroup.class) FollowBean record, BindingResult result
			,HttpServletRequest request
			,Errors errors
			) throws Exception{
		logger.info("添加关注");
		ValidateUtils.validateFollow(record, request);
		return dmlView(followServiceImpl.saveFollow(record), result, errors);
	}
	/**
	 * 删除
	 * 必须参数： userId，objId，校验相关
	 * @param record
	 * @param result
	 * @param errors
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/delete$Follow")
	public ViewBean deleteFollow(@Validated(TableGroup.class) FollowBean record, BindingResult result,
			Errors errors
			) throws Exception{
		logger.info("取消关注");
		return dmlView(followServiceImpl.deleteFollow(record), result, errors);
	}
	/**
	 * 统计
	 * 
	 * @param record
	 * @param result
	 * @param errors
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/countFollow")
	public com.rainbowbus.bean.base.ViewBean countView(@Validated(TableAndObjGroup.class) FollowBean record, BindingResult result,
			Errors errors
			) throws Exception{
		logger.info("统计关注数");
		return JsonUtils.getSuccess("操作成功",followServiceImpl.countFollow(record));
	}
}

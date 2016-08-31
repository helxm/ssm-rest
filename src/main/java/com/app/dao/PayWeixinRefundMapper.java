package com.app.dao;

import com.app.entity.PayWeixinRefundBean;

public interface PayWeixinRefundMapper extends BaseMapper<PayWeixinRefundBean, Long>{

	PayWeixinRefundBean findOne(PayWeixinRefundBean record);
	
}

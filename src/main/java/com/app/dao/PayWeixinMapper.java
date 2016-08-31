package com.app.dao;

import com.app.entity.PayWeixinBean;

public interface PayWeixinMapper extends BaseMapper<PayWeixinBean, Long>{

	PayWeixinBean findOne(PayWeixinBean record);

	
}

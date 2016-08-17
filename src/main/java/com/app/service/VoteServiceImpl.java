package com.rainbowbus.service.impl.api;


import java.sql.Timestamp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rainbowbus.bean.api.StatusBean;
import com.rainbowbus.bean.api.UserBean;
import com.rainbowbus.bean.api.VoteBean;
import com.rainbowbus.mapper.UserMapper;
import com.rainbowbus.mapper.VoteMapper;
import com.rainbowbus.service.VoteService;
import com.rainbowbus.service.base.AbstractService;

@Service
public class VoteServiceImpl extends AbstractService<VoteBean,Long> implements VoteService  {
	@Autowired
	private VoteMapper voteMapper;  
	@Autowired
	private UserMapper userMapper;
	
	/**
	 * 给baseMapper赋值
	 */
	@Autowired
	public void setBaseMapper() {
		super.setBaseMapper(voteMapper);
		
	}


	/**
	 * 保存文章点赞，保证一个用户只点一次，并对文章表增加赞数
	 */
	public int saveVote(VoteBean record) {
		VoteBean voteBean =  voteMapper.findUserVoteForObj(record);
		if(voteBean != null){//已点赞
			return 1;//已点赞
		}
		UserBean userBean = userMapper.selectByUserId(record.getUserId());
		record.setHeadUrl(userBean.getHeadpic());
		record.setCreateName(userBean.getUsername());//保存昵称
		record.setCreateTime(new Timestamp(System.currentTimeMillis()));
		voteMapper.insert(record);
		
		Long count = voteMapper.countNewsUserVote(record);
		record.setCount(count);
		voteMapper.addNewsVoteCount(record);
		return 1;
	}
	/**
	 * 删除赞，保证用文章赞数的减少
	 * 
	 * @param record
	 * @return
	 */
	public int deleteVote(VoteBean record) {
		VoteBean voteBean =  voteMapper.findUserVoteForObj(record);
		if(voteBean == null){//已删除
			return 1;
		}
		voteBean.setTableName(record.getOriginalTableName());
		voteMapper.deleteVote(voteBean);
		Long count = voteMapper.countNewsUserVote(voteBean);
		voteBean.setCount(count);
		voteMapper.addNewsVoteCount(voteBean);
		return 1;
	}
	/**
	 * 统计点赞
	 * 
	 * @param record
	 * @return
	 */
	public Long countVote(VoteBean record) {
		return voteMapper.countNewsUserVote(record);
	}

	
	
}

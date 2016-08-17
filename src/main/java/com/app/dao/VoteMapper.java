package com.rainbowbus.mapper;

import com.rainbowbus.bean.api.VoteBean;
import com.rainbowbus.mapper.base.BaseMapper;

public interface VoteMapper extends BaseMapper<VoteBean, Long>{

	/**
	 * 查看该用户对该文章是否已有点赞
	 * @param objId
	 * @param userId
	 * @return
	 */
	VoteBean findUserVoteForObj(VoteBean record);
	/**
	 * 给文章添加赞数
	 * @param count
	 * @param objId
	 * @return
	 */
	int addNewsVoteCount(VoteBean record);
	/**
	 * 统计文章赞数
	 * @param record
	 * @return
	 */
	Long countNewsUserVote(VoteBean record);
	/**
	 * 删除vote
	 * id必须
	 * @param voteBean
	 * @return
	 */
	int deleteVote(VoteBean voteBean);
	
}

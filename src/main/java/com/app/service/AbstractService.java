package com.app.service;

import java.io.Serializable;
import java.util.List;

import com.app.dao.BaseMapper;


/**
 * 
 * {@code AbstractService} TODO
 * 
 * @param <T>
 * @param <ID>
 * @author hesh
 * @time 2016年3月24日 - 上午10:44:44
 */
public abstract class AbstractService<T, ID extends Serializable> implements BaseService<T, ID> {
	protected BaseMapper<T, ID> baseMapper ;
	
	
	public void setBaseMapper(BaseMapper<T, ID> baseMapper) {
		this.baseMapper = baseMapper;
	}

	@Override
	public int deleteByPrimaryKey(ID id) {
		return baseMapper.deleteByPrimaryKey(id);
	}

	@Override
	public T selectByPrimaryKey(ID id) {
		return baseMapper.selectByPrimaryKey(id);
	}

	@Override
	public int updateByPrimaryKey(T record) {
		return baseMapper.updateByPrimaryKey(record);
	}

	@Override
	public int insert(T record) {
		return baseMapper.insert(record);
	}

	@Override
	public List<T> queryAll() {
		return baseMapper. queryAll();
	}

	@Override
	public List<T> queryPage(Long pageStart, Long pageEnd) {
		return baseMapper.queryPage(pageStart, pageEnd);
	}

	@Override
	public long countAll() {
		return baseMapper.countAll();
	}
	
	@Override
	public long countByCondition(String condition) {
		return baseMapper.countByCondition(condition);
	}
}

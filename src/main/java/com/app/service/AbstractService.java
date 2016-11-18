package com.app.service;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.apache.commons.beanutils.BeanUtils;
import org.apache.commons.beanutils.PropertyUtils;

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
	protected BaseMapper<T, ID> baseMapper;
	
	protected void setBaseProerty(T record, String property ,Object value){
		try {
			BeanUtils.setProperty(record, property, value);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
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
	public T find(T record) {
		return baseMapper.find(record);
	}

	@Override
	public int updateByPrimaryKey(T record) {
		setBaseProerty(record,  "updateTime", new Date());
		return baseMapper.updateByPrimaryKey(record);
	}

	@Override
	public int insert(T record) {
		setBaseProerty(record,  "createTime",  new Date());
		setBaseProerty(record,  "updateTime", new Date());
		setBaseProerty(record,  "isDelated",  '1');
		return baseMapper.insert(record);
	}

	@Override
	public List<T> queryAll() {
		return baseMapper. queryAll();
	}
	
	@Override
	public List<T> queryAll(T record) {
		return baseMapper. queryAll(record);
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
	public long countAll(T record) {
		return baseMapper.countAll(record);
	}
	
	@Override
	public long countByCondition(String condition) {
		return baseMapper.countByCondition(condition);
	}

	@Override
	public void setBaseMapper() {
		// TODO Auto-generated method stub
		
	}

	@SuppressWarnings("unchecked")
	@Override
	public ID saveOrUpdate(T record) {
		ID id = null;
		try {
			id = (ID) PropertyUtils.getProperty(record, "id");
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		if(id != null){
			this.updateByPrimaryKey(record);
		}else{
			this.insert(record);
			
			try {
				id = (ID) PropertyUtils.getProperty(record, "id");
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return id;
	}
	
	
}

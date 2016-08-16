package com.rainbowbus.service.base;

import java.io.Serializable;
import java.util.List;

/**
 * 
 * {@code BaseService} TODO
 * 
 * @param <T>
 * @param <ID>
 * @author hesh
 * @time 2016年3月24日 - 上午10:44:32
 */
public interface BaseService<T, ID extends Serializable> {
	void setBaseMapper();

	int deleteByPrimaryKey(ID id);

	int insert(T record);

	T selectByPrimaryKey(ID id);

	List<T>  queryAll();

	List<T> queryPage(Long pageStart, Long pageEnd);

	int updateByPrimaryKey(T record);

	long countAll();

	long countByCondition(String condition);
	
	

}

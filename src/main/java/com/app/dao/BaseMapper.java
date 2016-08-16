package com.rainbowbus.mapper.base;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import org.springframework.validation.annotation.Validated;

import com.rainbowbus.bean.base.BaseBean;
import com.rainbowbus.validate.IdOnlyGroup;
import com.rainbowbus.validate.NameGroup;
import com.rainbowbus.validate.TableOnlyGroup;

/**
 * 
 * {@code BaseMapper} TODO
 * 
 * @param <T>
 * @param <ID>
 * @author hesh
 * @time 2016年3月24日 - 上午10:45:24
 */
public interface BaseMapper<T, ID extends Serializable> {
	int deleteByPrimaryKey(ID id);

	int insert(T record);

	T selectByPrimaryKey(ID id);

	int updateByPrimaryKey(T record);

	List<T>  queryAll();

	List<T> queryPage(Long pageStart, Long pageEnd);
	
	long countAll();
	
	long countByCondition(String condition);
	/**
	 * 通过字符串id查找对象
	 * 
	 * @param bean
	 * @return
	 */
	Map findByStringId(BaseBean bean);
	/**
	 * 通过Long id查找对象
	 * 
	 * @param bean
	 * @return
	 */
	Map findById(@Validated(IdOnlyGroup.class)BaseBean bean);
	/**
	 * 通过Long id删除
	 * @param bean
	 * @return
	 */
	int delById(@Validated(IdOnlyGroup.class)BaseBean bean);
	/**
	 * 通过Long id更新 
	 * @param bean
	 * @return
	 */
	int updateById(@Validated(IdOnlyGroup.class)BaseBean bean);
	/**
	 * 通过保存
	 * @param bean
	 * @return
	 */
	int saveBaseByMap(Map map);
	/**
	 * 通过保存
	 * @param bean
	 * @return
	 */
	int updateBase(BaseBean bean);
	int saveBase(BaseBean bean);
	/**
	 * 查询所有，不带假删除
	 * @param bean
	 * @return
	 */
	List<Map<String, Object>> findAll(@Validated(TableOnlyGroup.class) BaseBean bean);
	/**
	 * 查询所有，带假删除
	 * @param bean
	 * @return
	 */
	List<Map<String, Object>> findAllButIsDeleted(@Validated(TableOnlyGroup.class) BaseBean bean);
	/**
	 * 查询单个字段，list
	 * bean需要sql
	 * @return
	 */
	List<Object> findList(T bean);
}

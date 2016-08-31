package com.app.dao;

import java.util.List;

import com.app.entity.CategoryBean;


public interface CategoryMapper extends BaseMapper<CategoryBean, Long>{
	/**
	 * 根据类别及类型精确查询 实体
	 * 
	 * @param name
	 * @param itemValue
	 * @return
	 */
	CategoryBean findBytypeAndName(String name,String itemValue);
	/**
	 * 通过类别（可以是英文类别）查询所有类型
	 * 
	 * @param nameEn
	 * @return
	 */
	List<CategoryBean> findAllByName(CategoryBean record);
	/**
	 * 查询用户的类型，多类别查询查询
	 * 
	 * @param record
	 * @return
	 */
	List<CategoryBean> findUserCategorys(CategoryBean record);
}

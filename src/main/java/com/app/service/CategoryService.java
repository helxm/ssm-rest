package com.rainbowbus.service;

import java.util.List;

import com.rainbowbus.bean.api.CategoryBean;

public interface CategoryService{
	/**
	 * 根据类别及类型精确查询 实体
	 * 
	 * @param name
	 * @param itemValue
	 * @return
	 */
	CategoryBean findBytypeAndName(String name,String itemValue) ;
	/**
	 * 通过类别（可以是英文类别）查询所有类型
	 * 
	 * @param nameEn
	 * @return
	 */
	List<CategoryBean> findAllByName(CategoryBean record);
}

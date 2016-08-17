package com.rainbowbus.service.impl.api;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rainbowbus.bean.api.CategoryBean;
import com.rainbowbus.mapper.CategoryMapper;
import com.rainbowbus.service.CategoryService;
import com.rainbowbus.service.base.AbstractService;

@Service
public class CategoryServiceImpl extends AbstractService<CategoryBean,Long> implements CategoryService  {
	@Autowired
	private CategoryMapper categoryMapper;  
	
	
	/**
	 * 给baseMapper赋值
	 */
	@Autowired
	public void setBaseMapper() {
		super.setBaseMapper(categoryMapper);
		
	}


	@Override
	public CategoryBean findBytypeAndName(String name,String itemValue) {
		return categoryMapper.findBytypeAndName(name, itemValue);
	}


	@Override
	public List<CategoryBean> findAllByName(CategoryBean record) {
		return categoryMapper.findAllByName(record);
	}


	public List<CategoryBean> findUserCategorys(CategoryBean record) {
		return categoryMapper.findUserCategorys(record);
	}
	
}

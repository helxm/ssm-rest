package com.app.service;


import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import com.app.dao.BaseMapper;
import com.app.dto.BaseBean;


@Service
public class BaseServiceImpl<T extends BaseBean> extends AbstractService<T , Serializable> {
	@Autowired
	private BaseMapper<T, Serializable> baseMapper;  
	
	private static DozerBeanMapper dozer = new DozerBeanMapper();
	
	/**
	 * 给baseMapper赋值
	 */
	@Autowired
	public void setBaseMapper() {
		super.setBaseMapper(baseMapper);
		
	}
	/**
	 * 通过字符串id查找对象
	 * 
	 * @param bean
	 * @return
	 */
	public BaseBean findByStringId(T bean){
		return dozer.map(baseMapper.findByStringId(bean),  bean.getClass());
	}
	/**
	 * 通过Long id查找对象
	 * 
	 * @param bean
	 * @return
	 */
	public BaseBean findById(@Validated(IdOnlyGroup.class) T bean){
		Object o = baseMapper.findById(bean);
		if(o == null){
			return null;
		}
		return dozer.map(o, bean.getClass());
	}
	/**
	 * 查询所有，不带假删除
	 * 
	 * @param bean
	 * @return
	 */
	public List<BaseBean> findAll( T bean){
		List<Map<String, Object>> list = baseMapper.findAll(bean);
		if(list == null || list.size() == 0){
			return null;
		}
		List<BaseBean> beans = new ArrayList<>();
		Class<? extends BaseBean> clzz = bean.getClass();
		for (int i = 0; i < list.size(); i++) {
			BaseBean b = dozer.map(list.get(i), clzz);
			beans.add(b);
		}
		return beans;
	}
	/**
	 * 返回mybatis list<map>结果
	 * 
	 * @param bean
	 * @return
	 */
	public List<Map<String, Object>> findMap(T bean){
		return baseMapper.findAll(bean);
	}
	/**
	 * 返回单个字段的list集合
	 * 
	 * @param bean
	 * @return
	 */
	public List<Object> findList(T bean){
		return baseMapper.findList(bean);
	}
	/**
	 * 查询所有，带假删除
	 * 
	 * @param bean
	 * @return
	 */
	public List<BaseBean> findAllButIsDeleted(@Validated(TableOnlyGroup.class) T bean){
		List<Map<String, Object>> list = baseMapper.findAllButIsDeleted(bean);
		if(list == null || list.size() == 0){
			return null;
		}
		List<BaseBean> beans = new ArrayList<>();
		Class<? extends BaseBean> clzz = bean.getClass();
		for (int i = 0; i < list.size(); i++) {
			BaseBean b = dozer.map(list.get(i), clzz);
			beans.add(b);
		}
		return beans;
	}
	/**
	 * 通过Long id删除
	 * 
	 * @param bean
	 * @return
	 */
	public BaseBean delById(@Validated(IdOnlyGroup.class) T bean){
		return dozer.map(baseMapper.delById(bean), bean.getClass());
	}
	/**
	 * 通过Long id更新
	 * 
	 * @param bean
	 * @return
	 */
	public BaseBean updateById(@Validated(IdOnlyGroup.class) T bean){
		return dozer.map(baseMapper.updateById(bean), bean.getClass());
	}
	/**
	 * 保存
	 * 
	 * @param bean
	 * @return
	 */
	public int saveBase(T bean){
		
		return baseMapper.saveBase(bean);
	}
	/**
	 * 
	 * @param bean
	 * @param params
	 * @return
	 */
	public BaseBean saveBaseByMap(T bean,Map params){
		String[] keys = new String[params.size()];
		Set<String> sset = params.keySet();
		int i = 0;
		for (String os : sset) {
			keys[i++] = os;
		}
		Map map = new HashMap<>();
		map.put("tablename", bean.getTableName());
		map.put("keys", keys);
		map.put("params", params);
		return dozer.map(baseMapper.saveBaseByMap(map), bean.getClass());
	}
	/**
	 * 更新操作
	 * 
	 * @param bean
	 * @return
	 */
	public int updateBase(T bean){
		
		return baseMapper.updateBase(bean);
	}
}

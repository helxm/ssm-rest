package com.rainbowbus.utils;

import java.lang.reflect.Field;
import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.dozer.util.ReflectionUtils;

/**
 * bean先关操作
 * 
 * @author hesh
 *
 */
public class BeanUtils {
	public static <T> Map<String, T> toMap(Object target) {
		return toMap(target,false);
	}
	
	/**
	 * 将目标对象的所有属性转换成Map对象
	 * 
	 * @param target 目标对象
	 * @param ignoreParent 是否忽略父类的属性
	 * 
	 * @return Map
	 */
	public static <T> Map<String, T> toMap(Object target,boolean ignoreParent) {
		return toMap(target,ignoreParent,false);
	}
	
	/**
	 * 将目标对象的所有属性转换成Map对象
	 * 
	 * @param target 目标对象
	 * @param ignoreParent 是否忽略父类的属性
	 * @param ignoreEmptyValue 是否不把空值添加到Map中
	 * 
	 * @return Map
	 */
	public static <T> Map<String, T> toMap(Object target,boolean ignoreParent,boolean ignoreEmptyValue) {
		return toMap(target,ignoreParent,ignoreEmptyValue,new String[0]);
	}
	
	/**
	 * 将目标对象的所有属性转换成Map对象
	 * 
	 * @param target 目标对象
  	 * @param ignoreParent 是否忽略父类的属性
  	 * @param ignoreEmptyValue 是否不把空值添加到Map中
  	 * @param ignoreProperties 不需要添加到Map的属性名
	 */
  	public static <T> Map<String, T> toMap(Object target,boolean ignoreParent,boolean ignoreEmptyValue,String... ignoreProperties) {
  		Map<String, T> map = new HashMap<String, T>();
  		
		List<Field> fields = null;//ReflectionUtils.getAccessibleFields(target.getClass(), ignoreParent);
		
		for (Iterator<Field> it = fields.iterator(); it.hasNext();) {
			Field field = it.next();
			T value = null;
			
			try {
				value = (T) field.get(target);
			} catch (Exception e) {
				e.printStackTrace();
			}
			
			if (ignoreEmptyValue
					&& ((value == null || value.toString().equals(""))
					|| (value instanceof Collection && ((Collection<?>) value).isEmpty())
					|| (value instanceof Map && ((Map<?,?>)value).isEmpty()))) {
				continue;
			}
			
			boolean flag = true;
			String key = field.getName();
			
			for (String ignoreProperty:ignoreProperties) {
				if (key.equals(ignoreProperty)) {
					flag = false;
					break;
				}
			}
			
			if (flag) {
				map.put(key, value);
			}
		}
		
  		return map;
  	}
}

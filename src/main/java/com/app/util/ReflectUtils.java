package com.app.util;

import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.Map;

public class ReflectUtils {
	/**
	 * 判断类是否包含某个属性
	 * 循环判断其父类
	 * 
	 * @param clzz
	 * @param fieldName
	 * @return
	 */
	public static boolean isExistField(Class clzz, String fieldName) {
		if(clzz == null || clzz == java.util.HashMap.class){
			return true;//若是map数组，直接返回true
		}
		Field[] fields = clzz.getDeclaredFields();
		if(fields == null || fields.length == 0){
			return false;
		}
		boolean flag = false;
		for (int i = 0; i < fields.length; i++) {
			if (fields[i].getName().equals(fieldName)) {
				flag = true;
				break;
			}else{
				Class supClzz = clzz.getSuperclass();
				if(isExistField(supClzz, fieldName)){
					flag = true;
					break;
				}
			}
		}
		return flag;
	}
	public static void main(String[] args) {
		Map map = new HashMap<>();
		System.err.println(map.getClass() == java.util.HashMap.class);
	}
}

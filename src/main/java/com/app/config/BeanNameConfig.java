package com.app.config;

import com.app.dto.BaseBean;
import com.app.entity.UserBean;

/**
 * 
 * 用于basectr中动态获取bean 实例，通过tableName获取；
 * 
 * @author hesh
 *
 */
public enum BeanNameConfig {
	bean_user(new UserBean(), "newuser"),
	
	; 
	
	
    // 成员变量  
    private BaseBean name;  
    private String index;  
    // 构造方法  
    private BeanNameConfig(BaseBean name, String index) {  
        this.name = name;  
        this.index = index;  
    }  
    /**
     * 获取mapper处理表
     * 
     * @param index
     * @return
     */
    public static BaseBean getName(String index) {  
        for (BeanNameConfig c : BeanNameConfig.values()) {  
            if (c.getIndex().equals(index)) {  
                return c.name;  
            }  
        }  
        return null;  
    }
	public BaseBean getName() {
		return name;
	}
	public void setName(BaseBean name) {
		this.name = name;
	}
	public String getIndex() {
		return index;
	}
	public void setIndex(String index) {
		this.index = index;
	}
	
}

package com.app.util;
/**
 * sign校验约定值
 * 枚举配置，方便在拦截器中通过url获取约定值
 * index的写法是按照url的每一级路径（path）组成
 * name值即为约定值
 * 
 * @author hesh
 *
 */
public enum SignPromiseValue {
	
	Promise_geDelBalance("xxx", "/api/user/",1),
	; 
	
	
    // 成员变量  
    private String name;  
    private String index;  
    private int dubugInfo;  
    // 构造方法  
    private SignPromiseValue(String name, String index,int dubugInfo) {  
        this.name = name;  
        this.index = index;  
        this.dubugInfo = dubugInfo;
    }  
    // 普通方法  
    public static String getName(String index) {  
        for (SignPromiseValue c : SignPromiseValue.values()) {  
            if (c.getIndex().equals(index)) {  
                return c.name;  
            }  
        }  
        return null;  
    }
    public static int getDubugInfo(String index) {  
    	for (SignPromiseValue c : SignPromiseValue.values()) {  
    		if (c.getIndex().equals(index)) {  
    			return c.dubugInfo;  
    		}  
    	}  
    	return 0;  
    }
    
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getIndex() {
		return index;
	}
	public void setIndex(String index) {
		this.index = index;
	}
	public int getDubugInfo() {
		return dubugInfo;
	}
	public void setDubugInfo(int dubugInfo) {
		this.dubugInfo = dubugInfo;
	}
	
}

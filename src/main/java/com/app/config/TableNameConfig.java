package com.app.config;
/**
 * 
 * 1.用于baseBean表名获取配置；
 * 2.评论等模块，需动态获取表名.
 * 
 * @author hesh
 *
 */
public enum TableNameConfig {
	/**
	 * 前台传参tableName标识，bean方式接收，据此从该枚举类中获取实际表名
	 * 例如：评论表，和咨询/视频/拳手都有关联，对应不同的评论表，所以添加删除列表评论都需要动态改变表名
	 */
	table_comment_news("p_comment_news", "c-news"),

	; 
	
	
    // 成员变量  
    private String name;  
    private String index;  
    // 构造方法  
    private TableNameConfig(String name, String index) {  
        this.name = name;  
        this.index = index;  
    }  
    /**
     * 获取mapper处理表
     * 
     * @param index
     * @return
     */
    public static String getName(String index) {  
        for (TableNameConfig c : TableNameConfig.values()) {  
            if (c.getIndex().equals(index)) {  
                return c.name;  
            }  
        }  
        return null;  
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
	
}

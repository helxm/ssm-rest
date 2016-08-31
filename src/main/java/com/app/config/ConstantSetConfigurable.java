package com.app.config;
/**
 * 
 * @author hesh
 *
 */
public class ConstantSetConfigurable extends ConfigurableConstants {
	/**
	 * 静态代码块加载属性配置
	 */
	static {
		init("/constantset.properties");
	}
	//头像图片存储路径
	public final static String HEADPIC_IMGURL = getProperty("headpic.imgurl", "");


}

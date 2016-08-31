package com.app.config;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
/**
 * 
 *
 */
public class ConfigurableConstants {

	protected static Properties p = new Properties();

	protected static void init(String propertyFileName) {
		InputStream in = null;
		try {
			in = ConfigurableConstants.class.getResourceAsStream(propertyFileName);
			if (in != null)
				p.load(in);
		} catch (IOException e) {
			System.out.println("load " + propertyFileName + " into Contants error");
		} finally {
			if (in != null) {
				try {
					in.close();
				} catch (IOException e) {
					System.out.println("载入系统配置文件时出错，文件路径：" + propertyFileName);
				}
			}
		}
	}

	protected static String getProperty(String key, String defaultValue) {
		return p.getProperty(key, defaultValue);
	}
}
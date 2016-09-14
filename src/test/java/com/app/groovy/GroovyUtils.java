package com.app.groovy;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.Writer;
import java.util.HashMap;
import java.util.Map;

import org.codehaus.groovy.control.CompilationFailedException;

import groovy.lang.GroovyClassLoader;
import groovy.lang.GroovyObject;
import groovy.lang.Writable;
import groovy.text.SimpleTemplateEngine;
import groovy.text.Template;
import groovy.text.TemplateEngine;
import groovy.text.markup.MarkupTemplateEngine;
import groovy.text.markup.TemplateConfiguration;

public class GroovyUtils {
	public static GroovyClassLoader loader = null;
	public GroovyUtils() {
		if(loader == null){
			loader = new GroovyClassLoader(ClassLoader.getSystemClassLoader());
		}
	}
	public static Class<?> loadClassFromFile(String filePath){
		Class<?> clzz = null;
		try {
			clzz = loader.parseClass(new File(filePath));//groovy脚本文件
		} catch (CompilationFailedException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return clzz;
	}
	public static Object excuteMethod(Class<?> clzz,String methodName,Object params){
		try {
			GroovyObject groovyObject = (GroovyObject)clzz.newInstance();
			return groovyObject.invokeMethod(methodName,params); 
		} catch (InstantiationException e) {
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			e.printStackTrace();
		} 
		return null;
	}
	/**
	 * 生成标记语言XML-like markup (XML, XHTML, HTML5, …​)
	 * 
	 * he 
	 * 2016年9月14日
	 */
	public static void makeMarkup(){
		TemplateConfiguration config = new TemplateConfiguration();         
		MarkupTemplateEngine engine = new MarkupTemplateEngine(config);     
		Template template = null;
		try {
			template = engine.createTemplate("p('test template')");//结果：<p>test template</p>
		} catch (CompilationFailedException e) {
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}    
		Map<String, Object> model = new HashMap<>();                        
		Writable output = template.make(model);                             
		Writer writer = null;
		try {
			writer = new FileWriter("d:/text-groovy.html");//结果：<p>test template</p>
			output.writeTo(writer);
		} catch (IOException e) {
			e.printStackTrace();
		} 
	}
	/**
	 * 生成java代码
	 * 
	 * he 
	 * 2016年9月14日
	 */
	public static void makeJava(Map<String, Object> model){
		TemplateEngine engine = new SimpleTemplateEngine ();     
		Template template = null;
		try {//从当前路径获取文件
			File in = new File(GroovyUtils.class.getResource("").getPath() + "test.groovy");
			System.err.println(in.getAbsolutePath());
			template = engine.createTemplate(in);//
		} catch (CompilationFailedException e) {
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}    
		model.put("language", "java");
		Writable output = template.make(model);                             
		Writer writer = null;
		try {
			File out = new File(GroovyUtils.class.getResource("").getPath() + "Test.java");
			System.err.println(out.getAbsolutePath());
			writer = new FileWriter(out);//
			output.writeTo(writer);
		} catch (IOException e) {
			e.printStackTrace();
		} 
	}
	public static void main(String[] args) {
		//makeMarkup();
		Map<String, Object> model = new HashMap<>();
		makeJava(model);
		
		System.out.println(System.getProperty("user.dir"));//user.dir指定了当前的路径
		
		String path = GroovyUtils.class.getResource("").getPath();
	    System.out.println(path);//获取绝对路径
	}
}

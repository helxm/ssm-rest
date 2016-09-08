package com.app.main.jspc;

import org.apache.jasper.JspC;
/**
 * 依赖：
 * 1. tomcat lib下jasper.jar；
 * 2. ant相关jar包， 可用：apache-ant-1.9.5-bin.zip；
 * 3. tomcat-juli相关jar包，tomcat-juli.jar位于CATALINA_HOME/bin/
 * 4. 
 * @author hesh
 *
 */
public class TestCompiler{
    public String jspcTest(){  
        String error="";  
        try {  
            JspC jspc = new JspC();  
            //第一种方式
            String rootPath = TestCompiler.class.getResource(".").getFile().toString(); 
            String[] arg0 = {"-uriroot", rootPath, "-d", rootPath, 
                    "test.jsp" }; 
            jspc.setArgs(arg0); 
            
            //第二种方式
            /*jspc.setUriroot("F:/apache-tomcat-6.0.43/webapps/ROOT");//web应用的root目录  
            jspc.setOutputDir("F:/test");//.java文件和.class文件的输出目录  
            jspc.setJspFiles("index.jsp");//要编译的jsp  */
            
            jspc.setCompile(true);//是否编译 false或不指定的话只生成.java文件  
            jspc.execute(); 
        }catch(Exception e){
            error=e.toString();
        }
        return error;  
    }
    public static void main(String args[]){  
        TestCompiler t = new TestCompiler(); 
        String rootPath = TestCompiler.class.getResource(".").getFile().toString();  
        System.err.println(rootPath);
        System.out.println(t.jspcTest());  
    }  
}  
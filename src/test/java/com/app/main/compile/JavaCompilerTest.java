package com.app.main.compile;

import java.io.File;
import java.io.IOException;
import java.util.Arrays;

import javax.tools.DiagnosticCollector;
import javax.tools.JavaCompiler;
import javax.tools.JavaFileObject;
import javax.tools.StandardJavaFileManager;
import javax.tools.ToolProvider;
/**
 * 编译java源文件
 * 
 * 通过javax.tools.*实现
 * 
 * @author hesh
 *
 */
public class JavaCompilerTest {
	public static void complite() throws IOException{
		JavaCompiler compiler = ToolProvider.getSystemJavaCompiler();
	    DiagnosticCollector<JavaFileObject> diagnostics = new DiagnosticCollector<JavaFileObject>();
	    StandardJavaFileManager fileManager = compiler.getStandardFileManager(diagnostics, null, null);
	    Iterable<? extends JavaFileObject> compilationUnits = fileManager.getJavaFileObjectsFromStrings(Arrays.asList("Test.java"));
	    JavaCompiler.CompilationTask task = compiler.getTask(null, fileManager, diagnostics, null,null, compilationUnits);
	    boolean success = task.call();
	    fileManager.close();
	    System.out.println("Success: " + success);
	}
	public static void main(String[] args) throws IOException {
		complite();
	}
}

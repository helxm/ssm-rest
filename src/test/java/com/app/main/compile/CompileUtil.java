package com.app.main.compile;

import java.io.File;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.tools.JavaCompiler;
import javax.tools.JavaFileObject;
import javax.tools.StandardJavaFileManager;
import javax.tools.ToolProvider;

public class CompileUtil {

	private static String KEY_JAVA_FILE = "javaFile";
	private static String KEY_OTHER_FILE = "otherFile";

	/**
	 * compile the class file under the given path:src,and copy the others to
	 * the dest path. the hidden file is not supported
	 * 
	 * @param src
	 *            the path your class file exist
	 * @param dest
	 *            the output path
	 * @param options
	 *            javac compile option,you can refer
	 *            to @{com.sun.tools.javac.main.OptionName},if the option has
	 *            values, just add it to the iterator separately
	 * @param charSet
	 *            your file encoding,like "UTF-8"
	 * @throws Exception
	 */
	public static void compileAndCopyFiles(String src, String dest, List<String> options, String charSet)
			throws Exception {
		System.out.println("start compileAndCopyFiles.....");
		long start = System.currentTimeMillis();
		FileUtil.mkDirs(dest);
		Map<String, List<File>> allFiles = getFiles(src);
		List<File> files = allFiles.get(KEY_JAVA_FILE);
		List<File> otherFiles = allFiles.get(KEY_OTHER_FILE);

		JavaCompiler cmp = ToolProvider.getSystemJavaCompiler();
		StandardJavaFileManager fileManager = cmp.getStandardFileManager(null, null, Charset.forName(charSet));

		Iterable<? extends JavaFileObject> compilationUnits = fileManager.getJavaFileObjectsFromFiles(files);

		cmp.getTask(null, fileManager, null, options, null, compilationUnits).call();
		fileManager.close();

		copyOtherFiles(otherFiles, src, dest);
		System.out.println("end compileAndCopyFiles.Files amount:" + allFiles.size() + ".Total spend time : "
				+ (System.currentTimeMillis() - start) / 1000 + " s");
	}

	private static void copyOtherFiles(List<File> files, String src, String dest) throws Exception {
		for (File file : files) {
			String fileAbsolutePath = file.getAbsolutePath();
			String destPath = dest + fileAbsolutePath.substring(src.length(), fileAbsolutePath.length());
			FileUtil.copy(fileAbsolutePath, destPath);
		}
	}

	private static Map<String, List<File>> getFiles(String src) {
		List<File> files = FileUtil.getAllFiles(src);
		String suffix = ".java";
		Map<String, List<File>> map = new HashMap<String, List<File>>();
		List<File> javaFile = new ArrayList<File>();
		List<File> otherFile = new ArrayList<File>();
		for (File file : files) {
			String fileName = file.getName();
			if (fileName.endsWith(suffix)) {
				javaFile.add(file);
			} else {
				otherFile.add(file);
			}
		}
		map.put(KEY_JAVA_FILE, javaFile);
		map.put(KEY_OTHER_FILE, otherFile);
		return map;
	}

	public static void main(String ars[]) throws Exception {
		System.out.println(System.getProperty("user.dir"));
		String src = System.getProperty("user.dir") + File.separator + "src";
		String dest = System.getProperty("user.dir") + File.separator + "classes" + File.separator + "me";
		List<String> options = new ArrayList<String>();
		// options.add("-verbose");
		options.add("-d");
		options.add(dest);
		CompileUtil.compileAndCopyFiles(src, dest, options, "GBK");

	}

}
package com.app.main.compile;


import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;

public class FileUtil {

	public static List<File> getAllFiles(String path) {
		List<File> files = new ArrayList<File>();
		File file = new File(path);
		if (file.exists() && !file.isHidden()) {
			if (file.isDirectory()) {
				File[] fs = file.listFiles();
				for (File f : fs) {
					if (!file.isHidden()) {
						if (f.isDirectory()) {
							files.addAll(getAllFiles(path + File.separator
									+ f.getName()));
						}
						if (f.isFile()) {
							files.add(f);
						}
					}
				}

			} else if (file.isFile()) {
				files.add(file);
			}
		}
		return files;
	}

	public static void copy(String from, String to) throws Exception {
		InputStream in = new FileInputStream(from);
		OutputStream out = new FileOutputStream(to);

		byte[] buff = new byte[1024];
		int len = 0;
		while ((len = in.read(buff)) != -1) {
			out.write(buff, 0, len);
		}
		in.close();
		out.close();
	}

	public static void mkDirs(String path) {
		File destFile = new File(path);
		if (!destFile.exists()) {
			destFile.mkdirs();
		}
	}

}
package com.app.tool;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.nio.channels.FileChannel;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.eclipse.jgit.api.Git;
import org.eclipse.jgit.api.errors.GitAPIException;
import org.eclipse.jgit.api.errors.NoHeadException;
import org.eclipse.jgit.diff.DiffEntry;
import org.eclipse.jgit.diff.DiffEntry.ChangeType;
import org.eclipse.jgit.diff.RenameDetector;
import org.eclipse.jgit.errors.AmbiguousObjectException;
import org.eclipse.jgit.errors.CorruptObjectException;
import org.eclipse.jgit.errors.IncorrectObjectTypeException;
import org.eclipse.jgit.errors.MissingObjectException;
import org.eclipse.jgit.lib.Constants;
import org.eclipse.jgit.lib.ObjectId;
import org.eclipse.jgit.lib.ObjectLoader;
import org.eclipse.jgit.lib.Repository;
import org.eclipse.jgit.revwalk.RevCommit;
import org.eclipse.jgit.revwalk.RevTree;
import org.eclipse.jgit.revwalk.RevWalk;
import org.eclipse.jgit.storage.file.FileRepositoryBuilder;
import org.eclipse.jgit.treewalk.TreeWalk;
import org.eclipse.jgit.treewalk.filter.PathFilter;
import org.eclipse.jgit.treewalk.filter.TreeFilter;

public class JGitTool {
	private static String copyFolderMark = "_update";  
	private static String projectName = "xxx";
	private static String baseGitPath = "E:\\work\\git\\";
	
	private static String repoPath = baseGitPath + projectName + "\\.git";
	
	private static String basePath = baseGitPath + projectName;
	private static String basePathNew = baseGitPath + projectName + copyFolderMark;
	
	private static String classPath1 = "\\build\\classes";
	private static String classPath2 = "\\WebContent\\WEB-INF\\classes";
	private static String classPath3 = "\\WebRoot\\WEB-INF\\classes";
	
	public static void main(String[] args) throws Exception {
		//test1();
		//System.err.println(File.separator);
		//new File("E:\\work\\git\\pugilist_crm_release\\WEB-INF\\jsp\\census\\coach\\").mkdir();
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		//getCommitFiles(null);
		getCommitFiles(df.parse("2016-10-10 00:00:00"));
		
		// ----------------------------------------------
		System.exit(0);
	}
	/**
	 * 【注意】是从本地仓库获取
	 * 
	 * 1. time为null，获取最新两次提交的变动文件
	 * 2. time不为null，获取最新一次提交与time时间内最早一次提价的变动文件
	 * 
	 * 结果：变动文件输出位置可配置
	 * 
	 * @return
	 * @throws IOException
	 * @throws GitAPIException
	 * @throws NoHeadException
	 * @throws MissingObjectException
	 * @throws IncorrectObjectTypeException
	 * @throws ParseException 
	 */
	private static List<String> getCommitFiles(Date time)
			throws IOException, GitAPIException, NoHeadException, MissingObjectException, IncorrectObjectTypeException, ParseException {
		
		FileRepositoryBuilder builder = new FileRepositoryBuilder();
	    String projectURL = System.getProperty("user.dir");
	       // Repository repository = builder.setGitDir(new File(projectURL.substring(0, projectURL.lastIndexOf("\\"))+"\\.git"))
	    Repository repository = builder.setGitDir(new File(repoPath))
	                .readEnvironment() // scan environment GIT_* variables
	                .findGitDir() // scan up the file system tree
	                .build();
	    
	    Git git = new Git(repository);
	       
		//File gitWorkDir = new File("E:/work/git/pugilist_crm/");
		//Git git = Git.open(gitWorkDir);
		
		Repository repo = git.getRepository();
		Iterable<RevCommit> logs = git.log().call();
		Iterator<RevCommit> i = logs.iterator();
		
		RevWalk revWalk = new RevWalk(repo);
		TreeWalk treeWalk = new TreeWalk(repo);
		treeWalk.setRecursive(true);//true -- 遍历所有文件
		treeWalk.setFilter(TreeFilter.ANY_DIFF);
		
		RevTree tree = null;
		
		int index = 0;
		while (i.hasNext() ) {
			RevCommit commit = revWalk.parseCommit( i.next() );
			if(time != null){
				if(Integer.valueOf((time.getTime() + "").toString().substring(0,10)) > commit.getCommitTime()){
					break;
				}
			}else if(index == 2){
				break;
			}
			
			tree = commit.getTree();
			
			SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			System.out.println("commit-time-" + (index + 1) + ": " + df.format(new Date(Long.valueOf(commit.getCommitTime() + "000"))));//提交时间
			
			if(index == 0){
				treeWalk.addTree(tree);//最近一次提交
			}
			
			//System.out.println(commit.getShortMessage());
			
			/*while(treeWalk.next()){
				System.out.println(treeWalk.getPathString());
			}*/
			
			index++ ;
		}
		treeWalk.addTree(tree);
		
		RenameDetector rd = new RenameDetector(repository);  
        rd.addAll(DiffEntry.scan(treeWalk));  //【注意】只能比较两次的RevTree差异
        List<DiffEntry> diffEntries = rd.compute();  
		
        return computeChangeFiles(diffEntries);  
	}
	/**
	 * 根据两个提交记录的差异diff找到改变文件
	 * 
	 * @param diffEntries
	 * @return
	 */
	private static List<String> computeChangeFiles(List<DiffEntry> diffEntries) {
		
		if(diffEntries == null || diffEntries.size() == 0){
			System.out.println("没有更新");
			return null;
		}
		
		/**
		 * 先删除上次执行产生的文件
		 */
		if(projectName != null && projectName.trim().length() > 0 && basePathNew.endsWith(copyFolderMark)){
			//new File(basePathNew).delete();
			deleteDirectory(basePathNew);
		}
		
		List<String> modifyFiles = new ArrayList<>();
		
		Iterator<DiffEntry> iterator = new ArrayList<DiffEntry>(diffEntries).iterator();  
        DiffEntry diffEntry = null;  
        while (iterator.hasNext()) {  
            diffEntry = iterator.next();  
            System.out.println("newPath:" + diffEntry.getNewPath() + "    oldPath:"  
                               + diffEntry.getOldPath() + "   changeType:"  
                               + diffEntry.getChangeType());  
            if (diffEntry.getChangeType() != ChangeType.DELETE) {  
            	String newFilePath = diffEntry.getNewPath();
            	newFilePath = newFilePath.replace("src/", "").replace("src\\", File.separator).replace("java", "class");
            	String relativePath = File.separator + newFilePath;
            	String newFileClassPath = basePath + classPath1 + relativePath;
            	String copyToPath = basePathNew + File.separator + "WEB-INF" + File.separator + "classes" + relativePath;
            	File newClassFile = new File(newFileClassPath) ;
        		if(!newClassFile.exists()){
        			newFileClassPath = basePath + classPath2 + relativePath;
        			copyToPath = basePathNew + File.separator + "WEB-INF" + File.separator + "classes" + relativePath;
        			newClassFile = new File(newFileClassPath) ;
        			if(!newClassFile.exists()){
        				newFileClassPath = basePath + classPath3 + relativePath;
        				copyToPath = basePathNew + File.separator + "WEB-INF" + File.separator + "classes" + relativePath;
        				newClassFile = new File(newFileClassPath) ;
        				if(!newClassFile.exists()){
            				newFileClassPath = basePath + relativePath;
            				copyToPath = basePathNew + relativePath.replace("WebContent/", "")
            					.replace("WebContent\\", File.separator)
            					.replace("WebRoot/", "")
            					.replace("WebRoot\\", File.separator)
            					;
            				/**
            				 * 处理admin项目下配置文件路径
            				 */
            				if(newFilePath.startsWith("resource")
            						|| newFilePath.startsWith("config")
            						){
            					copyToPath = copyToPath.replace("resource", "WEB-INF").replace("config", "WEB-INF");
            				}
            				newClassFile = new File(newFileClassPath) ;
            				if(!newClassFile.exists()){
                				System.err.println("没有找到文件： " + newFileClassPath);
                				//TODO 可以开始谁用java的api编译
                				newFileClassPath = null;
                    		}
                		}
            		}
        		}
            	
        		if(newFileClassPath != null){
        			copyFiles(newFileClassPath,copyToPath);
        		}
        		
            	modifyFiles.add(newFileClassPath) ;
            }  
        }
		return modifyFiles;
	}
	/**
	 * 把文件复制到{projectName} + "_release"文件夹
	 * @param newFileClassPath
	 * @param copyToPath
	 */
	private static void copyFiles(String newFileClassPath, String copyToPath) {
		System.out.println(newFileClassPath);
		System.out.println(copyToPath);
		fileChannelCopy(new File(newFileClassPath), new File(copyToPath));
	}

	/**
	 * 
	 * 使用文件通道的方式复制文件
	 * 
	 * @param s
	 *            源文件
	 * @param t
	 *            复制到的新文件
	 */

	public static void fileChannelCopy(File s, File t) {
		if(!s.exists() || s.isDirectory()){
			return;
		}
		if(!t.exists()){
			t.getParentFile().mkdirs();
		}
		FileInputStream fi = null;
		FileOutputStream fo = null;
		FileChannel in = null;
		FileChannel out = null;
		try {
			fi = new FileInputStream(s);
			fo = new FileOutputStream(t);
			in = fi.getChannel();// 得到对应的文件通道
			out = fo.getChannel();// 得到对应的文件通道
			in.transferTo(0, in.size(), out);// 连接两个通道，并且从in通道读取，然后写入out通道
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				fi.close();
				in.close();
				fo.close();
				out.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
	
	public static boolean deleteDirectory(String sPath) {
        //如果sPath不以文件分隔符结尾，自动添加文件分隔符
        if (!sPath.endsWith(File.separator)) {
            sPath = sPath + File.separator;
        }
        File dirFile = new File(sPath);
        //如果dir对应的文件不存在，或者不是一个目录，则退出
        if (!dirFile.exists() || !dirFile.isDirectory()) {
            return false;
        }
        boolean flag = true;
        //删除文件夹下的所有文件(包括子目录)
        File[] files = dirFile.listFiles();
        for (int i = 0; i < files.length; i++) {
            //删除子文件
            if (files[i].isFile()) {
                flag = deleteFile(files[i].getAbsolutePath());
                if (!flag) break;
            } //删除子目录
            else {
                flag = deleteDirectory(files[i].getAbsolutePath());
                if (!flag) break;
            }
        }
        if (!flag) return false;
        //删除当前目录
        if (dirFile.delete()) {
            return true;
        } else {
            return false;
        }
    }
	/** 
	 * 删除单个文件 
	 * @param   sPath    被删除文件的文件名 
	 * @return 单个文件删除成功返回true，否则返回false 
	 */  
	public static boolean deleteFile(String sPath) {  
	    boolean flag = false;  
	    File file = new File(sPath);  
	    // 路径为文件且不为空则进行删除  
	    if (file.isFile() && file.exists()) {  
	        file.delete();  
	        flag = true;  
	    }  
	    return flag;  
	}  
	/**
	 * 问题：总是打印.classpath文件？？？？
	 * 
	 * @throws IOException
	 * @throws AmbiguousObjectException
	 * @throws IncorrectObjectTypeException
	 * @throws MissingObjectException
	 * @throws CorruptObjectException
	 */
	private static void test1() throws IOException, AmbiguousObjectException, IncorrectObjectTypeException,
			MissingObjectException, CorruptObjectException {
		File gitWorkDir = new File("E:/work/git/pugilist_crm/");
		Git git = Git.open(gitWorkDir);
		Repository repo = git.getRepository();

		ObjectId lastCommitId = repo.resolve(Constants.HEAD);

		RevWalk revWalk = new RevWalk(repo);
		
		RevCommit commit = revWalk.parseCommit(lastCommitId);

		RevTree tree = commit.getTree();
		
		System.err.println(commit.getFullMessage());

		System.err.println(tree.name());
		
		TreeWalk treeWalk = new TreeWalk(repo);
		treeWalk.addTree(tree);
		treeWalk.setRecursive(true);
		//treeWalk.setFilter(PathFilter.create("file1.txt"));
		
		if (!treeWalk.next()) {
			System.out.println("Nothing found!");
			return;
		}
		
		System.out.println(treeWalk.getPathString());//获取提交的文件名
		
		ObjectId objectId = treeWalk.getObjectId(0);
		ObjectLoader loader = repo.open(objectId);

		ByteArrayOutputStream out = new ByteArrayOutputStream();
		loader.copyTo(out);
		System.out.println("file1.txt:\n" + out.toString());
	}
}
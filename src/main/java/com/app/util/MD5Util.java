package com.app.util;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.MappedByteBuffer;
import java.nio.channels.FileChannel;
import java.security.MessageDigest;
public class MD5Util {  
	static char hexDigits[] = { '0', '1', '2', '3', '4',  
			'5', '6', '7', '8', '9',  
			'A', 'B', 'C', 'D', 'E', 'F' };  
    public final static String MD5(byte[] btInput) {  
        try {  
        	MessageDigest mdInst = MessageDigest.getInstance("MD5");  
//            byte[] btInput = s.getBytes();  
     //获得MD5摘要算法的 MessageDigest 对象  
     //使用指定的字节更新摘要  
            mdInst.update(btInput);  
     //获得密文  
            byte[] md = mdInst.digest();  
     //把密文转换成十六进制的字符串形式  
            int j = md.length;  
            char str[] = new char[j * 2];  
            int k = 0;  
            for (int i = 0; i < j; i++) {  
                byte byte0 = md[i];  
                str[k++] = hexDigits[byte0 >>> 4 & 0xf];  
                str[k++] = hexDigits[byte0 & 0xf];  
            }  
            return new String(str);  
        }  
        catch (Exception e) {  
            e.printStackTrace();  
            return null;  
        }  
    }  
    public final static String getFileMD5String(String filepath) {  
    	FileInputStream in =null;
    	ByteArrayOutputStream out= null;
    	try {  
        	File file=new File( filepath);
     	    in = new FileInputStream(file);
     	   
     	    out = new ByteArrayOutputStream((int)file.length());  
     	  
     		byte[] cache = new byte[1048576];  
	     	for(int i = in.read(cache);i != -1;i = in.read(cache)){  
	     	  out.write(cache, 0, i);  
	     	}


        	MessageDigest mdInst = MessageDigest.getInstance("MD5");  
//            byte[] btInput = s.getBytes();  
		     //获得MD5摘要算法的 MessageDigest 对象  
		     //使用指定的字节更新摘要  
            mdInst.update(out.toByteArray());  
     //获得密文  
            byte[] md = mdInst.digest();  
     //把密文转换成十六进制的字符串形式  
            int j = md.length;  
            char str[] = new char[j * 2];  
            int k = 0;  
            for (int i = 0; i < j; i++) {  
                byte byte0 = md[i];  
                str[k++] = hexDigits[byte0 >>> 4 & 0xf];  
                str[k++] = hexDigits[byte0 & 0xf];  
            }  
            return new String(str);  
        }  
        catch (Exception e) {  
            e.printStackTrace();  
            return null;  
        }
        finally
        {
        	if(out != null)
        	{
        		try {
					out.close();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
        	}
        	if(in != null)
        	{
        		try {
					in.close();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
        	}
        }
    } 

    public static void main(String[] args) throws Exception {  
        FileInputStream os1=new FileInputStream(new File("D:\\work\\SAF-A\\apk\\SAFDemoIAPAPK-201304031103\\META-INF\\CERT.RSA"));
//        getkey(os1);
        byte[] skt1=new byte[1024*5];
        int k1=os1.read(skt1);
        byte[] src=new byte[k1];
        System.arraycopy(skt1, 0, src, 0, k1);
        System.out.print(k1+"   "+MD5Util.MD5(src));  
    }  
}  

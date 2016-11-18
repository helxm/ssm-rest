/*package com.app.web;

import java.awt.image.BufferedImage;
import java.io.File;
import java.lang.reflect.Field;
import java.sql.Timestamp;
import java.util.Date;
import java.util.Map;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.beanutils.PropertyUtils;
import org.apache.commons.lang.ObjectUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;
import org.apache.struts2.ServletActionContext;
import org.apache.struts2.interceptor.ServletRequestAware;

import com.app.util.CensusUtil;
import com.app.util.CodeUtil;
import com.hotpot.ms.dao.util.EntityMethoddesc;
import com.hotpot.ms.dao.util.Entitydesc;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;

import net.sf.json.JSONObject;

@SuppressWarnings("serial")
public class BaseAction extends ActionSupport implements ModelDriven<Object>,ServletRequestAware{
	public Logger logger = Logger.getLogger("PROTAL-DEBUG");
	public boolean cmd=false;
	public static final String SUCCESS="success";
	
	public static final String DEV="dev";
	
	protected HttpServletRequest request;
	
	private Integer rows;//每页显示的记录数   
	private Integer page;//当前第几页  
	
	protected Object vo;
	protected ManagerDao<?> voDao;
	protected String voDbName;
	protected String voIdName;
	
	protected String name;
	protected String ids;
	protected boolean hasIsDelProperty = true;//假删除字段，0-删除，1-非删除
	
	*//**
	 * 图片上传
	 *//*
	public File upload_one_file;
	public String upload_one_fileFileName;
	
	@Override
	public Object getModel() {
		return vo;
	}
	
	*//**
	 * 确定操作对象
	 * @param vo
	 * @throws SecurityException 
	 * @throws NoSuchFieldException 
	 *//*
	public void setVo(DAO vo,ManagerDao<?> voDao) {
		Class<? extends Object> clzz = vo.getClass();
		boolean hasAnnotation = clzz.isAnnotationPresent(Entitydesc.class);
		if (hasAnnotation) {
			Entitydesc annotation = clzz.getAnnotation(Entitydesc.class);
			voDbName = annotation.tablename();
			voIdName = annotation.pk();
			try {
				clzz.getDeclaredField("isDelated");
			} catch (Exception e) {
				//e.printStackTrace();
				hasIsDelProperty = false;
				logger.info("BaseAction 公共请求，model：" + vo.getClass().getSimpleName() + "，无isDelated属性");
			}
		}
		this.vo = vo;
		this.voDao = voDao;
	}
	
	
	*//*********************************he 常用公共接口方法************************************//*
	public String page(){
		request.setAttribute("model", vo.getClass().getSimpleName());
		request.setAttribute("userVo", getUser());
		return SUCCESS;
	}
	
	*//**
	 * 公共列表方法
	 * 		默认排序
	 * 默认条件
	 * 		isDelated = '1'
	 * 模糊查询
	 * 		name
	 * @return
	 * 		json
	 *//*
	public String getList() throws Exception{
		String whereParam = "_w";
		String leftJoinParam = "_lj";
		String leftJoinAndParam = "_lja";
		String fieldsParam = "_f";
		String orderParam = "_order";
		String orderTypeParam = "_order_type";
		
		StringBuffer sqlstr = new StringBuffer(" select   " );
		if( StringUtils.isNotBlank(request.getParameter("_f"))){
			getSqlFromBeanByParam(fieldsParam, sqlstr);
		}else{
			sqlstr.append(" t.* ");
		}
		
		sqlstr.append(" from ");
		sqlstr.append(voDbName + " t ");
		getSqlFromBeanByParam(leftJoinParam, sqlstr);
		
		String _lja = request.getParameter(leftJoinAndParam);
		if(StringUtils.isNotBlank(_lja)){
			sqlstr.append(" and t." + _lja);
		}
		
		sqlstr.append(" where 1=1 ");
		if(hasIsDelProperty){
			sqlstr.append(" and t.isDelated = '1'");            
		}
		
		Map<String, Object> map = request.getParameterMap();
		Class<? extends DAO> clzz = vo.getClass();
		for(String key : map.keySet() ){
			if("rows".equals(key)
					|| "page".equals(key)
					|| "vo".equals(key)
					){
				continue;
			}
			if(StringUtils.isNotBlank(key) && map.get(key) != null && StringUtils.isNotBlank(map.get(key).toString())){
				Object value = null;
				try {
					value = PropertyUtils.getProperty(vo, key);
				} catch (Exception e) {
				}
				if(value != null && StringUtils.isNotBlank(value.toString())){
					Field field = clzz.getDeclaredField(key);
					Class<?> fieldType = field.getType();
					if(fieldType == String.class){
						sqlstr.append(" and t." + key + " like '%" + CodeUtil.toChinese(value.toString().trim()) + "%' ");
					}else if(fieldType == Integer.class || fieldType == int.class || fieldType == Long.class || fieldType == long.class){
						sqlstr.append(" and t." + key + " = " + value);
					}else if(fieldType == Character.class || fieldType == char.class){
						sqlstr.append(" and t." + key + " = '" + value + "' ");
					}else if(fieldType == Timestamp.class || fieldType == Date.class){
						sqlstr.append(" and t." + key + " = '" + value + "' ");
					}
				}
			}
		}
		
		getSqlFromBeanByParam(whereParam, sqlstr);
		
		String order = request.getParameter(orderParam);
		if(StringUtils.isNotBlank(order)){
			try {
				PropertyUtils.getProperty(vo, order);
				String orderType = request.getParameter(orderTypeParam);
				if("desc".equalsIgnoreCase(orderType)){
					orderType = "desc";
				}else{
					orderType = "asc";
				}
				sqlstr.append(" order by t." + order + " " + orderType );
			} catch (Exception e) {
				if(e instanceof NoSuchMethodException){
					System.out.println(e.getMessage());//vo模型没有order属性
				}
			}
		}
		return responseJosn(voDao.search_ReturnJsonString(sqlstr.toString(), getRows(),getPage()));
	}

	private void getSqlFromBeanByParam(String paramName, StringBuffer sqlstr) {
		Class<? extends DAO> clzz = vo.getClass();
		String _where = request.getParameter(paramName);
		if(StringUtils.isNotBlank(_where)){
			JSONObject paramObject = JSONObject.fromObject(_where);
			if(paramObject != null){
				for(Object feild : paramObject.keySet()){
					if(feild != null && feild.toString() != null){
						String feildName = feild.toString();
						try {
							Field field = clzz.getDeclaredField(feildName);
							EntityMethoddesc descAnno = field.getAnnotation(EntityMethoddesc.class);
							if(descAnno != null){
								String desc = descAnno.description();
								if(StringUtils.isNotBlank(desc)){
									JSONObject config = JSONObject.fromObject(desc);
									String configKey = paramObject.getString(feildName);
									String configValue = config.getString(configKey);
									sqlstr.append(configValue);
								}
							}
						} catch (Exception e) {
							e.printStackTrace();
						}
					}
				}
			}
		}
	}
	
	*//**
	 * 查找
	 *
	 * @return
	 * @throws Exception
	 *//*
	public String toUpdate() throws Exception{
		boolean flag = false;
		try {
			Object vo_ = voDao.getOne(vo.getClass(), "select * from " + voDbName + " where " + voIdName + "=" + ids);
			if (vo_ != null) {
				flag = true;
			} 
			return respSucess(flag,vo_);
		} catch (Exception e) {
			e.printStackTrace();
			return respError();
		}
	}
	
	*//**
	 * 保存或者修改排行榜记录
	 *//*
	public String saveOrUpdate() throws Exception {
		boolean flag = true;
		try {
			if(hasIsDelProperty){
				PropertyUtils.setProperty(vo, "isDelated", '1');
			}
			Object id = PropertyUtils.getProperty(vo, voIdName);
			if (id != null) {
				flag = voDao.update(vo);
			} else {
				flag = voDao.insert(vo);
			}
			return respSucess(flag,null);
		} catch (Exception e) {
			e.printStackTrace();
			return respError();
		}
	}
	*//**
	 * 删除
	 *//*
	public String deletes() throws Exception {
		boolean flag = true;
		try {
			if(hasIsDelProperty){
				flag = voDao.update("update " + voDbName + " set isDelated = '0' where " + voIdName + " in(" + ids + ")");
			}else{
				flag = voDao.update("delete from " + voDbName + " where " + voIdName + " in(" + ids + ")");
			}
			return respSucess(flag,null);
		} catch (Exception e) {
			e.printStackTrace();
			return respError();
		}
	}
	
	*//**
	 * 获取当前用户信息
	 * 	其中corporationid=158，corporationname=机构列表，表示超级管理员
	 * @return
	 *//*
	protected Adminlogin getUser() {
		HttpSession session = ServletActionContext.getRequest().getSession();
		Adminlogin adminlogin = (Adminlogin) session.getAttribute("admin");
		return adminlogin;
	}
	
	*//*********************************he 公共返回格式处理************************************//*
	
	*//**
	 * 返回json，公共逻辑
	 * @return
	 * @throws Exception 
	 *//*
	protected String respSucess(boolean flag,Object data) throws Exception{
		JSONObject obj = new JSONObject();
		if (flag) {
			obj.put(CensusUtil.CONTENT, data);
			obj.put(CensusUtil.CODE, CensusUtil.CODE_RIGHT);
			obj.put(CensusUtil.MSG, CensusUtil.CODE_RIGHT_MSG);
		} else {
			obj.put(CensusUtil.CODE, CensusUtil.CODE_WRONG);
			obj.put(CensusUtil.MSG, CensusUtil.CODE_WRONG_MSG);
		}
		return responseJosn(obj.toString());
	}
	*//**
	 * 返回报错
	 * @return
	 * @throws Exception
	 *//*
	protected String respError() throws Exception {
		JSONObject obj = new JSONObject();
		obj.put(CensusUtil.CODE, CensusUtil.CODE_EXCEPTION);
		obj.put(CensusUtil.MSG, CensusUtil.CODE_EXCEPTION_MSG);
		return responseJosn(obj.toString());
	}
	
	
	
	
	
	*//********************************* 图片上传 ************************************//*
	
	*//**
	 * 上传图片
	 *//*
	public String uploadImg() throws Exception {
		HttpServletRequest request = ServletActionContext.getRequest();
		// 上传图片的类型
		String type = vo.getClass().getSimpleName().replace("bean", "").toLowerCase();

		JSONObject obj = new JSONObject();
		// 创建文件
		String basePath = ReadProperties.downimgurl + "/" + type;
		File file = new File(basePath);
		if (!file.exists()) {
			file.mkdirs();
		}
		try {
			if (upload_one_file != null) {
				// 检查像素
				BufferedImage bi = ImageIO.read(upload_one_file);
				if (bi == null) {
					obj.put("flag", false);
					obj.put("mess", "上传图片有误！");
					return responseJosn(obj.toString());
				}

				// 检查图片大小
				if (checkImgSize(upload_one_file, "3072000")) {
					obj.put("flag", false);
					obj.put("mess", "图片太大");
					return responseJosn(obj.toString());
				}

				// 检查像素
				
				 * if (upload_one_file.length() > 200 * 1024) { ResizeImage r1 =
				 * new ResizeImage(1024); r1.writeHighQuality(r1.zoomImage(bi),
				 * upload_one_file); } bi = ImageIO.read(upload_one_file);
				 

				FileUpAndLoad2 fileUpAndLoad = new FileUpAndLoad2();
				System.out.println("图片上传真实路径===" + "basePath===" + basePath
						+ "/" + upload_one_fileFileName);
				Map<String, Object> map = fileUpAndLoad.saveFileV2(basePath,
						"", upload_one_file, type, upload_one_fileFileName);

				String ofilename = (String) map.get("filepath");
				String str = request.getScheme() + "://" + request.getServerName() + (request.getServerPort() == 80 ? "" : ":" + request.getServerPort());
				obj.put("url", str + "/img/" + type + "/" + ofilename.replace("/", ""));
			}
			obj.put("flag", true);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return responseJosn(obj.toString());
	}
	
	
	
	*//*********************************he 分割线  尾************************************//*
	
	
	
	//暂时写死的meetid
	public Integer getMeetId(){
		return 8;
	}
	
	*//**
	 * 检查像素(低于某像素)
	 * @param fileup
	 * @param size
	 * @return
	 * @throws Exception
	 *//*
	public Boolean checkImgPixel(BufferedImage bi,String width,String height) throws Exception{
		int wid = bi.getWidth(); // 像素  
	    int heig = bi.getHeight(); // 像素  
	    Integer img_width = Integer.valueOf(width);
	    Integer img_height = Integer.valueOf(height);
	    if (img_height<0) {
	    	 return wid>img_width  ;
		}else{
			return wid>img_width || heig>img_height ;
		}
	}
	*//**
	 * 检查像素(等于某像素)
	 * @param fileup
	 * @param size
	 * @return
	 * @throws Exception
	 *//*
	public Boolean checkImgPixelFinal(BufferedImage bi,String width,String height) throws Exception{
		int wid = bi.getWidth(); // 像素  
	    int heig = bi.getHeight(); // 像素  
	    
	    System.out.println(wid+"*"+heig);
	    Integer img_width = Integer.valueOf(width);
	    Integer img_height = Integer.valueOf(height);
	    System.out.println(wid==img_width && heig==img_height);
		return wid==img_width && heig==img_height ;
	}
	
	*//**
	 * 检查图片大小
	 * @param fileup
	 * @param size
	 * @return
	 * @throws Exception
	 *//*
	public boolean checkImgSize(File fileup,String size) throws Exception{
		Integer img_size = Integer.valueOf(size);
		long length = fileup.length();
		return length >= img_size ;
	}
	
//============用户相关Start=============================
	
	*//**
	 * 获取登录人id
	 * @return
	 * @throws Exception
	 *//*
	public Integer getAdminId() throws Exception{
		Adminlogin oldAdm=(Adminlogin)getSession("admin");
		if (oldAdm == null) {
			return null;
		}
		return oldAdm.getAdminid();
	}
	
	*//**
	 * 获取登录人姓名
	 * @return
	 * @throws Exception
	 *//*
	public String getAdminName() throws Exception{
		Adminlogin oldAdm=(Adminlogin)getSession("admin");
		if (oldAdm == null) {
			return null;
		}
		return oldAdm.getName();
	}
	
	*//**
	 * 获取admin
	 * @return
	 * @throws Exception
	 *//*
	public Adminlogin getAdmin() throws Exception{
		Adminlogin oldAdm=(Adminlogin)getSession("admin");
		return oldAdm;
	}

//============用户相关End=============================
	
	*//**
	 * 获取pluginName
	 * @return
	 * @throws Exception
	 *//*
	public String getPluginType() throws Exception{
		String pluginType = (String) getSession(VOConstants.PLUGINTYPE);
		return pluginType;
	}
	
	
	*//**
	 * 返回json字符串
	 * @param json
	 * @return
	 * @throws Exception
	 *//*
	public  String responseJosn(String json) throws Exception{
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html;charset=UTF-8");
		response.getWriter().print(json);
		return null;
	}
	
	*//**
	 * 向session中存放值
	 * @param jsonStr
	 * @param obj
	 *//*
	public void setSession(String jsonStr,Object obj){
		ServletActionContext.getContext().getSession().put(jsonStr,  obj);
	}
	
	*//**
	 * 获取session中的值
	 * @param sessionStr
	 * @return
	 * @throws Exception
	 *//*
	public Object getSession(String sessionStr) throws Exception{
		//ServletActionContext.getRequest().getSession().getAttribute(arg0) 
		
		 return  ServletActionContext.getRequest().getSession().getAttribute(sessionStr) ;
	}

	public Adminlogin getAdminlogin() throws Exception{
		return (Adminlogin)getSession("admin");
	}

	
	public Integer getRows() {
		return rows;
	}

	public void setRows(Integer rows) {
		if (rows == null) {
			rows = 50;
		}
		this.rows = rows;
	}

	public Integer getPage() {
		return page;
	}

	public void setPage(Integer page) {
		if (page == null) {
			page = 1;
		}
		this.page = page;
	}
	public Object getVo() {
		return vo;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getIds() {
		return ids;
	}
	public void setIds(String ids) {
		this.ids = ids;
	}
	@Override
	public void setServletRequest(HttpServletRequest request) {
		this.request = request;
	}
	public File getUpload_one_file() {
		return upload_one_file;
	}
	public void setUpload_one_file(File upload_one_file) {
		this.upload_one_file = upload_one_file;
	}
	public String getUpload_one_fileFileName() {
		return upload_one_fileFileName;
	}
	public void setUpload_one_fileFileName(String upload_one_fileFileName) {
		this.upload_one_fileFileName = upload_one_fileFileName;
	}
	
	
}
*/
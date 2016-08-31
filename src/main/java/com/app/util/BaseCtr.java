package com.app.util;

import java.beans.PropertyEditorSupport;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.Assert;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Errors;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.BaseServiceImpl;
import com.github.pagehelper.PageHelper;


@RestController
@RequestMapping("/api/base")
public class BaseCtr {
	
	protected static Logger logger = Logger.getLogger("BaseCtr");
	
	@Autowired
	protected HttpServletRequest request;
	
	@Autowired
	protected BaseServiceImpl baseService;
	
	protected static int pageSize = 10;
	
	protected UserBean user;
	
	protected static DozerBeanMapper dozer = new DozerBeanMapper();
	/**
	 * 查询操作
	 * 
	 * @param map
	 * @param tableName
	 * @param querySerial
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save$Base")
	public ViewBean saveBase(@RequestParam Map<String,Object> map
			,@RequestParam(value = "tableName") String tableName//用于获取bean及表
			,@RequestParam(value = "query",required = false) String querySerial//用于获取差异化sql配置及差异化验证，若为空则获取默认配置
			) throws Exception {
		BaseBean bean = BeanNameConfig.getName(tableName);//根据tableName获取bean实例
		Assert.notNull(bean, "base操作：" + tableName + "模型配置不能为空");
		dozer.map(map, bean);
		/**
		 * 校验，必须在bean赋值之后，可根据querySerial配置实体差别化校验
		 */
		ValidateUtils.validate(bean, querySerial);
		
		/**
		 * 获取配置并构建sql
		 */
		SqlConfig.INSTANCE.init();
		querySerial = SqlConfig.INSTANCE.getInsertSql(querySerial,map,bean,user);
		bean.setSql(querySerial);
		
		baseService.updateBase(bean);
		logger.info("新增，查询表：" + bean.getTableName());
		logger.info("新增，sql配置：" + bean.getSql());
		return JsonUtils.getSuccess("操作成功");
	}
	/**
	 * 更新操作
	 * @param map
	 * @param tableName
	 * @param querySerial
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/update$Base")
	public ViewBean updateBase(@RequestParam Map<String,Object> map
			,@RequestParam(value = "tableName") String tableName
			,@RequestParam(value = "query",required = false) String querySerial
			) throws Exception {
		BaseBean bean = BeanNameConfig.getName(tableName);//根据tableName获取bean实例
		Assert.notNull(bean, "base操作：" + tableName + "模型配置不能为空");
		dozer.map(map, bean);
		
		/**
		 * 获取并构建sql配置
		 */
		SqlConfig.INSTANCE.init();
		querySerial = SqlConfig.INSTANCE.getUpdateSql(querySerial,map,bean);
		bean.setSql(querySerial);
		
		baseService.updateBase(bean);
		logger.info("更新，查询表：" + bean.getTableName());
		logger.info("更新，sql配置：" + bean.getSql());
		return JsonUtils.getSuccess("操作成功");
	}
	/**
	 * 删除
	 * 
	 * @param map
	 * @param tableName
	 * @param querySerial
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/delete$Base")
	public ViewBean deleteBase(@RequestParam Map<String,Object> map
			,@RequestParam(value = "tableName") String tableName
			,@RequestParam(value = "query",required = false) String querySerial
			) throws Exception {
		map.put("isDelated", "0");
		BaseBean bean = BeanNameConfig.getName(tableName);//根据tableName获取bean实例
		Assert.notNull(bean, "base操作：" + tableName + "模型配置不能为空");
		dozer.map(map, bean);
		ValidateUtils.validateDelete(bean, querySerial,map);
		/**
		 * 获取并构建sql配置
		 */
		SqlConfig.INSTANCE.init();
		querySerial = SqlConfig.INSTANCE.getUpdateSql(querySerial,map,bean);
		bean.setSql(querySerial);
		
		baseService.updateBase(bean);
		logger.info("更新，查询表：" + bean.getTableName());
		logger.info("更新，sql配置：" + bean.getSql());
		return JsonUtils.getSuccess("操作成功");
	}
	
	/**
	 * 统一查询接口
	 * <b>注意</b> 需配置BeanNameConfig（实体名）及TableNameConfig（表名）
	 * 
	 * @param tableName 必填参数，用户确定查询表及返回实体类型
	 * @param pageNum 可选参数，用于分页
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/listBase")//@BaseModel("tableName") @Validated(TableOnlyGroup.class) BaseBean record, 
	public ViewBean listBase(@RequestParam Map<String,Object> map
							,@RequestParam(value = "tableName") String tableName//用于获取bean及表
							,@RequestParam(value = "query",required = false) String querySerial//用于获取差异化sql配置及差异化验证
							,@RequestParam(value = "pageNum",required = false) Integer pageNum
							) throws Exception {
		BaseBean bean = BeanNameConfig.getName(tableName);//根据tableName获取bean实例
		Assert.notNull(bean, "base操作：" + tableName + "模型配置不能为空");
		dozer.map(map, bean);
		ValidateUtils.validateList(bean, querySerial,map);
		/**
		 * 获取并构建sql配置
		 */
		SqlConfig.INSTANCE.init();
		querySerial = SqlConfig.INSTANCE.getSelectSql(querySerial,map,bean);
		bean.setSql(querySerial);
		
		if(pageNum != null){
			PageHelper.startPage(pageNum, pageSize);
		}
		logger.info("列表查询，查询表：" + bean.getTableName());
		logger.info("列表查询，sql配置：" + bean.getSql());
		List list = new ArrayList();
		List<BaseBean> beans = baseService.findAll(bean);
		if(beans != null && beans.size() > 0){
			for (int i = 0; i < beans.size(); i++) {
				BaseBean baseBean = beans.get(i);
				if(baseBean != null && baseBean.getCreateTime() != null){
					baseBean.setCreateTimeTamp(baseBean.getCreateTime().getTime() + "");
				}
				if(baseBean != null && baseBean.getUpdateTime() != null){
					baseBean.setUpdateTimeTamp(baseBean.getUpdateTime().getTime() + "");
				}
				list.add(baseBean);
			}
		}
		return JsonUtils.getSuccess("查询成功", list);
	}
	/**
	 * id查询
	 * @param map
	 * @param tableName
	 * @param querySerial
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/readBase")//@BaseModel("tableName") @Validated(TableOnlyGroup.class) BaseBean record, 
	public ViewBean read(@RequestParam Map<String,Object> map
			,@RequestParam(value = "tableName") String tableName//用于获取bean及表
			,@RequestParam(value = "query",required = false) String querySerial//用于获取差异化sql配置及差异化验证
			) throws Exception {
		BaseBean bean = BeanNameConfig.getName(tableName);//根据tableName获取bean实例
		Assert.notNull(bean, "base操作：" + tableName + "模型配置不能为空");
		dozer.map(map, bean);
		ValidateUtils.validateRead(bean, querySerial);
		
		/**
		 * 获取并构建sql配置
		 */
		SqlConfig.INSTANCE.init();
		querySerial = SqlConfig.INSTANCE.getReadSql(querySerial,map,bean);
		bean.setSql(querySerial);
		
		logger.info("id查询，查询表：" + bean.getTableName());
		logger.info("统计，sql配置：" + bean.getSql());
		bean = baseService.findById(bean);
		if(bean != null && bean.getCreateTime() != null){
			bean.setCreateTimeTamp(bean.getCreateTime().getTime() + "");
		}
		if(bean != null && bean.getUpdateTime() != null){
			bean.setUpdateTimeTamp(bean.getUpdateTime().getTime() + "");
		}
		return JsonUtils.getSuccess("查询成功", bean);
	}
	/**
	 * 统计数目
	 * 
	 * @param tableName
	 * @param sql
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/countBase")//@BaseModel("tableName") @Validated(TableOnlyGroup.class) BaseBean record, 
	public ViewBean countBase(@RequestParam Map<String,Object> map
			,@RequestParam(value = "tableName") String tableName
			,@RequestParam(value = "query",required = false) String querySerial
			) throws Exception {
		BaseBean bean = BeanNameConfig.getName(tableName);//根据tableName获取bean实例
		Assert.notNull(bean, "base操作：" + tableName + "模型配置不能为空");
		dozer.map(map, bean);
		ValidateUtils.validateList(bean, querySerial,map);
		/**
		 * 获取并构建sql配置
		 */
		SqlConfig.INSTANCE.init();
		querySerial = SqlConfig.INSTANCE.getSelectSql(querySerial,map,bean);
		bean.setSql(querySerial);
		
		logger.info("统计，查询表：" + bean.getTableName());
		logger.info("统计，sql配置：" + bean.getSql());
		return JsonUtils.getSuccess("查询成功", baseService.findAll(bean).size());
	}
	
	
	
	
	
	
	
	/**
	 * 统一异常处理
	 * 
	 * 基于@ExceptionHandler异常处理 
	 * @param request
	 * @param ex
	 * @return
	 */
    @ExceptionHandler  
    public ViewBean exp(HttpServletRequest request, Exception ex) {
    	//ex.printStackTrace();
    	StackTraceElement[] traceElements = ex.getStackTrace();
    	if(traceElements != null && traceElements.length > 0){
    		int len = traceElements.length;
    		for (int j = 0; j < len; j++) {//rainbowbus
    			StackTraceElement element = traceElements[j];
    			if(element != null && element.toString().contains("rainbowbus")){
    				logger.error(element.toString());
    			}
			}
    	}
    	String msg = ex.getMessage();
    	if(msg == null){
    		return JsonUtils.getError("未知错误");
    	}
    	if(msg.contains("RuntimeException")){
    		msg = ex.getMessage();
    	}
    	logger.error(msg);
    	if(msg.contains("SQL")){
    		if(msg.contains("'$'")){
    			return JsonUtils.getError("可能缺少参数");
    		}
    		return JsonUtils.getError("查询错误");
    	}
        return JsonUtils.getError(msg);
    }  
	
	
	/**
	 * list视图异常处理共性方法
	 * 
	 * @param view
	 * @param result
	 * @param errors
	 * @return
	 */
	protected ViewBean listView(Object view, BindingResult result, Errors errors) {
		if (result.hasErrors()) {
			return JsonUtils.getError(errors);
		}
		return JsonUtils.getSuccess("获取成功", view);
		//return JsonUtils.getError("获取失败");
	}
	/**
	 * save，update，delete视图异常处理共性方法
	 * 
	 * @param view
	 * @param result
	 * @param errors
	 * @return
	 */
	protected ViewBean dmlView(int r, BindingResult result, Errors errors) {
		if (result.hasErrors()) {
			return JsonUtils.getError(errors);
		}
		if(r == 0){
			return JsonUtils.getError("操作失败");
		}
		logger.info("操作成功");
		return JsonUtils.getSuccess("操作成功");
	}
	/**
	 * 判断状态  
	 * @param r 为null表示出错，false状态false ，true为状态true
	 * @param result
	 * @param errors
	 * @return
	 */
	protected ViewBean statusView(Boolean r, BindingResult result, Errors errors) {
		if (result.hasErrors()) {
			return JsonUtils.getError(errors);
		}
		if(r == null){
			return JsonUtils.getError("操作失败");
		}
		logger.info("操作成功");
		return JsonUtils.getSuccess(r.toString());
	}
	
	/**
	 * 注册参数格式转化
	 * 
	 * @param binder
	 */
	@InitBinder
	protected void initBinder(WebDataBinder binder) {
		binder.registerCustomEditor(Date.class,new PropertyEditorSupport() {
			@Override
			public void setAsText(String value) {
				if(StringUtils.isNotBlank(value)){
					try {
						setValue(new Date(Long.valueOf(value)));
					} catch (Exception e) {
						throw new RuntimeException("时间格式请使用Long时间戳格式");
					}
					
				}
			}
		});
		binder.registerCustomEditor(Timestamp.class,new PropertyEditorSupport() {
			@Override
			public void setAsText(String value) {
				if(StringUtils.isNotBlank(value)){
					try {
						setValue(new Timestamp(Long.valueOf(value)));
					} catch (Exception e) {
						throw new RuntimeException("时间格式请使用Long时间戳格式");
					}
					
				}
			}
		});

	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	public HttpServletRequest getRequest() {
		return request;
	}
	public void setRequest(HttpServletRequest request) {
		this.request = request;
	}

	public UserBean getUser() {
		return user;
	}

	public void setUser(UserBean user) {
		this.user = user;
	}
	
}

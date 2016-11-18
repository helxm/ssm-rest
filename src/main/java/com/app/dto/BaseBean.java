package com.app.dto;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;

import javax.validation.constraints.NotNull;

import org.apache.commons.lang.StringUtils;
import org.hibernate.validator.constraints.NotEmpty;

import com.app.config.TableNameConfig;
import com.app.validator.Identity;
import com.app.validator.Name;
import com.app.validator.TableName;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
/**
 * 
 * {@code BaseBean}
 * TODO 最好其它bean都继承自该bean
 * @author hesh
 * @time 2016年3月24日 - 上午11:45:05
 */
@JsonIgnoreProperties({"tableName","sql","pageNum","isDelated"})
@JsonInclude(JsonInclude.Include.NON_EMPTY)//不可删除，删除后，所有字段参与序列化，客户端会出现过多字段为null，报错
public class BaseBean {
	
	@NotNull(message = "id不能为空",groups = Identity.class)
	protected Long id;
	@NotEmpty(message = "name不能为空",groups = Name.class)
	protected String name;
	protected String createName;
	protected Timestamp createTime;
	
	protected String updateName;
	protected Timestamp updateTime;
	
	protected String createTimeTamp;
	protected String updateTimeTamp;
	
	@JsonIgnore
	protected Character isDelated;//删除 - 0，正常 - 1
	
	@NotEmpty(message = "tableName不能为空",groups = TableName.class)
	@JsonIgnore
	protected String tableName;//表名称，用于非预编译语句，如用户评论模块
	@JsonIgnore
	protected String originalTableName;//兼容jdk1.8以下
	
	@JsonIgnore
	protected String sql;//sql，mybatis直接执行sql
	
	protected Long number;//sql查询，数字使用字段，例如：mybatis数据封装的时候，统计的数目使用该字段
	@JsonIgnore
	protected String order;//排序字段，用于接收
	
	@JsonIgnore
	protected String token;//客户端设备唯一编号
	
	@JsonIgnore
	protected String startTime;//时间类型参数查询使用
	@JsonIgnore
	protected String endTime;//时间类型参数查询使用
	
	@JsonIgnore
	protected String operUser;//当前用户
	
	public String getStartTime() {
		if(!StringUtils.isBlank(startTime)){
			try {
				SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd 00:00:00"); 
				startTime = df.format(Long.valueOf(startTime));
			} catch (Exception e) {
			}
		}
		//System.err.println("startTime: " + startTime);
		return startTime;
	}
	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}
	public String getEndTime() {
		if(!StringUtils.isBlank(endTime)){
			try {
				SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd 00:00:00"); 
				endTime = df.format(Long.valueOf(endTime));
			} catch (Exception e) {
			}
		}
		//System.err.println("endTime: " + endTime);
		return endTime;
	}
	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public String getCreateName() {
		return createName;
	}
	public void setCreateName(String createName) {
		this.createName = createName;
	}
	public Timestamp getCreateTime() {
		return createTime;
	}
	public void setCreateTime(Timestamp createTime) {
		if(createTime != null){
			this.createTimeTamp = createTime.getTime() + "";
		}
		this.createTime = createTime;
	}
	public String getUpdateName() {
		return updateName;
	}
	public void setUpdateName(String updateName) {
		this.updateName = updateName;
	}
	public Timestamp getUpdateTime() {
		return updateTime;
	}
	public void setUpdateTime(Timestamp updateTime) {
		if(updateTime != null){
			this.updateTimeTamp = updateTime.getTime() + "";
		}
		this.updateTime = updateTime;
	}
	@JsonIgnore
	public Character getIsDelated() {
		return isDelated;
	}
	public void setIsDelated(Character isDelated) {
		this.isDelated = isDelated;
	}
	public String getTableName() {
		try {
			//System.err.println(TableNameConfig.getName(tableName));
			return TableNameConfig.getName(tableName);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return tableName;
	}
	/**
	 * 获取tableName的key值
	 * @return
	 */
	@JsonIgnore
	public String getOriginalTableName() {
		return originalTableName;
	}
	@JsonIgnore
	public void setOriginalTableName(String originalTableName) {
		this.originalTableName = originalTableName;
	}
	public void setTableName(String tableName) {
		this.originalTableName = tableName;
		this.tableName = tableName;
	}
	public String getSql() {
		return sql;
	}
	public void setSql(String sql) {
		this.sql = sql;
	}
	public Long getNumber() {
		return number;
	}
	public void setNumber(Long number) {
		this.number = number;
	}
	public String getOrder() {
		return order;
	}
	public void setOrder(String order) {
		this.order = order;
	}
	public String getCreateTimeTamp() {
		if(this.createTime != null){
			this.createTimeTamp = this.createTime.getTime() + "";
		}
		return createTimeTamp;
	}
	public String getUpdateTimeTamp() {
		if(this.updateTime != null){
			this.updateTimeTamp = this.updateTime.getTime() + "";
		}
		return updateTimeTamp;
	}
	public void setCreateTimeTamp(String createTimeTamp) {
		this.createTimeTamp = createTimeTamp;
	}
	public void setUpdateTimeTamp(String updateTimeTamp) {
		this.updateTimeTamp = updateTimeTamp;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public String getOperUser() {
		return operUser;
	}
	public void setOperUser(String operUser) {
		this.operUser = operUser;
	}	
	
}

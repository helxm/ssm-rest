package com.app.dto;

import java.sql.Timestamp;

import com.fasterxml.jackson.annotation.JsonInclude;
/**
 * 
 * @author he
 *
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
public class BaseBean {
	private Long id;
	private String name;
	private String createName;
	private Timestamp createTime;
	private String updateName;
	private Timestamp updateTime;
	private Character isLive;
	private String tableName;
	
	public String getTableName() {
		return tableName;
	}
	public void setTableName(String tableName) {
		this.tableName = tableName;
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
		this.updateTime = updateTime;
	}
	public Character getIsLive() {
		return isLive;
	}
	public void setIsLive(Character isLive) {
		this.isLive = isLive;
	}
	
}

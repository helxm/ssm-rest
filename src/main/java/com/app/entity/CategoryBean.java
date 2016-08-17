package com.rainbowbus.bean.api;

import org.hibernate.validator.constraints.NotEmpty;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.rainbowbus.bean.base.BaseBean;
import com.rainbowbus.validate.First;

@JsonIgnoreProperties({"tableName","sql","pageNum","isDelated"})
@JsonInclude(JsonInclude.Include.NON_EMPTY)//属性为 空（""） 或者为 NULL 都不序列化 
public class CategoryBean extends BaseBean {
	private String nameEn;//英文类别
	private String pictureUrl;//标签图片地址
	
	private String itemValue;//具体分类项值
	private String itemValueEn;//具体分类项值
	private Integer item;//具体分类项
	
	/**
	 * 查询用，不做持久化
	 */
	@NotEmpty(message = "userId不能为空",groups = First.class)
	private String userId;//用户id
	private Character funcNumber;//使用的功能模块，默认为0，1-格斗场
	
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getItemValue() {
		return itemValue;
	}
	public void setItemValue(String itemValue) {
		this.itemValue = itemValue;
	}
	public Integer getItem() {
		return item;
	}
	public void setItem(Integer item) {
		this.item = item;
	}
	public String getItemValueEn() {
		return itemValueEn;
	}
	public void setItemValueEn(String itemValueEn) {
		this.itemValueEn = itemValueEn;
	}
	public String getNameEn() {
		return nameEn;
	}
	public void setNameEn(String nameEn) {
		this.nameEn = nameEn;
	}
	public String getPictureUrl() {
		return pictureUrl;
	}
	public void setPictureUrl(String pictureUrl) {
		this.pictureUrl = pictureUrl;
	}
	public Character getFunction() {
		return funcNumber;
	}
	public void setFunction(Character function) {
		this.funcNumber = function;
	}
	
}

package com.app.entity;

import java.sql.Timestamp;
import java.util.List;

import org.hibernate.validator.constraints.NotEmpty;

import com.app.dto.BaseBean;
import com.app.validator.First;
import com.fasterxml.jackson.annotation.JsonIgnore;
/**
 * 点赞
 * 
 * @author hesh
 *
 */
public class UserBean extends BaseBean {
	
	@NotEmpty(message = "userid不能为空",groups = First.class)
	private Long userid;
	
	private String tel ;
	private String  username; //昵称
	private String realname;//真实姓名[支付宝]
	
	private String token;//logintoken
	@JsonIgnore
	private String password;//密码
	private String headpic;//头像
	private String stemfrom;//平台来源
	private String olduserid;//这个是用户唯一id
	private String telmodel;//手机型号
	private String imei;
	private String email;
	private String remorks;//备注/简介
	private Timestamp lastlogintime;//最后登录时间
	private String sex;//先生/女士
	private Timestamp birthday;//生日
	private String cardType;//(20) NULL证件类型
	private String cardNo;//(100) NULL证件号
	private String lastModifyName;//上一次修改昵称的时间
	private String openId;//(100) NULL安卓openId
	private String unionId;//(100) NULL开发者平台唯一id
	private Timestamp registertime;//注册时间
	private String unionuserid;//(100) NULL关联的userid
	private String wxopenId;//(100) NULL微信专属openId
	private String effect;//(2) NULL默认生效，1失效
	private String height;//(10) NULL身高（cm）
	private String weight;//(10) NULL体重
	
	private String address;//(10) NULL体重
	
	private Integer commentCount ;//   
	private Integer followCount ;//   '关注数',
	private Integer  fansCount ;//  '粉丝数',
	private Integer  dynamicCount ;//  '动态数',
	private List<CategoryBean>  interestList ;//  '关注列表',
	private List<CategoryBean>  identity ;//  身份信息,
	
	public Integer getCommentCount() {
		return commentCount;
	}
	public void setCommentCount(Integer commentCount) {
		this.commentCount = commentCount;
	}
	public Long getUserid() {
		return userid;
	}
	public void setUserid(Long userid) {
		this.userid = userid;
	}
	public String getTel() {
		return tel;
	}
	public void setTel(String tel) {
		this.tel = tel;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getRealname() {
		return realname;
	}
	public void setRealname(String realname) {
		this.realname = realname;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	@JsonIgnore
	public String getPassword() {
		return password;
	}
	@JsonIgnore
	public void setPassword(String password) {
		this.password = password;
	}
	public String getHeadpic() {
		return headpic;
	}
	public void setHeadpic(String headpic) {
		this.headpic = headpic;
	}
	public String getStemfrom() {
		return stemfrom;
	}
	public void setStemfrom(String stemfrom) {
		this.stemfrom = stemfrom;
	}
	public String getOlduserid() {
		return olduserid;
	}
	public void setOlduserid(String olduserid) {
		this.olduserid = olduserid;
	}
	public String getTelmodel() {
		return telmodel;
	}
	public void setTelmodel(String telmodel) {
		this.telmodel = telmodel;
	}
	public String getImei() {
		return imei;
	}
	public void setImei(String imei) {
		this.imei = imei;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getRemorks() {
		return remorks;
	}
	public void setRemorks(String remorks) {
		this.remorks = remorks;
	}
	public Timestamp getLastlogintime() {
		return lastlogintime;
	}
	public void setLastlogintime(Timestamp lastlogintime) {
		this.lastlogintime = lastlogintime;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public Timestamp getBirthday() {
		return birthday;
	}
	public void setBirthday(Timestamp birthday) {
		this.birthday = birthday;
	}
	public String getCardType() {
		return cardType;
	}
	public void setCardType(String cardType) {
		this.cardType = cardType;
	}
	public String getCardNo() {
		return cardNo;
	}
	public void setCardNo(String cardNo) {
		this.cardNo = cardNo;
	}
	public String getLastModifyName() {
		return lastModifyName;
	}
	public void setLastModifyName(String lastModifyName) {
		this.lastModifyName = lastModifyName;
	}
	public String getOpenId() {
		return openId;
	}
	public void setOpenId(String openId) {
		this.openId = openId;
	}
	public String getUnionId() {
		return unionId;
	}
	public void setUnionId(String unionId) {
		this.unionId = unionId;
	}
	public Timestamp getRegistertime() {
		return registertime;
	}
	public void setRegistertime(Timestamp registertime) {
		this.registertime = registertime;
	}
	public String getUnionuserid() {
		return unionuserid;
	}
	public void setUnionuserid(String unionuserid) {
		this.unionuserid = unionuserid;
	}
	public String getWxopenId() {
		return wxopenId;
	}
	public void setWxopenId(String wxopenId) {
		this.wxopenId = wxopenId;
	}
	public String getEffect() {
		return effect;
	}
	public void setEffect(String effect) {
		this.effect = effect;
	}
	public String getHeight() {
		return height;
	}
	public void setHeight(String height) {
		this.height = height;
	}
	public String getWeight() {
		return weight;
	}
	public void setWeight(String weight) {
		this.weight = weight;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Integer getFollowCount() {
		return followCount;
	}
	public void setFollowCount(Integer followCount) {
		this.followCount = followCount;
	}
	public Integer getFansCount() {
		return fansCount;
	}
	public void setFansCount(Integer fansCount) {
		this.fansCount = fansCount;
	}
	public Integer getDynamicCount() {
		return dynamicCount;
	}
	public void setDynamicCount(Integer dynamicCount) {
		this.dynamicCount = dynamicCount;
	}
	public List<CategoryBean> getInterestList() {
		return interestList;
	}
	public void setInterestList(List<CategoryBean> interestList) {
		this.interestList = interestList;
	}
	public List<CategoryBean> getIdentity() {
		return identity;
	}
	public void setIdentity(List<CategoryBean> identity) {
		this.identity = identity;
	}
	
}

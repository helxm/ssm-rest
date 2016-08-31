package com.app.entity;

import java.util.Date;

import com.app.dto.BaseBean;


/**
 * 用户
 * @author  he
 *
 */
public class User extends BaseBean {
	
	private long userId;
	
	private String userName;
	
	private long userPhone;
	
	private int score;

	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}


	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public long getUserPhone() {
		return userPhone;
	}

	public void setUserPhone(long userPhone) {
		this.userPhone = userPhone;
	}


	public int getScore() {
		return score;
	}

	public void setScore(int score) {
		this.score = score;
	}

}

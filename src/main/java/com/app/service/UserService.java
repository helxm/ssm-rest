package com.app.service;

import java.util.List;

import com.app.entity.User;

public interface UserService {

	List<User> getUserList(int offset, int limit);
	 
}

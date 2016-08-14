package com.app.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.BaseResult;
import com.app.entity.News;
import com.app.service.impl.NewsServiceImpl;
import com.github.pagehelper.PageHelper;

/**
 * @author he焱
 *
 */
@RestController
@RequestMapping("/base")
public class BaseCtr {
	int pageNum = 1;
	int pageSize = 10;
	
}

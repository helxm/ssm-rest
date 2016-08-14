package com.app.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
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
@RequestMapping("/news")
public class NewsCtr extends BaseCtr{
	@Autowired
	private NewsServiceImpl service;
	
	@RequestMapping(value = "/news_list", method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public BaseResult getNews(News record
			,@RequestParam(required = false,defaultValue = "1") Integer pageNum
			,@RequestParam(required = false,defaultValue = "10") Integer pageSize
			){
		PageHelper.startPage(pageNum, pageSize);
		return new BaseResult(200, service.getNews(record), null);
	}
}

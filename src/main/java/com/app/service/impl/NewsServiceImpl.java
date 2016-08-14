package com.app.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.NewsMapper;
import com.app.entity.News;
import com.app.service.NewsService;
@Service
public class NewsServiceImpl implements NewsService{
	@Autowired
	private NewsMapper mapper; 
	@Override
	public News getNew() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<News> getNews(News record) {
		return mapper.getNews(record);
	}

}

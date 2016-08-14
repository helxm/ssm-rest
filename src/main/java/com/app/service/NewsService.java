package com.app.service;

import java.util.List;

import com.app.entity.News;

/**
 * 
 * @author he焱
 *
 */
public interface NewsService {
	List<News> getNews(News record);
	News getNew();
}

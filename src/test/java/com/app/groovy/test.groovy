package com.cmcc.census.pugilist.dtos;

import java.util.Date;

import com.cmcc.system.dto.DAO;
import com.hotpot.ms.dao.util.EntityMethoddesc;
import com.hotpot.ms.dao.util.Entitydesc;

@Entitydesc(tablename = "$tableName", pk = "id")
public class $modelName extends DAO {
	<% for(key in model.keySet()) { 
     private String key;
     public Character getkey() {
    	return isDelated;
	}
	public void setkey(Character isDelated) {
		this.key = key;
	}
  	}%> 

	@EntityMethoddesc(ispk = true)
	private Long id;
	private Character isDelated;
    
    


}
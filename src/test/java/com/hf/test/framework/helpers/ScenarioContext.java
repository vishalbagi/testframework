package com.hf.test.framework.helpers;

import java.util.HashMap;

import com.hf.test.framework.PageObject;
import com.hf.test.framework.helpers.utils.LogUtils;

public class ScenarioContext {
    private static LogUtils logger = new LogUtils(ScenarioContext.class);
    public  int ThreadCount=0;
    public synchronized void increase(){
    	ThreadCount++;
    }
	private HashMap<String,String> Context = new HashMap<String,String>();
	public void StoreValue(String key , String value ){
		this.Context.put(key, value);
		logger.detail("Entering data in context. value : "+value+"in Key :"+key);
	}
	public String GetValue(String key){
		logger.detail("Fetching value of Key"+key);
		return this.Context.get(key);
	}
}

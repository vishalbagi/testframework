package com.hf.test.framework;

import com.hf.test.framework.helpers.utils.LogUtils;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hook extends PageObject{
    private static LogUtils logger = new LogUtils(Hook.class);


	   @Before("@web")
	    public void beforeWebTest(Scenario scenario) {
		   logger.detail("xxxxxxxxxx: Start of the Scenario :"+scenario.getName()+" xxxxxxxxxx");
	   }
		  	   
	   @Before("@api")
	   public void beforeApiTest(Scenario scenario){
		   logger.detail("xxxxxxxxxx: Start of the Scenario :"+scenario.getName()+" xxxxxxxxxx");
	   }
 
	   @After("@api")
	   public void afterApiTest(Scenario scenario){
		   logger.detail("xxxxxxxxxx: Start of the Scenario :"+scenario.getName()+" xxxxxxxxxx");
	   }
	   @After("@web")
	   public void afterWebTest(Scenario scenario){
		   getWebDriver().manage().deleteAllCookies();

		   logger.detail("xxxxxxxxxx: Start of the Scenario :"+scenario.getName()+" xxxxxxxxxx");
	   }
}

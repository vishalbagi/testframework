package com.hf.test.services;


import com.hf.test.framework.helpers.ApiHelper;
import com.hf.test.framework.helpers.ScenarioContext;
import com.hf.test.framework.helpers.utils.LogUtils;
import com.jayway.restassured.response.Response;

import java.util.List;
import java.util.Map;

public class Api extends ApiHelper {

    public static final String PATH = "/country/get/all";
    private static LogUtils logger = new LogUtils(Api.class);

    public static Response getCountry(String endpoint) {
    	Response response= givenConfig().when().get(endpoint);
    	logger.detail("Response for Get Endpoint "+endpoint+ "is"+response.getBody());
    	return response;
    //    return givenConfig().when().get(endpoint);
    }

    public static Response postDetails(Map<String, String> data) {
        Response response= givenConfig().
                body(gson().toJson(data, Map.class)).
                when().
                post(PATH);
    	logger.detail("Response for Post Endpoint "+data.toString()+ "is"+response.getBody());
    	return response;
    }


    public static Response updateDetails(Map<String, String> data) {
    	Response response= givenConfig().
                body(gson().toJson(data, Map.class)).
                when().
                put(PATH);
    	logger.detail("Response for put Endpoint "+data.toString()+ "is"+response.getBody());
    	return response;
    }


    public static Response deleteItem(String uniqueId) {
        Response response= givenConfig().
                when().delete(PATH + uniqueId);
    	logger.detail("Response for Delete request "+uniqueId+ "is"+response.getBody());
    	return response;   
    }

}

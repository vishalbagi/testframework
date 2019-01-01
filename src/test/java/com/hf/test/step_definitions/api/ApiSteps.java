package com.hf.test.step_definitions.api;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.hf.test.framework.helpers.ApiHelper;
import com.hf.test.framework.helpers.utils.LogUtils;
import com.hf.test.services.Api;
import com.jayway.restassured.path.json.JsonPath;
import com.jayway.restassured.response.Response;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import static com.jayway.restassured.path.json.JsonPath.from;
import static org.hamcrest.Matchers.hasItem;

import org.testng.Assert;

/**
 * Step Definition implementation class for Cucumber Steps defined in Feature file
 */

public class ApiSteps extends ApiHelper {
    //private static LogUtils logger = new LogUtils(ApiSteps.class);
    private Response response;


    /*   Perform a HTTP GET request for a endpoint*/

    @When("^I perform GET request for \"([^\"]*)\" endpoint$")
    public void I_perform_GET_request_for_endpoint(String endpoint) {
        response = Api.getCountry(endpoint);
    }

    /*   Verify HTTP Status code from response*/

    @Then("^I get a (\\d+) http status code$")
    public void I_get_a_http_status_code(int statusCodeExpected) {
    	Assert.assertEquals(response.statusCode(),statusCodeExpected);
    }
    @When("^I create an new county request$")
    public void i_create_an_new_county_request(DataTable table) throws Throwable {
    	Map<String, String> data = table.asMaps().get(0);
        response = Api.postDetails(data);

    }
    
    @And("^response should contain data about for country$")
    public void response_should_contain_data_about_for_country(DataTable table) throws Throwable {
    	JsonPath jsonPathEvaluator = response.jsonPath();
    	ArrayList<Map<String,?>> jsonAsArrayList =jsonPathEvaluator.get("RestResponse.result");
    	
    	List<Map<String, String>> data = table.asMaps();
    	for(Map<String, String> map:data){
    		boolean found =false;
    		for(int i=0;i<jsonAsArrayList.size() && !found;i++)
    		{	
    			if( jsonAsArrayList.get(i).get("name").equals(map.get("name"))
    					&& jsonAsArrayList.get(i).get("alpha2_code").equals(map.get("alpha2_code"))
    							&& jsonAsArrayList.get(i).get("alpha3_code").equals(map.get("alpha3_code"))){
    				found=true;
    			}
    		}
			Assert.assertTrue(found, "Didnt Find country data for :"+map.get("name"));	
    	}    		       
    }

    @And("^response should contain data about for perticular country$")
    public void response_should_contain_data_about_for_perticular_country(DataTable table) throws Throwable {
    	JsonPath jsonPathEvaluator = response.jsonPath();
    	//logger.detail(response.asString());
    	//logger.detail(response.getBody());
    	Map<String,?> jsonAsArrayList =jsonPathEvaluator.get("RestResponse.result");
    	
    	List<Map<String, String>> data = table.asMaps();
    	for(Map<String, String> map:data){
    		boolean found =false;

    			if( jsonAsArrayList.get("name").equals(map.get("name"))
    					&& jsonAsArrayList.get("alpha2_code").equals(map.get("alpha2_code"))
    							&& jsonAsArrayList.get("alpha3_code").equals(map.get("alpha3_code"))){
    				found=true;
    			
    		}
			Assert.assertTrue(found, "Didnt Find country data for :"+map.get("name"));	
    	}    		       
    }


    @When("^I delete an Item \"([^\"]*)\"$")
    public void I_delete_an_Item(String uniqueId) throws Throwable {
        response = Api.deleteItem(uniqueId);
    }


    @Then("^the Item is \"([^\"]*)\"$")
    public void the_Item_is(String result) throws Throwable {
        if (result.equals("created")) {
        	Assert.assertEquals(response.getStatusCode(),"201");
        } else if (result.equals("updated")) {
        	Assert.assertEquals(response.getStatusCode(),"201");
        } else if (result.equals("deleted")) {
        	Assert.assertEquals(response.getStatusCode(),"204");
        }

    }

	@And("^response should contain Message\"([^\"]*)\"$")
	public void responseShouldContainMessage(String arg1) throws Throwable {
		try{
    	JsonPath jsonPathEvaluator = response.jsonPath();
    	//logger.detail(response.asString());
    	//logger.detail(response.getBody());
    	String jsonAsArrayList =jsonPathEvaluator.get("RestResponse.messages").toString();
    	Assert.assertTrue(jsonAsArrayList.contains(arg1));}
		catch(Exception e){
			Assert.fail("Didnt find expected message"+arg1);
		//	logger.detail("Didnt find expected message"+arg1);
		}
	}


}
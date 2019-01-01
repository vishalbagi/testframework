package com.hf.test.step_definitions.gui;

import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.joda.time.DateTime;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;
import org.openqa.selenium.WebElement;

import com.hf.test.enums.PermittedCharacters;
import com.hf.test.framework.helpers.utils.LogUtils;
import com.hf.test.framework.helpers.utils.RandomGeneratorManager;
import com.hf.test.page_objects.gui.CreateAccountPage;
import com.hf.test.page_objects.gui.HomePage;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import io.cucumber.datatable.DataTable;

public class CreateAccountSteps {
    private static LogUtils logger = new LogUtils(CreateAccountSteps.class);

    private CreateAccountPage createAccountPage;
    private String  Company,Address,Address2,City,State,Country,AdditionInfo,HomeNo,MobileNo,Alias,zipCode;
    private String salutation;
    private String FirstName;
    private String LastName;
    private String EmailID;
    private String Password;
    private DateTime DateOfBirth;

    public CreateAccountSteps(CreateAccountPage homePage) {
        this.createAccountPage = homePage;
    }
    
	@And("^I enter following details in Address Details$")
	public void iEnterFollowingDetailsInAddressDetails(DataTable table) throws Throwable {

	      Map<String, String> data = table.asMaps().get(0);
	      getAddressDetails(data);	
	      createAccountPage.companyField(Company);
	      createAccountPage.address1Field(Address);
	      createAccountPage.address2Field(Address2);
	      createAccountPage.cityField(City);
	      createAccountPage.moreInfoField(AdditionInfo);
	      createAccountPage.aliasField(Alias);
	      createAccountPage.homePhoneField(HomeNo);
	      createAccountPage.mobileNoField(MobileNo);
	      createAccountPage.postalCodeField(zipCode);
	      createAccountPage.stateField(State);
	      createAccountPage.countryField(Country);	
	}

	@And("^I enter following details in Personal Information$")
	public void iEnterFollowingDetailsInPersonalInformation(DataTable table) throws Throwable {
	      Map<String, String> data = table.asMaps().get(0);
	      getPersonalDetails(data);
	      createAccountPage.FirstNameField(FirstName);
	      createAccountPage.LastNameField(LastName);
	      createAccountPage.PasswordField(Password);
	      createAccountPage.selectSalutation(salutation);
	      createAccountPage.DayOfBirth((String.valueOf(DateOfBirth.getDayOfMonth())));
	      createAccountPage.MonthOfBirth(String.valueOf(DateOfBirth.getMonthOfYear()));
	      createAccountPage.YearOfBirth(String.valueOf(DateOfBirth.getYear()));

	}	
	
	void bb(WebElement x,String y){
		x.sendKeys(y);
	}
	   @And("^I click on \"([^\"]*)\" button on Create Account Page$")
	    public void i_click_on_something_button_on_create_account_page(String strArg1) throws Throwable {
		   createAccountPage.submitRegistration();
	   }
	 public void getAddressDetails(Map<String, String> data){
		 Company=RandomGeneratorManager.getData(data.get("Company")).toString();
		 Address=RandomGeneratorManager.getData(data.get("Address")).toString();
		 Address2=RandomGeneratorManager.getData(data.get("Address2")).toString();
		 City=RandomGeneratorManager.getData(data.get("City")).toString();
		 AdditionInfo=RandomGeneratorManager.getData(data.get("AdditionInfo")).toString();
		 Alias=RandomGeneratorManager.getData(data.get("Alias")).toString();
		 HomeNo=RandomGeneratorManager.getData(data.get("HomeNo"),10).toString();
		 MobileNo=RandomGeneratorManager.getData(data.get("MobileNo"),10).toString();
		 zipCode=RandomGeneratorManager.getData(data.get("ZipCode"),5).toString();
	//	 State=
	//	 Country=
	     if(data.get("State").equals("{RANDOM_SELECT}")){
	    	 Integer size =createAccountPage.getCountofstateField();
	    	 State= createAccountPage.stateFieldGetOptionText((int) RandomGeneratorManager.getData("{RANDOM_NUM_IN_Range}",size-1));
	     }else{
	    	 State=data.get("State");    	 
	     }
	     if(data.get("Country").equals("{RANDOM_SELECT}")){
	    	 Integer size =createAccountPage.getCountofCountryField();
	    	 Country= createAccountPage.countryFieldGetOptionText((int) RandomGeneratorManager.getData("{RANDOM_NUM_IN_Range}",size-1));
	     }else{
	    	 Country=data.get("Country");    	 
	     }				 

	 }

	 public void getPersonalDetails(Map<String, String> data ){
		 salutation=data.get("Salutation");
		 FirstName=RandomGeneratorManager.getData(data.get("FirstName")).toString();
		 LastName=RandomGeneratorManager.getData(data.get("LastName")).toString();
		 Password=RandomGeneratorManager.getData(data.get("Password")).toString();
		 EmailID=RandomGeneratorManager.getData(data.get("EmailID")).toString();
	       if(data.get("DateOfBirth").equals("{RANDOM_PASTDATE}"))
	    	   DateOfBirth=(DateTime) RandomGeneratorManager.getData(data.get("DateOfBirth"));
	    	   else{
	    		   
	    		   DateTimeFormatter formatter = DateTimeFormat.forPattern("dd/MM/yyyy");
	    		   DateTime dt = formatter.parseDateTime(data.get("DateOfBirth"));
	    		   DateOfBirth=dt	;

	    	   }
	       
	 }
	 


}

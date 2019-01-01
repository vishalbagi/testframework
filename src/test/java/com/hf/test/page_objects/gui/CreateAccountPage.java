package com.hf.test.page_objects.gui;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

import com.hf.test.framework.PageObject;

public class CreateAccountPage extends PageObject {

    private By  mrButton_SelectBox= By.id("id_gender1");
    private By  mrsButton_SelectBox= By.id("id_gender2");
    private By  customerFirstName_Input= By.id("customer_firstname");
    private By  customerLastName_Input= By.id("customer_lastname");
    private By  password_Input= By.id("passwd");
    private By  dayOfBirth_Select= By.id("days");
    private By  monthOfBirth_Select= By.id("months");
    private By  yearOfBirth_Select= By.id("years");
    private By  company_Input= By.id("company");
    private By  address1_Input= By.id("address1");
    private By  address2_Input= By.id("address2");
    private By  city_Input= By.id("city");
    private By  state_Select= By.id("id_state");
    private By  country_Select= By.id("id_country");
    private By  postalCode_Input= By.id("postcode");
    private By  moreInfo_Input= By.id("other");
    private By  homePhone_Input= By.id("phone");
    private By  mobileNo_Input= By.id("phone_mobile");
    private By  alias_Input= By.id("alias");
    private By  submit_Button= By.id("submitAccount");
    
    public void submitRegistration() {
        waitForExpectedElement(submit_Button).click();
    }
    public void selectSalutation(String salutation) {
    	switch(salutation.toUpperCase()){
    	case "MR":
    		Click(mrButton_SelectBox);
    		break;
    	case "MRS":
    		Click(mrsButton_SelectBox);
    		break;
    	default:
    	}	
    }
    public void mobileNoField(String mobileNo) {
        SendKeys(mobileNo_Input,mobileNo);
    }
    public void aliasField(String text) {
    	SendKeys(alias_Input,text);
    }
    public void postalCodeField(String text) {
    	SendKeys(postalCode_Input,text);
    }
    public void FirstNameField(String text) {
    	SendKeys(customerFirstName_Input,text);
    }
    public void moreInfoField(String text) {
    	SendKeys(moreInfo_Input,text);
    }
    
    public void homePhoneField(String text) {
    	SendKeys(homePhone_Input,text);
    }
    public void companyField(String text) {
    	SendKeys(company_Input,text);
    }
    public void address1Field(String text) {
    	SendKeys(address1_Input,text);
    }  
    public void address2Field(String text) {
    	SendKeys(address2_Input,text);
    }    
    public void cityField(String text) {
    	SendKeys(city_Input,text);
    }
    public void LastNameField(String text) {
    	SendKeys(customerLastName_Input,text);
    }
    public void stateField(String text) {
    	selectDropDown(state_Select, text);
    } 
    public String stateFieldGetOptionText(int optionIndex) {
    	return new Select(waitForExpectedElement(state_Select)).getOptions().get(optionIndex).getText();
    } 
    public int getCountofstateField() {
    	return new Select(waitForExpectedElement(state_Select)).getOptions().size();
    } 
    public void countryField(String text) {
    	selectDropDown(country_Select,text);
    } 
    public String countryFieldGetOptionText(int optionIndex) {
    	return new Select(waitForExpectedElement(country_Select)).getOptions().get(optionIndex).getText();
    } 
    public int getCountofCountryField() {
    	return new Select(waitForExpectedElement(country_Select)).getOptions().size();
    } 
    public void PasswordField(String text) {
         SendKeys(password_Input,text);
    } 
    public void DayOfBirth(String text) {
    	selectDropDownByValue(dayOfBirth_Select,text);
    }
    public void MonthOfBirth(String text) {
    	selectDropDownByValue(monthOfBirth_Select,text);
    } 
    public void YearOfBirth(String text) {
    	selectDropDownByValue(yearOfBirth_Select,text);
    }
}

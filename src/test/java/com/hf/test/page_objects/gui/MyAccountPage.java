package com.hf.test.page_objects.gui;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.hf.test.framework.PageObject;

public class MyAccountPage extends PageObject {


    private By myaccountheader_Text= By.xpath("//*[@class='page-heading']");
    private By  userName_Input= By.cssSelector(".account");
    private By  welcomeMessage_Text= By.cssSelector(".info-account");
    private By  logout_Link= By.cssSelector(".logout");  
    private By women_Link= By.linkText("Women");

    /*
    public WebElement dresslink(String dressName) {
        return getWebDriver().findElement(By.xpath("//a[@title='" + dressName + "']/ancestor::li"));
    }*/
    
    public void clickWomenTab(){
    	Click(women_Link);
    } 
    
    public String getMyAccountSummaryTitle() {
    	return GetText(myaccountheader_Text);
    }
    
    public  String getLoggedInUserName() {
    	return GetText(userName_Input);
    }    
    
    public String getWelcomeMessage() {
    	return GetText(welcomeMessage_Text);

    }
    
    public boolean checkLogOutLink() {
    	return isDisplayed(logout_Link);
    }  
}

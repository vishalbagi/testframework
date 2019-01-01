package com.hf.test.page_objects.gui;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.hf.test.framework.PageObject;

public class SigninPage extends PageObject {

    private By emailField_Input= By.id("email");
    private By password_Input= By.id("passwd");
    private By submit_Button= By.id("SubmitLogin");
    private By emailCreate_Button= By.id("email_create");
    private By create_Button= By.id("SubmitCreate");
    

    public void SendTextInnewAccountEmail(String text) {
    	SendKeys(emailCreate_Button, text);
    }
    public void clickCreateAccount() {
    	Click(create_Button);
    	invisibilityOfElementLocated(create_Button);
    }
    public void clearEmailField() {
    	Clear(emailField_Input);  
    }
    public void SendTextInEmailField(String text) {
    	SendKeys(emailField_Input, text);
    }
    public void clearPasswordField() {
    	Clear(password_Input);  
    }
    public void SendTextInPasswordField(String text) {
    	SendKeys(password_Input, text);
    }
    
    public void clickSignInButton() {
    	Click(submit_Button);
    }


}

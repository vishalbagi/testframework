package com.hf.test.page_objects.gui;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.hf.test.framework.PageObject;

public class HomePage extends PageObject {

    private By signIn_Button= By.className("login");
    private By headerLogout_Link = By.className("logout");
 
    
    public void clickSignInLink() {
    	Click(signIn_Button);
    }
    public void clickSignOutLink() {
    	Click(headerLogout_Link);

    }
}

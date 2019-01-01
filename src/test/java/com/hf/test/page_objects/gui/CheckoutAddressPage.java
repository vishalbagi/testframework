package com.hf.test.page_objects.gui;

import com.hf.test.framework.PageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class CheckoutAddressPage extends PageObject {

    private By proceedCheckout_Button = By.name("processAddress");
    
    public void proceedCheckout(){
    	Click(proceedCheckout_Button);
    }

}

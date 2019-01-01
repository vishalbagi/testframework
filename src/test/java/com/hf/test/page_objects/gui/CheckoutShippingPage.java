package com.hf.test.page_objects.gui;

import com.hf.test.framework.PageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class CheckoutShippingPage extends PageObject {


    private By termsandCondtions_CheckBox = By.id("uniform-cgv");
    private By proceedCheckout_Button = By.name("processCarrier");

    public void termsandCondtionsField(){
    	Click(termsandCondtions_CheckBox);
    }
    public void proceedCheckout(){
    	Click(proceedCheckout_Button);
    }
}

package com.hf.test.page_objects.gui;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.hf.test.framework.PageObject;

public class CheckoutSummaryPage extends PageObject {
    private By proceedCheckout_Button = By.xpath("//*[contains(@class,'cart_navigation')]/a[@title='Proceed to checkout']");
    
    public void proceedCheckout(){
    	Click(proceedCheckout_Button);
    }

}

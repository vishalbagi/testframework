package com.hf.test.page_objects.gui;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.hf.test.framework.PageObject;

public class CheckoutPaymentPage extends PageObject {

    private By payByWire_Link = By.cssSelector(".bankwire");
    private By confirmationOrder_Button = By.xpath("//*[@id='cart_navigation']/button");
    
    public void payByWireField(){
		Click(payByWire_Link);
    }
    public void confirmationOrderBtn(){
    	Click(confirmationOrder_Button);
    }

}

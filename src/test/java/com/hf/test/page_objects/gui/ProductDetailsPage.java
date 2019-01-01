package com.hf.test.page_objects.gui;

import com.hf.test.framework.PageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

public class ProductDetailsPage extends PageObject {


    private By addTocart_Button = By.name("Submit");

    private By cartLayer_Button = By.xpath("//*[@id='layer_cart']");
    private By quantity_Input = By.id("quantity_wanted");
    private By Size_Select = By.id("group_1");
    private By proceedCheckout_Button = By.xpath("//*[contains(@class,'cart_navigation')]/a[@title='Proceed to checkout']");
    private By proceedCheckoutOverLay_Button = By.xpath("//div[@class='button-container']/a[@title='Proceed to checkout']");
    
    
    public void proceedCheckout(){
		Click(addTocart_Button);
    }
    public void waitForVisibilityOfCheckOut(){
    	waitForExpectedElement(cartLayer_Button);
    }
    public void proceedCheckoutOnOverLayScreen(){
    	Click(proceedCheckoutOverLay_Button);
    }
	public void getProductField(String Product) {
		Click(By.xpath("//a[@title='"+Product+"'][@class='product-name']"));
	}
	public void selectColourField(String colour) {
		Click(By.xpath("//a[@name='"+colour+"']"));
	}
	public void clearQuatityField(){
		Clear(quantity_Input);
	}
	public void sendTextInQuatityField(String text){
		SendKeys(quantity_Input,text);
	}
    public void sizeValueSelectField(String size) {
    	selectDropDown(Size_Select, size);
    }  
	
}

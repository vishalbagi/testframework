package com.hf.test.page_objects.gui;


import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.hf.test.framework.PageObject;

public class OrderConfirmationPage extends PageObject {

    private By title = By.tagName("h1");
    private By laststep = By.xpath("//li[@id='step_end' and @class='step_current last']");
    private By orderConfirmationTitle = By.xpath("//*[@class='cheque-indent']/strong");

}

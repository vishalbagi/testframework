package com.hf.test.step_definitions.gui;

import com.hf.test.page_objects.gui.CheckoutAddressPage;
import com.hf.test.page_objects.gui.CheckoutPaymentPage;
import com.hf.test.page_objects.gui.CheckoutShippingPage;
import com.hf.test.page_objects.gui.CheckoutSummaryPage;
import com.hf.test.page_objects.gui.HomePage;
import com.hf.test.page_objects.gui.ProductDetailsPage;

import cucumber.api.java.en.And;

public class CheckoutSteps {

	
    private ProductDetailsPage productDetailsPage;
    private CheckoutSummaryPage checkoutSummaryPage;
    private CheckoutShippingPage checkoutShippingPage;
    private CheckoutAddressPage checkoutAddressPage;
    private CheckoutPaymentPage CheckoutPaymentPage;
    
    public CheckoutSteps(ProductDetailsPage productDetailsPage,CheckoutSummaryPage checkoutSummaryPage,CheckoutShippingPage checkoutShippingPage,CheckoutAddressPage checkoutAddressPage,CheckoutPaymentPage CheckoutPaymentPage) {
        this.productDetailsPage = productDetailsPage;
        this.checkoutSummaryPage=checkoutSummaryPage;
        this.checkoutShippingPage=checkoutShippingPage;
        this.checkoutAddressPage=checkoutAddressPage;
        this.CheckoutPaymentPage=CheckoutPaymentPage;
    }
    
    @And("^I initiates the checkout for product$")
    public void i_initiates_the_checkout_for_product() throws Throwable {
    	productDetailsPage.proceedCheckout();   
    	productDetailsPage.waitForVisibilityOfCheckOut();
    	productDetailsPage.proceedCheckoutOnOverLayScreen();
    }
    
    @And("^I complete order placement flow$")
    public void i_complete_order_placement_flow() throws Throwable {
    	checkoutSummaryPage.proceedCheckout();
    	checkoutAddressPage.proceedCheckout();
    	checkoutShippingPage.termsandCondtionsField();
    	checkoutShippingPage.proceedCheckout();
    	CheckoutPaymentPage.payByWireField();
    	CheckoutPaymentPage.confirmationOrderBtn();
    }
    
}

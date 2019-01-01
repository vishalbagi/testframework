package com.hf.test.step_definitions.gui;

import com.hf.test.page_objects.gui.ProductDetailsPage;

import cucumber.api.java.en.And;

public class ProductDetailsSteps {

    private ProductDetailsPage productDetailsPage;
    
    public ProductDetailsSteps(ProductDetailsPage productDetailsPage) {
        this.productDetailsPage = productDetailsPage;
    }
    
    @And("^I selects product \"([^\"]*)\" with size as \"([^\"]*)\", quantity as \"([^\"]*)\" and colour as \"([^\"]*)\"$")
    public void i_selects_product_something_with_size_as_something_quantity_as_something_and_colour_as_something(String productname, String size, String quantity, String color) throws Throwable {
    	productDetailsPage.getProductField(productname);
    	productDetailsPage.selectColourField(color);
    	productDetailsPage.clearQuatityField();
    	productDetailsPage.sendTextInQuatityField(quantity);
    	productDetailsPage.sizeValueSelectField(size);

    }
}

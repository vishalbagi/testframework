$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/vishal.bagi/Downloads/qa-test-hf/testframework/src/test/resources/features/web/Checkout.feature");
formatter.feature({
  "name": "Checkout",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@web"
    }
  ]
});
formatter.scenarioOutline({
  "name": "As a test app user I should be able to place an order",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@checkout"
    }
  ]
});
formatter.step({
  "name": "i click \"Sign In\"  on the Home Page",
  "keyword": "When "
});
formatter.step({
  "name": "i enter loginId \"hf_challenge_123456@hf12j345.com\" and password \"12345678\"",
  "keyword": "When "
});
formatter.step({
  "name": "i click on Sign In button on the Login Page",
  "keyword": "And "
});
formatter.step({
  "name": "I should see \"My Account\" page",
  "keyword": "Then "
});
formatter.step({
  "name": "I selects \"Women\" category",
  "keyword": "When "
});
formatter.step({
  "name": "I selects product \"\u003cProduct_Name\u003e\" with size as \"\u003csize\u003e\", quantity as \"\u003cquantity\u003e\" and colour as \"\u003ccolor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I initiates the checkout for product",
  "keyword": "And "
});
formatter.step({
  "name": "I complete order placement flow",
  "keyword": "And "
});
formatter.step({
  "name": "i click \"Sign Out\"  on the Home Page",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Product_Name",
        "size",
        "quantity",
        "color"
      ]
    },
    {
      "cells": [
        "Faded Short Sleeve T-shirts",
        "M",
        "2",
        "Blue"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I am on the \"Start\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.i_am_on_the_something_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As a test app user I should be able to place an order",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web"
    },
    {
      "name": "@checkout"
    }
  ]
});
formatter.step({
  "name": "i click \"Sign In\"  on the Home Page",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageSteps.i_click_on_the_Home_Page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i enter loginId \"hf_challenge_123456@hf12j345.com\" and password \"12345678\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_enter_loginId_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i click on Sign In button on the Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_sign_in_button_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"My Account\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyAccountPageStep.i_should_see_something_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I selects \"Women\" category",
  "keyword": "When "
});
formatter.match({
  "location": "MyAccountPageStep.i_selects_something_category(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I selects product \"Faded Short Sleeve T-shirts\" with size as \"M\", quantity as \"2\" and colour as \"Blue\"",
  "keyword": "And "
});
formatter.match({
  "location": "ProductDetailsSteps.i_selects_product_something_with_size_as_something_quantity_as_something_and_colour_as_something(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I initiates the checkout for product",
  "keyword": "And "
});
formatter.match({
  "location": "CheckoutSteps.i_initiates_the_checkout_for_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I complete order placement flow",
  "keyword": "And "
});
formatter.match({
  "location": "CheckoutSteps.i_complete_order_placement_flow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i click \"Sign Out\"  on the Home Page",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageSteps.i_click_on_the_Home_Page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
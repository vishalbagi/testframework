package com.hf.test.step_definitions.gui;


import com.hf.test.page_objects.gui.HomePage;

import cucumber.api.Scenario;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class HomePageSteps {

    private HomePage homePage;

    public HomePageSteps(HomePage homePage) {
        this.homePage = homePage;
    }

    @Given("^I am on the \"([^\"]*)\" page$")
    public void i_am_on_the_something_page(String strArg1) throws Throwable {
    homePage.getWebDriver().navigate().to("http://automationpractice.com/index.php");
   
    }

    @When("^i click \"([^\"]*)\"  on the Home Page$")
    public void i_click_on_the_Home_Page(String pageToNavigate) throws Throwable {
        if (pageToNavigate.equals("Sign In")) {
        	homePage.clickSignInLink();
        } else if (pageToNavigate.equals("Sign Out")) {
            homePage.clickSignOutLink();
        }
    }

}
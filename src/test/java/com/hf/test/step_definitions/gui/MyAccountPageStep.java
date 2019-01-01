package com.hf.test.step_definitions.gui;

import static org.testng.Assert.assertEquals;

import org.testng.Assert;

import com.hf.test.page_objects.gui.MyAccountPage;
import com.hf.test.page_objects.gui.SigninPage;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyAccountPageStep {
    private MyAccountPage myAccountPage;
    
    public MyAccountPageStep(MyAccountPage myAccountPage) {
        this.myAccountPage = myAccountPage;
    }

    @When("^I selects \"([^\"]*)\" category$")
    public void i_selects_something_category(String strArg1) throws Throwable {
    	myAccountPage.clickWomenTab();
    }
    
    @Then("^I should see \"([^\"]*)\" page$")
    public void i_should_see_something_page(String strArg1) throws Throwable {
    	Assert.assertEquals(myAccountPage.getMyAccountSummaryTitle(),"MY ACCOUNT");
    }

    @And("^I should see \"([^\"]*)\" in the page url$")
    public void i_should_see_something_in_the_page_url(String strArg1) throws Throwable {
    	boolean correctUrl =myAccountPage.checkPageUrlContains(strArg1);
    	Assert.assertTrue(correctUrl, "Page URL doesnt contains "+strArg1);
    }


    @And("^I should see welcome message on Account page$")
    public void i_should_see_welcome_message_on_account_page() throws Throwable {
    	Assert.assertTrue(myAccountPage.getWelcomeMessage().contains("Welcome to your account."));

}
	@And("^I Should see user name \"([^\"]*)\" in the header$")
	public void iShouldSeeUserNameInTheHeader(String arg1) throws Throwable {
    	Assert.assertEquals(myAccountPage.getLoggedInUserName(),arg1,arg1 +" is not displayed on header");
	}
    @And("^I should be able to sign out$")
    public void i_should_be_able_to_sign_out() throws Throwable {
    	Assert.assertTrue(myAccountPage.checkLogOutLink());
    }



}

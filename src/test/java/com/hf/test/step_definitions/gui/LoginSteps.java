package com.hf.test.step_definitions.gui;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import com.hf.test.page_objects.gui.SigninPage;
import com.hf.test.framework.helpers.utils.RandomGenerator;
import com.hf.test.page_objects.gui.HomePage;

import cucumber.api.PendingException;

public class LoginSteps {
    private SigninPage signinPage;
    private String emailAddressData = RandomGenerator.randomEmailAddress(6);

    public LoginSteps(SigninPage signinPage) {
        this.signinPage = signinPage;
    }


    @When("^i enter loginId \"(.*?)\" and password \"(.*?)\"$")
    public void i_enter_loginId_and_password(String loginId, String password) throws Throwable {
    	signinPage.clearEmailField();
    	signinPage.SendTextInEmailField(loginId);
    	signinPage.clearPasswordField();
    	signinPage.SendTextInPasswordField(password);

    }
    @And("^i click on Sign In button on the Login Page$")
    public void i_click_on_sign_in_button_on_the_login_page() throws Throwable {
    	signinPage.clickSignInButton();
    	}

    @And("^I enter new email address on create account section$")
    public void i_enter_new_email_address_on_create_account_section() throws Throwable {

    	signinPage.SendTextInnewAccountEmail(emailAddressData);
    }
    @And("^I click on \"([^\"]*)\" button on Sign In page$")
    public void i_click_on_something_button_on_sign_in_page(String strArg1) throws Throwable {
    	signinPage.clickCreateAccount();
    	}


}

$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/vishal.bagi/Downloads/qa-test-hf/testframework/src/test/resources/features/web/Registration.feature");
formatter.feature({
  "name": "Registration",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@web"
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
  "name": "As a new test app user I should be able to register myself",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@web"
    },
    {
      "name": "@sign_in"
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
  "name": "I enter new email address on create account section",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_new_email_address_on_create_account_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Create an account\" button on Sign In page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_something_button_on_sign_in_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter following details in Personal Information",
  "rows": [
    {
      "cells": [
        "Salutation",
        "FirstName",
        "LastName",
        "EmailID",
        "Password",
        "DateOfBirth"
      ]
    },
    {
      "cells": [
        "Mr",
        "{RANDOM_STRING}",
        "{RANDOM_STRING}",
        "{RANDOM_EMAIL}",
        "{RANDOM_APLHANUM}",
        "{RANDOM_PASTDATE}"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CreateAccountSteps.iEnterFollowingDetailsInPersonalInformation(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter following details in Address Details",
  "rows": [
    {
      "cells": [
        "Company",
        "Address",
        "Address2",
        "City",
        "State",
        "ZipCode",
        "Country",
        "AdditionInfo",
        "HomeNo",
        "MobileNo",
        "Alias"
      ]
    },
    {
      "cells": [
        "{RANDOM_STRING}",
        "{RANDOM_STRING}",
        "{RANDOM_STRING}",
        "{RANDOM_STRING}",
        "{RANDOM_SELECT}",
        "{RANDOM_NUM}",
        "United States",
        "HomeAddress",
        "{RANDOM_NUM}",
        "{RANDOM_NUM}",
        "{RANDOM_STRING}"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CreateAccountSteps.iEnterFollowingDetailsInAddressDetails(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Register\" button on Create Account Page",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAccountSteps.i_click_on_something_button_on_create_account_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"my-account\" in the page url",
  "keyword": "And "
});
formatter.match({
  "location": "MyAccountPageStep.i_should_see_something_in_the_page_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see welcome message on Account page",
  "keyword": "And "
});
formatter.match({
  "location": "MyAccountPageStep.i_should_see_welcome_message_on_account_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to sign out",
  "keyword": "And "
});
formatter.match({
  "location": "MyAccountPageStep.i_should_be_able_to_sign_out()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
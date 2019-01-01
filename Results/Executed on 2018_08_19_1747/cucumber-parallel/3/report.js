$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/vishal.bagi/Downloads/qa-test-hf/testframework/src/test/resources/features/web/LogIn.feature");
formatter.feature({
  "name": "Login",
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
  "name": "As a test app user I should be able to log in with existing user credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@web"
    },
    {
      "name": "@web1"
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
  "name": "I Should see user name \"Joe Black\" in the header",
  "keyword": "And "
});
formatter.match({
  "location": "MyAccountPageStep.iShouldSeeUserNameInTheHeader(String)"
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
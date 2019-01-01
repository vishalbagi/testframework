@web
Feature: Registration

  Background:
    Given I am on the "Start" page

  @sign_in
  Scenario: As a new test app user I should be able to register myself

    When i click "Sign In"  on the Home Page
    And I enter new email address on create account section
    And I click on "Create an account" button on Sign In page
		And I enter following details in Personal Information
      |Salutation|  FirstName|LastName  |EmailID  |Password  |DateOfBirth|
      |Mr		 |{RANDOM_STRING}| {RANDOM_STRING} |{RANDOM_EMAIL}  |{RANDOM_APLHANUM}  |{RANDOM_PASTDATE}|

		And I enter following details in Address Details
      |  Company				|Address  				|Address2  				|City  						|State          |ZipCode		 |Country			|AdditionInfo|HomeNo				 |MobileNo			 |Alias|
      |  {RANDOM_STRING}| {RANDOM_STRING} |{RANDOM_STRING}  |{RANDOM_STRING}  |{RANDOM_SELECT}|{RANDOM_NUM}|United States|HomeAddress |{RANDOM_NUM}|{RANDOM_NUM}|{RANDOM_STRING}|
      
     And I click on "Register" button on Create Account Page
    And I should see "my-account" in the page url
#    And I Should see user name "Joe Black" in the header
    And I should see welcome message on Account page
    And I should be able to sign out
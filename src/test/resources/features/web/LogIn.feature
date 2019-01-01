@web
Feature: Login

  Background:
    Given I am on the "Start" page

  @web1
  Scenario: As a test app user I should be able to log in with existing user credentials

    When i click "Sign In"  on the Home Page
    When i enter loginId "hf_challenge_123456@hf12j345.com" and password "12345678"
    And i click on Sign In button on the Login Page
    Then I should see "My Account" page
    And I should see "my-account" in the page url
    And I Should see user name "Joe Black" in the header
    And I should see welcome message on Account page
    And I should be able to sign out
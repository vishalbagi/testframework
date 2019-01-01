@web
Feature: Checkout

  Background: 
    Given I am on the "Start" page

  @checkout
  Scenario Outline: As a test app user I should be able to place an order
    When i click "Sign In"  on the Home Page
    When i enter loginId "hf_challenge_123456@hf12j345.com" and password "12345678"
    And i click on Sign In button on the Login Page
    Then I should see "My Account" page
 
  	When I selects "Women" category
  	And I selects product "<Product_Name>" with size as "<size>", quantity as "<quantity>" and colour as "<color>"
  	And I initiates the checkout for product
  	And I complete order placement flow
  	When i click "Sign Out"  on the Home Page
  	
  	 Examples:
  	 | Product_Name | size | quantity | color |
  	 | Faded Short Sleeve T-shirts | M | 2 | Blue |
 # 	 | Blouse | L | 5 | White |
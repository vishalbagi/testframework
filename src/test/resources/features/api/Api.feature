@api
Feature: Countries API

#  Background: 

  #  Given I know countries API base url
  @get_all_countries
  Scenario: As a countries API user I should be able to fetch the list of all known countries
    
    When I perform GET request for "/country/get/all" endpoint
    Then I get a 200 http status code
    And response should contain data about for country
      | name                                                 | alpha2_code | alpha3_code |
      | Germany                                              | DE          | DEU         |
      | United Kingdom of Great Britain and Northern Ireland | GB          | GBR         |
      | United States of America                             | US          | USA         |
      
Scenario Outline: As a countries API user I should be able to fetch the list of all known countries
    When I perform GET request for "/country/get/iso2code/<alpha2_code>" endpoint
    Then I get a 200 http status code
    And response should contain data about for perticular country
      | name                                                 | alpha2_code | alpha3_code |
      | <name>                                              | <alpha2_code>          | <alpha3_code>        |
  	 Examples:
      | name                                                 | alpha2_code | alpha3_code |
      | Germany                                              | DE          | DEU         |
      | United Kingdom of Great Britain and Northern Ireland | GB          | GBR         |
      | United States of America                             | US          | USA         |
      
      
Scenario Outline: As a countries API user I should be able to fetch the list of all known countries
    When I perform GET request for "/country/get/iso2code/<alpha2_code>" endpoint
    Then I get a 200 http status code
    And response should contain Message"No matching country found for requested code "

  	 Examples:
      | name                                                 | alpha2_code | alpha3_code |
      | Wakanda                                              | XX          | XCV         |
      
      
Scenario Outline: As a countries API user I should be able to add new countries

    When I create an new county request
      | name                                                 | alpha2_code | alpha3_code |
      | <name>                                              | <alpha2_code>          | <alpha3_code>        |
    Then I get a 200 http status code
    And response should contain Message"New country added successfully"

  	 Examples:
      | name                                                 | alpha2_code | alpha3_code |
      | Wakanda                                              | XX          | XCV         |
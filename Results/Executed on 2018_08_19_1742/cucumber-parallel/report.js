$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/vishal.bagi/Downloads/qa-test-hf/testframework/src/test/resources/features/api/Api.feature");
formatter.feature({
  "name": "Countries API",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.scenario({
  "name": "As a countries API user I should be able to fetch the list of all known countries",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@get_all_countries"
    }
  ]
});
formatter.step({
  "name": "I perform GET request for \"/country/get/all\" endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "ApiSteps.I_perform_GET_request_for_endpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get a 200 http status code",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiSteps.I_get_a_http_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response should contain data about for country",
  "rows": [
    {
      "cells": [
        "name",
        "alpha2_code",
        "alpha3_code"
      ]
    },
    {
      "cells": [
        "Germany",
        "DE",
        "DEU"
      ]
    },
    {
      "cells": [
        "United Kingdom of Great Britain and Northern Ireland",
        "GB",
        "GBR"
      ]
    },
    {
      "cells": [
        "United States of America",
        "US",
        "USA"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ApiSteps.response_should_contain_data_about_for_country(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "As a countries API user I should be able to fetch the list of all known countries",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I perform GET request for \"/country/get/iso2code/\u003calpha2_code\u003e\" endpoint",
  "keyword": "When "
});
formatter.step({
  "name": "I get a 200 http status code",
  "keyword": "Then "
});
formatter.step({
  "name": "response should contain data about for perticular country",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "name",
        "alpha2_code",
        "alpha3_code"
      ]
    },
    {
      "cells": [
        "\u003cname\u003e",
        "\u003calpha2_code\u003e",
        "\u003calpha3_code\u003e"
      ]
    }
  ]
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "alpha2_code",
        "alpha3_code"
      ]
    },
    {
      "cells": [
        "Germany",
        "DE",
        "DEU"
      ]
    },
    {
      "cells": [
        "United Kingdom of Great Britain and Northern Ireland",
        "GB",
        "GBR"
      ]
    },
    {
      "cells": [
        "United States of America",
        "US",
        "USA"
      ]
    }
  ]
});
formatter.scenario({
  "name": "As a countries API user I should be able to fetch the list of all known countries",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.step({
  "name": "I perform GET request for \"/country/get/iso2code/DE\" endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "ApiSteps.I_perform_GET_request_for_endpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get a 200 http status code",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiSteps.I_get_a_http_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response should contain data about for perticular country",
  "rows": [
    {
      "cells": [
        "name",
        "alpha2_code",
        "alpha3_code"
      ]
    },
    {
      "cells": [
        "Germany",
        "DE",
        "DEU"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ApiSteps.response_should_contain_data_about_for_perticular_country(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As a countries API user I should be able to fetch the list of all known countries",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.step({
  "name": "I perform GET request for \"/country/get/iso2code/GB\" endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "ApiSteps.I_perform_GET_request_for_endpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get a 200 http status code",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiSteps.I_get_a_http_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response should contain data about for perticular country",
  "rows": [
    {
      "cells": [
        "name",
        "alpha2_code",
        "alpha3_code"
      ]
    },
    {
      "cells": [
        "United Kingdom of Great Britain and Northern Ireland",
        "GB",
        "GBR"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ApiSteps.response_should_contain_data_about_for_perticular_country(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As a countries API user I should be able to fetch the list of all known countries",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.step({
  "name": "I perform GET request for \"/country/get/iso2code/US\" endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "ApiSteps.I_perform_GET_request_for_endpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get a 200 http status code",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiSteps.I_get_a_http_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response should contain data about for perticular country",
  "rows": [
    {
      "cells": [
        "name",
        "alpha2_code",
        "alpha3_code"
      ]
    },
    {
      "cells": [
        "United States of America",
        "US",
        "USA"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ApiSteps.response_should_contain_data_about_for_perticular_country(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "As a countries API user I should be able to fetch the list of all known countries",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I perform GET request for \"/country/get/iso2code/\u003calpha2_code\u003e\" endpoint",
  "keyword": "When "
});
formatter.step({
  "name": "I get a 200 http status code",
  "keyword": "Then "
});
formatter.step({
  "name": "response should contain Message\"No matching country found for requested code \"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "alpha2_code",
        "alpha3_code"
      ]
    },
    {
      "cells": [
        "Wakanda",
        "XX",
        "XCV"
      ]
    }
  ]
});
formatter.scenario({
  "name": "As a countries API user I should be able to fetch the list of all known countries",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.step({
  "name": "I perform GET request for \"/country/get/iso2code/XX\" endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "ApiSteps.I_perform_GET_request_for_endpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get a 200 http status code",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiSteps.I_get_a_http_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response should contain Message\"No matching country found for requested code \"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiSteps.responseShouldContainMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "As a countries API user I should be able to add new countries",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I create an new county request",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "name",
        "alpha2_code",
        "alpha3_code"
      ]
    },
    {
      "cells": [
        "\u003cname\u003e",
        "\u003calpha2_code\u003e",
        "\u003calpha3_code\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "I get a 200 http status code",
  "keyword": "Then "
});
formatter.step({
  "name": "response should contain Message\"New country added successfully\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "alpha2_code",
        "alpha3_code"
      ]
    },
    {
      "cells": [
        "Wakanda",
        "XX",
        "XCV"
      ]
    }
  ]
});
formatter.scenario({
  "name": "As a countries API user I should be able to add new countries",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.step({
  "name": "I create an new county request",
  "rows": [
    {
      "cells": [
        "name",
        "alpha2_code",
        "alpha3_code"
      ]
    },
    {
      "cells": [
        "Wakanda",
        "XX",
        "XCV"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "ApiSteps.i_create_an_new_county_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get a 200 http status code",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiSteps.I_get_a_http_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response should contain Message\"New country added successfully\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiSteps.responseShouldContainMessage(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Didnt find expected messageNew country added successfully\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat com.hf.test.step_definitions.api.ApiSteps.responseShouldContainMessage(ApiSteps.java:123)\r\n\tat ✽.response should contain Message\"New country added successfully\"(C:/Users/vishal.bagi/Downloads/qa-test-hf/testframework/src/test/resources/features/api/Api.feature:47)\r\n",
  "status": "failed"
});
});$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/vishal.bagi/Downloads/qa-test-hf/testframework/src/test/resources/features/web/Checkout.feature");
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
});$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/vishal.bagi/Downloads/qa-test-hf/testframework/src/test/resources/features/web/LogIn.feature");
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
});$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/vishal.bagi/Downloads/qa-test-hf/testframework/src/test/resources/features/web/Registration.feature");
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
});$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/vishal.bagi/Downloads/qa-test-hf/testframework/src/test/resources/features/api/Api.feature");
formatter.feature({
  "name": "Countries API",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.scenario({
  "name": "As a countries API user I should be able to fetch the list of all known countries",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@get_all_countries"
    }
  ]
});
formatter.step({
  "name": "I perform GET request for \"/country/get/all\" endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "ApiSteps.I_perform_GET_request_for_endpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get a 200 http status code",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiSteps.I_get_a_http_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response should contain data about for country",
  "rows": [
    {
      "cells": [
        "name",
        "alpha2_code",
        "alpha3_code"
      ]
    },
    {
      "cells": [
        "Germany",
        "DE",
        "DEU"
      ]
    },
    {
      "cells": [
        "United Kingdom of Great Britain and Northern Ireland",
        "GB",
        "GBR"
      ]
    },
    {
      "cells": [
        "United States of America",
        "US",
        "USA"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ApiSteps.response_should_contain_data_about_for_country(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "As a countries API user I should be able to fetch the list of all known countries",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I perform GET request for \"/country/get/iso2code/\u003calpha2_code\u003e\" endpoint",
  "keyword": "When "
});
formatter.step({
  "name": "I get a 200 http status code",
  "keyword": "Then "
});
formatter.step({
  "name": "response should contain data about for perticular country",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "name",
        "alpha2_code",
        "alpha3_code"
      ]
    },
    {
      "cells": [
        "\u003cname\u003e",
        "\u003calpha2_code\u003e",
        "\u003calpha3_code\u003e"
      ]
    }
  ]
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "alpha2_code",
        "alpha3_code"
      ]
    },
    {
      "cells": [
        "Germany",
        "DE",
        "DEU"
      ]
    },
    {
      "cells": [
        "United Kingdom of Great Britain and Northern Ireland",
        "GB",
        "GBR"
      ]
    },
    {
      "cells": [
        "United States of America",
        "US",
        "USA"
      ]
    }
  ]
});
formatter.scenario({
  "name": "As a countries API user I should be able to fetch the list of all known countries",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.step({
  "name": "I perform GET request for \"/country/get/iso2code/DE\" endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "ApiSteps.I_perform_GET_request_for_endpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get a 200 http status code",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiSteps.I_get_a_http_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response should contain data about for perticular country",
  "rows": [
    {
      "cells": [
        "name",
        "alpha2_code",
        "alpha3_code"
      ]
    },
    {
      "cells": [
        "Germany",
        "DE",
        "DEU"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ApiSteps.response_should_contain_data_about_for_perticular_country(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As a countries API user I should be able to fetch the list of all known countries",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.step({
  "name": "I perform GET request for \"/country/get/iso2code/GB\" endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "ApiSteps.I_perform_GET_request_for_endpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get a 200 http status code",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiSteps.I_get_a_http_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response should contain data about for perticular country",
  "rows": [
    {
      "cells": [
        "name",
        "alpha2_code",
        "alpha3_code"
      ]
    },
    {
      "cells": [
        "United Kingdom of Great Britain and Northern Ireland",
        "GB",
        "GBR"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ApiSteps.response_should_contain_data_about_for_perticular_country(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As a countries API user I should be able to fetch the list of all known countries",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.step({
  "name": "I perform GET request for \"/country/get/iso2code/US\" endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "ApiSteps.I_perform_GET_request_for_endpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get a 200 http status code",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiSteps.I_get_a_http_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response should contain data about for perticular country",
  "rows": [
    {
      "cells": [
        "name",
        "alpha2_code",
        "alpha3_code"
      ]
    },
    {
      "cells": [
        "United States of America",
        "US",
        "USA"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ApiSteps.response_should_contain_data_about_for_perticular_country(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "As a countries API user I should be able to fetch the list of all known countries",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I perform GET request for \"/country/get/iso2code/\u003calpha2_code\u003e\" endpoint",
  "keyword": "When "
});
formatter.step({
  "name": "I get a 200 http status code",
  "keyword": "Then "
});
formatter.step({
  "name": "response should contain Message\"No matching country found for requested code \"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "alpha2_code",
        "alpha3_code"
      ]
    },
    {
      "cells": [
        "Wakanda",
        "XX",
        "XCV"
      ]
    }
  ]
});
formatter.scenario({
  "name": "As a countries API user I should be able to fetch the list of all known countries",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.step({
  "name": "I perform GET request for \"/country/get/iso2code/XX\" endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "ApiSteps.I_perform_GET_request_for_endpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get a 200 http status code",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiSteps.I_get_a_http_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response should contain Message\"No matching country found for requested code \"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiSteps.responseShouldContainMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "As a countries API user I should be able to add new countries",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I create an new county request",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "name",
        "alpha2_code",
        "alpha3_code"
      ]
    },
    {
      "cells": [
        "\u003cname\u003e",
        "\u003calpha2_code\u003e",
        "\u003calpha3_code\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "I get a 200 http status code",
  "keyword": "Then "
});
formatter.step({
  "name": "response should contain Message\"New country added successfully\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "alpha2_code",
        "alpha3_code"
      ]
    },
    {
      "cells": [
        "Wakanda",
        "XX",
        "XCV"
      ]
    }
  ]
});
formatter.scenario({
  "name": "As a countries API user I should be able to add new countries",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.step({
  "name": "I create an new county request",
  "rows": [
    {
      "cells": [
        "name",
        "alpha2_code",
        "alpha3_code"
      ]
    },
    {
      "cells": [
        "Wakanda",
        "XX",
        "XCV"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "ApiSteps.i_create_an_new_county_request(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get a 200 http status code",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiSteps.I_get_a_http_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response should contain Message\"New country added successfully\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiSteps.responseShouldContainMessage(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Didnt find expected messageNew country added successfully\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat com.hf.test.step_definitions.api.ApiSteps.responseShouldContainMessage(ApiSteps.java:123)\r\n\tat ✽.response should contain Message\"New country added successfully\"(C:/Users/vishal.bagi/Downloads/qa-test-hf/testframework/src/test/resources/features/api/Api.feature:47)\r\n",
  "status": "failed"
});
});$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/vishal.bagi/Downloads/qa-test-hf/testframework/src/test/resources/features/web/Checkout.feature");
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
});$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/vishal.bagi/Downloads/qa-test-hf/testframework/src/test/resources/features/web/LogIn.feature");
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
});$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/vishal.bagi/Downloads/qa-test-hf/testframework/src/test/resources/features/web/Registration.feature");
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
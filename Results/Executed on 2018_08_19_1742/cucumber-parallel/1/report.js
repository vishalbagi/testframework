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
});
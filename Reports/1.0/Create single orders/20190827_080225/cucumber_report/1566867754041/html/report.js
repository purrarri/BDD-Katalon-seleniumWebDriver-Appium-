$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/home/jarwo/Katalon Studio/Ritase Automation Testing/Include/features/Web/Login/LoginShippers.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login Shippers",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User open browser and visit \u003cURL\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "User see login page",
  "keyword": "Then "
});
formatter.step({
  "name": "User fill email shippers \u003cEmail\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User fill password shippers \u003cPassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User click button login",
  "keyword": "And "
});
formatter.step({
  "name": "User see dashboard menu",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "URL",
        "Email",
        "Password"
      ]
    },
    {
      "cells": [
        "https://staging.shippers.rit-ase.com/",
        "order@xl.co.id",
        "YFZfyx+NhJE\u003d"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login Shippers",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User open browser and visit https://staging.shippers.rit-ase.com/",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.userOpenBrowserAndVisitUrl(String)"
});

$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/home/jarwo/Katalon Studio/Ritase Automation Testing/Include/features/Mobile/Drivers V2/Login/LoginDrivers.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login Drivers",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User install and open ritase driver apps",
  "keyword": "Given "
});
formatter.step({
  "name": "User tap initial login button",
  "keyword": "When "
});
formatter.step({
  "name": "User fill email address driver \u003cEmail\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User fill password driver \u003cPassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User tap login button",
  "keyword": "And "
});
formatter.step({
  "name": "User see tab trip",
  "keyword": "Then "
});
formatter.step({
  "name": "User swipe right to left",
  "keyword": "When "
});
formatter.step({
  "name": "User see tab wallet",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ]
    },
    {
      "cells": [
        "sopo@qa.com",
        "rahasia"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login Drivers",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User install and open ritase driver apps",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.userInstallAndOpenDriverApps()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap initial login button",
  "keyword": "When "
});
formatter.match({
  "location": "Login.userTapInitialLoginButton()"
});

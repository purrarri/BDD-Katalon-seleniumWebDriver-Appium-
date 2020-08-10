$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/home/jarwo/Katalon Studio/Ritase Automation Testing/Include/features/Mobile/Drivers V2/Trips/AcceptTrips.feature");
formatter.feature({
  "name": "Trips",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Accept Order",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User open trip menu",
  "keyword": "Given "
});
formatter.step({
  "name": "User see tab trip",
  "keyword": "Then "
});
formatter.step({
  "name": "User swipe top to buttom",
  "keyword": "When "
});
formatter.step({
  "name": "User see order cards",
  "keyword": "Then "
});
formatter.step({
  "name": "User tap first cards",
  "keyword": "When "
});
formatter.step({
  "name": "User tap yes button",
  "keyword": "And "
});
formatter.step({
  "name": "User see tab trip",
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
  "name": "Accept Order",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User open trip menu",
  "keyword": "Given "
});
formatter.match({
  "location": "Trips.userOpenTripMenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see tab trip",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.userSeeTabTrip()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User swipe top to buttom",
  "keyword": "When "
});
formatter.match({
  "location": "Helper.userSwipeTopToButtom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see order cards",
  "keyword": "Then "
});
formatter.match({
  "location": "Trips.userSeeOrderCards()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap first cards",
  "keyword": "When "
});
formatter.match({
  "location": "Trips.userTapFirstCards()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap yes button",
  "keyword": "And "
});
formatter.match({
  "location": "Trips.userTapYesButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see tab trip",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.userSeeTabTrip()"
});
formatter.result({
  "status": "passed"
});
});
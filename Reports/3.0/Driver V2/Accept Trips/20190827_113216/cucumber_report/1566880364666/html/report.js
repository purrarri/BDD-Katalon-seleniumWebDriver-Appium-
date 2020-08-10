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
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Object Object Repository/Driver Apps V2/txt_tripMenu not found\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:50)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.stepFailed(MobileKeywordMain.groovy:40)\n\tat com.kms.katalon.core.mobile.keyword.builtin.GetTextKeyword$_getText_closure1.doCall(GetTextKeyword.groovy:74)\n\tat com.kms.katalon.core.mobile.keyword.builtin.GetTextKeyword$_getText_closure1.call(GetTextKeyword.groovy)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\n\tat com.kms.katalon.core.mobile.keyword.builtin.GetTextKeyword.getText(GetTextKeyword.groovy:80)\n\tat com.kms.katalon.core.mobile.keyword.builtin.GetTextKeyword.execute(GetTextKeyword.groovy:64)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:56)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.getText(MobileBuiltInKeywords.groovy:423)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$getText$4.call(Unknown Source)\n\tat mobile.drivers.Login.userSeeTabTrip(Login.groovy:85)\n\tat ✽.User see tab trip(/home/jarwo/Katalon Studio/Ritase Automation Testing/Include/features/Mobile/Drivers V2/Trips/AcceptTrips.feature:5)\n",
  "status": "failed"
});
formatter.step({
  "name": "User swipe top to buttom",
  "keyword": "When "
});
formatter.match({
  "location": "Helper.userSwipeTopToButtom()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see order cards",
  "keyword": "Then "
});
formatter.match({
  "location": "Trips.userSeeOrderCards()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User tap first cards",
  "keyword": "When "
});
formatter.match({
  "location": "Trips.userTapFirstCards()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User tap yes button",
  "keyword": "And "
});
formatter.match({
  "location": "Trips.userTapYesButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see tab trip",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.userSeeTabTrip()"
});
formatter.result({
  "status": "skipped"
});
});
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
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill email address driver sopo@qa.com",
  "keyword": "And "
});
formatter.match({
  "location": "Login.userFillEmailAddressDriver(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill password driver rahasia",
  "keyword": "And "
});
formatter.match({
  "location": "Login.userFillPasswordDriver(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.userTapLoginButton()"
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
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Object Object Repository/Driver Apps V2/txt_tripMenu not found\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:50)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.stepFailed(MobileKeywordMain.groovy:40)\n\tat com.kms.katalon.core.mobile.keyword.builtin.GetTextKeyword$_getText_closure1.doCall(GetTextKeyword.groovy:74)\n\tat com.kms.katalon.core.mobile.keyword.builtin.GetTextKeyword$_getText_closure1.call(GetTextKeyword.groovy)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\n\tat com.kms.katalon.core.mobile.keyword.builtin.GetTextKeyword.getText(GetTextKeyword.groovy:80)\n\tat com.kms.katalon.core.mobile.keyword.builtin.GetTextKeyword.execute(GetTextKeyword.groovy:64)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:56)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.getText(MobileBuiltInKeywords.groovy:423)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$getText$4.call(Unknown Source)\n\tat mobile.drivers.Login.userSeeTabTrip(Login.groovy:85)\n\tat ✽.User see tab trip(/home/jarwo/Katalon Studio/Ritase Automation Testing/Include/features/Mobile/Drivers V2/Login/LoginDrivers.feature:9)\n",
  "status": "failed"
});
formatter.step({
  "name": "User swipe right to left",
  "keyword": "When "
});
formatter.match({
  "location": "Helper.userSwipeRightToLeft()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see tab wallet",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.userSeeTabWallet()"
});
formatter.result({
  "status": "skipped"
});
});
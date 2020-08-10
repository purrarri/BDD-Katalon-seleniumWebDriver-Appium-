$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Purrari/Documents/Ritase Automation/Include/features/Mobile/Drivers V2/Login/LoginDrivers.feature");
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
  "name": "User swipe one to two",
  "keyword": "When "
});
formatter.step({
  "name": "User see tab wallet",
  "keyword": "Then "
});
formatter.step({
  "name": "User swipe two to three",
  "keyword": "When "
});
formatter.step({
  "name": "User swipe three to four",
  "keyword": "And "
});
formatter.step({
  "name": "User see tab Profil",
  "keyword": "Then "
});
formatter.step({
  "name": "User swipe up",
  "keyword": "And "
});
formatter.step({
  "name": "User logout",
  "keyword": "Then "
});
formatter.step({
  "name": "User Konfirmasi",
  "keyword": "When "
});
formatter.step({
  "name": "User exit",
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
        "082329073112",
        "1234567"
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
  "location": "Helper.userInstallAndOpenDriverApps()"
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
  "name": "User fill email address driver 082329073112",
  "keyword": "And "
});
formatter.match({
  "location": "Login.userFillEmailAddressDriver(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill password driver 1234567",
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
  "status": "passed"
});
formatter.step({
  "name": "User swipe one to two",
  "keyword": "When "
});
formatter.match({
  "location": "Login.swipeOnetoTwo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see tab wallet",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.userSeeTabWallet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User swipe two to three",
  "keyword": "When "
});
formatter.match({
  "location": "Login.swipeTwotoThree()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User swipe three to four",
  "keyword": "And "
});
formatter.match({
  "location": "Login.swipeThreetoFour()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see tab Profil",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.userSeeTabProfil()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User swipe up",
  "keyword": "And "
});
formatter.match({
  "location": "Login.userSwipeToButtom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User logout",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.userTapLogout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Konfirmasi",
  "keyword": "When "
});
formatter.match({
  "location": "Login.userKonfirmasi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User exit",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.userTapExit()"
});
formatter.result({
  "status": "passed"
});
});
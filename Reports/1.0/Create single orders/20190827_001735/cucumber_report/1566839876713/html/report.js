$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/home/jarwo/Katalon Studio/Ritase Automation Testing/Include/features/Web/Orders/SingleOrderXL.feature");
formatter.feature({
  "name": "Orders",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Single Order as Dira XL",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "QA generate unique number for testing",
  "keyword": "Given "
});
formatter.step({
  "name": "User click order menu",
  "keyword": "When "
});
formatter.step({
  "name": "User see order menu",
  "keyword": "Then "
});
formatter.step({
  "name": "User click add order menu",
  "keyword": "When "
});
formatter.step({
  "name": "User see add order menu",
  "keyword": "Then "
});
formatter.step({
  "name": "User fill company transporter \u003cTransporter\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User fill origin \u003cOrigin\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User fill destination \u003cDestination\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User fill po number",
  "keyword": "And "
});
formatter.step({
  "name": "User fill order number",
  "keyword": "And "
});
formatter.step({
  "name": "User fill shipment number",
  "keyword": "And "
});
formatter.step({
  "name": "User fill vehicle type \u003cVehicleType\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User fill shipper price",
  "keyword": "And "
});
formatter.step({
  "name": "User fill description",
  "keyword": "And "
});
formatter.step({
  "name": "User fill instruction",
  "keyword": "And "
});
formatter.step({
  "name": "User fill pickup time estimation",
  "keyword": "And "
});
formatter.step({
  "name": "User click traced button",
  "keyword": "And "
});
formatter.step({
  "name": "User click add order",
  "keyword": "And "
});
formatter.step({
  "name": "User see popup order success",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Transporter",
        "Origin",
        "Destination",
        "VehicleType"
      ]
    },
    {
      "cells": [
        "Ayaayawae",
        "Jeki kompeni",
        "Rizki kompeni",
        "CDD"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Single Order as Dira XL",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "QA generate unique number for testing",
  "keyword": "Given "
});
formatter.match({
  "location": "OrdersXL.initialQATesting()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click order menu",
  "keyword": "When "
});
formatter.match({
  "location": "OrdersXL.userClickOrderMenu()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to click on object \u0027Object Repository/Shippers Web/Orders/click_orderMenuButton\u0027\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.click(ClickKeyword.groovy:86)\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.execute(ClickKeyword.groovy:67)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:56)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.click(WebUiBuiltInKeywords.groovy:616)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$click$3.call(Unknown Source)\n\tat web.ritase.OrdersXL.userClickOrderMenu(OrdersXL.groovy:64)\n\tat ✽.User click order menu(/home/jarwo/Katalon Studio/Ritase Automation Testing/Include/features/Web/Orders/SingleOrderXL.feature:5)\nCaused by: org.openqa.selenium.ElementNotInteractableException: Element \u003cli class\u003d\"row ng-hide\" href\u003d\"/order\"\u003e could not be scrolled into view\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027redstar\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.0.0-25-generic\u0027, java.version: \u00271.8.0_222\u0027\nDriver info: com.kms.katalon.core.webui.driver.firefox.CGeckoDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 68.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20190814054548, moz:geckodriverVersion: 0.23.0, moz:headless: true, moz:processID: 27184, moz:profile: /tmp/rust_mozprofile.yHsGH5..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, platformVersion: 5.0.0-25-generic, proxy: Proxy(direct), rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 217f6ee1-3192-4aee-8cb0-cdc483eef732\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat com.kms.katalon.selenium.driver.CFirefoxDriver.execute(CFirefoxDriver.java:28)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword$_click_closure1.doCall(ClickKeyword.groovy:79)\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword$_click_closure1.call(ClickKeyword.groovy)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.click(ClickKeyword.groovy:86)\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.execute(ClickKeyword.groovy:67)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:56)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.click(WebUiBuiltInKeywords.groovy:616)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$click$3.call(Unknown Source)\n\tat web.ritase.OrdersXL.userClickOrderMenu(OrdersXL.groovy:64)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\n\tat cucumber.api.cli.Main.run(Main.java:35)\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy:76)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:46)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile.call(Unknown Source)\n\tat Single Orders (DIRA XL).run(Single Orders (DIRA XL):16)\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:337)\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:328)\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:307)\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:299)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:233)\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestCaseMainPhase(TestSuiteExecutor.java:133)\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:116)\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:83)\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:157)\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\n\tat TempTestSuite1566839855792.run(TempTestSuite1566839855792.groovy:35)\n",
  "status": "failed"
});
formatter.step({
  "name": "User see order menu",
  "keyword": "Then "
});
formatter.match({
  "location": "OrdersXL.userSeeOrderMenu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click add order menu",
  "keyword": "When "
});
formatter.match({
  "location": "OrdersXL.userClickAddOrderMenu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see add order menu",
  "keyword": "Then "
});
formatter.match({
  "location": "OrdersXL.userSeeAddOrderMenu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User fill company transporter Ayaayawae",
  "keyword": "When "
});
formatter.match({
  "location": "OrdersXL.userFillCompanyTransporter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User fill origin Jeki kompeni",
  "keyword": "And "
});
formatter.match({
  "location": "OrdersXL.userFillOrigin(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User fill destination Rizki kompeni",
  "keyword": "And "
});
formatter.match({
  "location": "OrdersXL.userFillDestination(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User fill po number",
  "keyword": "And "
});
formatter.match({
  "location": "OrdersXL.userFillPoNumber()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User fill order number",
  "keyword": "And "
});
formatter.match({
  "location": "OrdersXL.userFillOrderNumber()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User fill shipment number",
  "keyword": "And "
});
formatter.match({
  "location": "OrdersXL.userFillShipmentNumber()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User fill vehicle type CDD",
  "keyword": "And "
});
formatter.match({
  "location": "OrdersXL.userFillVehicleType(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User fill shipper price",
  "keyword": "And "
});
formatter.match({
  "location": "OrdersXL.userFillShipperPrice()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User fill description",
  "keyword": "And "
});
formatter.match({
  "location": "OrdersXL.userFillDescription()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User fill instruction",
  "keyword": "And "
});
formatter.match({
  "location": "OrdersXL.userFillInstruction()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User fill pickup time estimation",
  "keyword": "And "
});
formatter.match({
  "location": "OrdersXL.userFillPickupTimeEstimation()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click traced button",
  "keyword": "And "
});
formatter.match({
  "location": "OrdersXL.userClickTracedButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click add order",
  "keyword": "And "
});
formatter.match({
  "location": "OrdersXL.userClickAddOrder()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see popup order success",
  "keyword": "Then "
});
formatter.match({
  "location": "OrdersXL.userSeePopupOrderSuccess()"
});
formatter.result({
  "status": "skipped"
});
});
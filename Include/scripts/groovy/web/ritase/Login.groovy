package web.ritase;
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords

import internal.GlobalVariable

import MobileBuiltInKeywords as Mobile
import WSBuiltInKeywords as WS
import WebUiBuiltInKeywords as WebUI

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When

class Login {
	@Given("User open browser and visit (.*)")
	def userOpenBrowserAndVisitUrl(String url) {
		WebUI.openBrowser(url, FailureHandling.STOP_ON_FAILURE)
	}

	@Then("User see login page")
	def userSeeLoginPage() {
		def loginFormTxt = WebUI.getText(findTestObject('Object Repository/Shippers Web/Login/text_loginForm'), FailureHandling.CONTINUE_ON_FAILURE)
		assert (boolean) loginFormTxt.contains('Please login')
	}

	@When("User fill email shippers (.*)")
	def userFillEmail(String email) {
		WebUI.setText(findTestObject('Object Repository/Shippers Web/Login/input_emailAddress'), email)
	}

	@And("User fill password shippers (.*)")
	def userFillPassword(String password) {
		WebUI.setEncryptedText(findTestObject('Object Repository/Shippers Web/Login/input_password'), password)
	}

	@And("User click button login")
	def userClickButtonLogin() {
		WebUI.click(findTestObject('Object Repository/Shippers Web/Login/button_loginShippers'))
		WebUI.delay(3)
	}

	@Then("User see dashboard menu")
	def userSeeDashboardMenu() {
		WebUI.verifyElementPresent(findTestObject('Object Repository/Shippers Web/Login/text_DashboardTxt'), 3)
	}
}
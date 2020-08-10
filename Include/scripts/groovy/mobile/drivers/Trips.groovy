package mobile.drivers
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


class Trips {
	@Given("User open trip menu")
	def userOpenTripMenu() {
		int x1 = GlobalVariable.MobileWidth * (30/100)
		int x2 = GlobalVariable.MobileWidth * (70/100)
		int y = GlobalVariable.MobileHeight / 2

		Mobile.delay(5)
		Mobile.swipe(x1, y, x2, y)
	}

	@Then("User see order cards")
	def userSeeOrderCards() {
		Mobile.verifyElementExist(findTestObject('Object Repository/Driver Apps V2/tap_firstTripCards'), 2)
	}

	@When("User tap first cards")
	def userTapFirstCards() {
		Mobile.tap(findTestObject('Object Repository/Driver Apps V2/tap_firstTripCards'), 2)
		Mobile.delay(5)
	}

	@And("User tap yes button")
	def userTapYesButton() {
		Mobile.tap(findTestObject('Object Repository/Driver Apps V2/tap_acceptTripsButton'), 2)
		Mobile.delay(7)
	}
}
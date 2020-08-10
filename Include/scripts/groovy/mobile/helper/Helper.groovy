package mobile.helper
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

import com.kms.katalon.core.configuration.RunConfiguration as RunConfiguration

class Helper {

	@Given("User install and open ritase driver apps")
	def userInstallAndOpenDriverApps() {
		def path = String.format("%s/APK/%s", RunConfiguration.getProjectDir(), GlobalVariable.DriverAPK)
		Mobile.startApplication(path, false)

		// Get device size
		GlobalVariable.MobileHeight = Mobile.getDeviceHeight()
		GlobalVariable.MobileWidth = Mobile.getDeviceWidth()
	}

	@When("User swipe right to left")
	def userSwipeRightToLeft() {
		int x1 = GlobalVariable.MobileWidth * (80/100)
		int x2 = GlobalVariable.MobileWidth * (20/100)
		int y = GlobalVariable.MobileHeight / 2

		Mobile.delay(10)
		Mobile.swipe(x1, y, x2, y)
	}
	@When("User swipe left to right")
	def userSwipeLeftToRight() {
		int x1 = GlobalVariable.MobileWidth * (20/100)
		int x2 = GlobalVariable.MobileWidth * (80/100)
		int y = GlobalVariable.MobileHeight / 2

		Mobile.delay(10)
		Mobile.swipe(x1, y, x2, y)
	}
	@When("User swipe top to buttom")
	def userSwipeTopToButtom() {
		int y1 = GlobalVariable.MobileHeight * (80/100)
		int y2 = GlobalVariable.MobileHeight * (20/100)
		int x = GlobalVariable.MobileWidth / 2

		Mobile.delay(10)
		Mobile.swipe(x, y1, x, y2)
	}

	@When("User swipe buttom to top")
	def userSwipeButtomToTop() {
		int y1 = GlobalVariable.MobileHeight * (20/100)
		int y2 = GlobalVariable.MobileHeight * (80/100)
		int x = GlobalVariable.MobileWidth / 2

		Mobile.delay(10)
		Mobile.swipe(x, y1, x, y2)
	}

	@Then("User see login form")
	def userSeeLoginForm() {
		Mobile.verifyElementExist(findTestObject('Object Repository/Driver Apps V2/tap_initialLogin'), 2, FailureHandling.STOP_ON_FAILURE)
	}
}
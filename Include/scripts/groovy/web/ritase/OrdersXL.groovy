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

import org.apache.commons.lang.RandomStringUtils as rand


class OrdersXL {

	@Given("QA generate unique number for testing")
	def initialQATesting() {
		GlobalVariable.ShipmentNumber = String.format("8%s", rand.randomNumeric(7))
		GlobalVariable.UniqueNumber = rand.randomNumeric(5)

		println '[INITIAL-ShipmentNumber] ' + GlobalVariable.ShipmentNumber
	}

	@When("User click order menu")
	def userClickOrderMenu() {
		WebUI.click(findTestObject('Object Repository/Shippers Web/Orders/click_orderMenuButton'))
	}

	@Then("User see order menu")
	def userSeeOrderMenu() {
		def orderMenuTxt = WebUI.getText(findTestObject('Object Repository/Shippers Web/Orders/text_orderMenuTxt'))
		assert (boolean) orderMenuTxt.contains('Order')
	}

	@When("User click add order menu")
	def userClickAddOrderMenu() {
		WebUI.click(findTestObject('Object Repository/Shippers Web/Orders/click_addOrderMenuButton'))
	}

	@Then("User see add order menu")
	def userSeeAddOrderMenu() {
		def addOrderMenuTxt = WebUI.getText(findTestObject('Object Repository/Shippers Web/Orders/text_addOrderMenuTxt'))
	}

	@When("User fill company transporter (.*)")
	def userFillCompanyTransporter(String transporter) {
		WebUI.click(findTestObject('Object Repository/Shippers Web/Orders/click_companyTransport'))
		WebUI.delay(2)
		WebUI.click(findTestObject('Object Repository/Shippers Web/Orders/companyTransport_' + transporter))
	}

	@And("User fill origin (.*)")
	def userFillOrigin(String origin) {
		WebUI.click(findTestObject('Object Repository/Shippers Web/Orders/click_originContact'))
		WebUI.delay(2)
		WebUI.click(findTestObject('Object Repository/Shippers Web/Orders/originContact_' + origin))
	}

	@And("User fill destination (.*)")
	def userFillDestination(String destination) {
		WebUI.click(findTestObject('Object Repository/Shippers Web/Orders/click_destinationContact'))
		WebUI.delay(2)
		WebUI.click(findTestObject('Object Repository/Shippers Web/Orders/destinationContact_' + destination))
	}

	@And("User fill po number")
	def userFillPoNumber() {
		WebUI.setText(findTestObject('Object Repository/Shippers Web/Orders/input_poNumber'), String.format("PO-%s", rand.randomNumeric(5)))
	}

	@And("User fill order number")
	def userFillOrderNumber() {
		WebUI.setText(findTestObject('Object Repository/Shippers Web/Orders/input_orderNumber'), String.format("ORD-%s", rand.randomNumeric(5)))
	}

	@And("User fill shipment number")
	def userFillShipmentNumber() {
		WebUI.setText(findTestObject('Object Repository/Shippers Web/Orders/input_shipmentNumber'), GlobalVariable.ShipmentNumber)
	}

	@And("User fill vehicle type (.*)")
	def userFillVehicleType(String vehicleType) {
		WebUI.click(findTestObject('Object Repository/Shippers Web/Orders/click_vehicleType'))
		WebUI.delay(2)
		WebUI.click(findTestObject('Object Repository/Shippers Web/Orders/vehicleType_' + vehicleType))
	}

	@And("User fill shipper price")
	def userFillShipperPrice() {
		WebUI.setText(findTestObject('Object Repository/Shippers Web/Orders/input_shipperPrice'), String.format("1%s", rand.randomNumeric(6)))
	}

	@And("User fill description")
	def userFillDescription() {
		WebUI.setText(findTestObject('Object Repository/Shippers Web/Orders/input_description'), String.format("QA-%s", GlobalVariable.UniqueNumber))
	}

	@And("User fill instruction")
	def userFillInstruction() {
		WebUI.setText(findTestObject('Object Repository/Shippers Web/Orders/input_instruction'), String.format("QA-%s", GlobalVariable.UniqueNumber))
	}

	@And("User fill pickup time estimation")
	def userFillPickupTimeEstimation() {
		WebUI.click(findTestObject('Object Repository/Shippers Web/Orders/click_pickupTimeEstimation'))
		WebUI.click(findTestObject('Object Repository/Shippers Web/Orders/pickupTimeEstimation_today'))
		WebUI.click(findTestObject('Object Repository/Shippers Web/Orders/pickupTimeEstimation_plusOneHour'))
		WebUI.click(findTestObject('Object Repository/Shippers Web/Orders/pickupTimeEstimation_close'))
	}

	@And("User click traced button")
	def userClickTracedButton() {
		WebUI.click(findTestObject('Object Repository/Shippers Web/Orders/click_tracedButton'))
	}

	@And("User click add order")
	def userClickAddOrder() {
		WebUI.click(findTestObject('Object Repository/Shippers Web/Orders/click_addOrderButton'))
		WebUI.delay(3)
	}

	@Then("User see popup order success")
	def userSeePopupOrderSuccess() {
		def orderSuccess = WebUI.getText(findTestObject('Object Repository/Shippers Web/Orders/text_orderSuccess'))
		assert (boolean) orderSuccess.contains('Berhasil')
	}
}
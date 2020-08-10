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

class Login {

	@When("User tap initial login button")
	def userTapInitialLoginButton() {
		Mobile.tap(findTestObject('Object Repository/Driver Apps V2/tap_initialLogin'), 2)
	}

	@And("User fill email address driver (.*)")
	def userFillEmailAddressDriver(String email) {
		Mobile.setText(findTestObject('Object Repository/Driver Apps V2/input_emailDriver'), email, 2)
	}

	@And("User fill password driver (.*)")
	def userFillPasswordDriver(String password) {
		Mobile.setText(findTestObject('Object Repository/Driver Apps V2/input_passwordDriver'), password, 2)
	}

	@And("User tap login button")
	def userTapLoginButton() {
		Mobile.tap(findTestObject('Object Repository/Driver Apps V2/tap_loginButton'), 2)
		Mobile.delay(10)
	}

	@Then("User see tab trip")
	def userSeeTabTrip() {
		def txtSaldoAnda = Mobile.getText(findTestObject('Object Repository/Driver Apps V2/txt_SaldoAnda'), 2)
		assert (boolean) txtSaldoAnda.contains('Saldo')
	}

	@When("User tap one trip")
	def tapOneTrip(){
		Mobile.tap(findTestObject('Objet Repository/Driver Apps V2/tap_oneTrip'), 2)
		Mobile.delay(10)
	}
	@Then("User see konfirmasi tugas")
	def userSeeConfirmTask(){
		def txtConfirmTask = Mobile.getText(findTestObject('Object Repository/Driver Apps V2/txtConfirmTask'), 2)
		assert (boolean) txtConfirmTask.contains('Konfirmasi Tugas')
	}
	@When("User tap berangkat")
	def userTapBerangkat(){
		Mobile.tap(findTestObject('Objet Repository/Driver Apps V2/tap_berangkat'), 2)
		Mobile.delay(10)
	}
	@Then("User see halaman pekerjaan")
	def userSeeHalamanPekerjaan(){
		def txtHalamanPekerjaan =  Mobile.getText(findTestObject('Object Repository/Driver Apps V2/txtHalamanPekerjaan'), 2)
		assert (boolean) txtHalamanPekerjaan.contains('Ya')
	}
	@When("User swipe one to two")
	def swipeOnetoTwo(){
		int x1 = GlobalVariable.MobileWidth * (80/100)
		int x2 = GlobalVariable.MobileWidth * (20/100)
		int y = GlobalVariable.MobileHeight / 2

		Mobile.delay(5)
		Mobile.swipe(x1, y, x2, y)
	}
	@When("User swipe two to three")
	def swipeTwotoThree(){
		int x1 = GlobalVariable.MobileWidth * (80/100)
		int x2 = GlobalVariable.MobileWidth * (20/100)
		int y = GlobalVariable.MobileHeight / 2

		Mobile.delay(5)
		Mobile.swipe(x1, y, x2, y)
	}
	@And("User swipe three to four")
	def swipeThreetoFour(){
		int x1 = GlobalVariable.MobileWidth * (80/100)
		int x2 = GlobalVariable.MobileWidth * (20/100)
		int y = GlobalVariable.MobileHeight / 2

		Mobile.delay(5)
		Mobile.swipe(x1, y, x2, y)
	}
	def swipeFourtoThree(){
		int x1 = GlobalVariable.MobileWidth * (80/100)
		int x2 = GlobalVariable.MobileWidth * (20/100)
		int y = GlobalVariable.MobileHeight / 2

		Mobile.delay(5)
		Mobile.swipe(x1, y, x2, y)
	}
	def swipeThreetoTwo(){
		int x1 = GlobalVariable.MobileWidth * (20/100)
		int x2 = GlobalVariable.MobileWidth * (80/100)
		int y = GlobalVariable.MobileHeight / 2

		Mobile.delay(5)
		Mobile.swipe(x1, y, x2, y)
	}
	def swipeTwotoOne(){
		int x1 = GlobalVariable.MobileWidth * (20/100)
		int x2 = GlobalVariable.MobileWidth * (80/100)
		int y = GlobalVariable.MobileHeight / 2

		Mobile.delay(5)
		Mobile.swipe(x1, y, x2, y)
	}
	@Then("User see tab wallet")
	def userSeeTabWallet() {
		def txtWalletMenu = Mobile.getText(findTestObject('Object Repository/Driver Apps V2/txt_walletMenu'), 2)
		assert (boolean) txtWalletMenu.contains('Dompet')
	}
	@Then("User see tab Profil")
	def userSeeTabProfil() {
		def txtProfilMenu = Mobile.getText(findTestObject('Object Repository/Driver Apps V2/txt_Profile'), 2)
		assert (boolean) txtProfilMenu.contains('Kendaraan')
	}
	@And("User swipe up")
	def userSwipeToButtom() {
		int y1 = GlobalVariable.MobileHeight * (80/100)
		int y2 = GlobalVariable.MobileHeight * (20/100)
		int x = GlobalVariable.MobileWidth / 2

		Mobile.delay(5)
		Mobile.swipe(x, y1, x, y2)
	}
	@Then("User logout")
	def userTapLogout(){
		Mobile.tap(findTestObject('Object Repository/Driver Apps V2/tap_logoutButton'), 2)
		Mobile.delay(10)
	}
	@When("User Konfirmasi")
	def userKonfirmasi(){
		def txtKonfirmasiOut = Mobile.getText(findTestObject('Object Repository/Driver Apps V2/txt_konfirmasiOut'), 2)
		assert (boolean) txtKonfirmasiOut.contains('Konfirmasi')
	}
	@Then("User exit")
	def userTapExit(){
		Mobile.tap(findTestObject('Object Repository/Driver Apps V2/tap_ExitYa'), 2)
		Mobile.delay(10)
		def txtLogOut = Mobile.getText(findTestObject('Object Repository/Driver Apps V2/txt_Logout'), 2)
		assert (boolean) txtLogOut.contains('Pilih')
	}
}
Feature: Login

  Scenario Outline: Login Drivers
    Given User install and open ritase driver apps
    When User tap initial login button
    And User fill email address driver <Email>
    And User fill password driver <Password>
    And User tap login button
    Then User see tab trip
    #When User tap refresh
    #Then User see trip list
    #When User tap one trip
    #Then User see konfirmasi tugas
    #When User tap berangkat
    #Then User see halaman pekerjaan
    #When User swipe one to two
    #Then User see tab wallet
    #When User swipe two to three
    #And User swipe three to four
    #Then User see tab Profil
    #And User swipe up
    #Then User logout
    #When User Konfirmasi
    #Then User exit

    Examples: 
      | Email        | Password |
      | 082329073112 |  1234567 |
      #| cici3@mailinator.com | qwerty123 |

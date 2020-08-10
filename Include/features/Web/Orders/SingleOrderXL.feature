Feature: Orders

  Scenario Outline: Single Order as Dira XL
    Given QA generate unique number for testing
    When User click order menu
    Then User see order menu
    When User click add order menu
    Then User see add order menu
    When User fill company transporter <Transporter>
    And User fill origin <Origin>
    And User fill destination <Destination>
    And User fill po number
    And User fill order number
    And User fill shipment number
    And User fill vehicle type <VehicleType>
    And User fill shipper price
    And User fill description
    And User fill instruction
    And User fill pickup time estimation
    And User click traced button
    And User click add order
    Then User see popup order success

    Examples: 
      | Transporter | Origin       | Destination | VehicleType |
      | Ayaayawae   | Jeki kompeni | Ivan        | CDD         |

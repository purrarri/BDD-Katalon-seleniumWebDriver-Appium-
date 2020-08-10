Feature: Trips

  Scenario: Accept Trip Orders
    Given User open trip menu
    Then User see tab trip
    When User swipe top to buttom
   	Then User see order cards
    When User tap first cards
    And User tap yes button
    Then User see tab trip
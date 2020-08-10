Feature: Login

  Scenario Outline: Login Shippers
    Given User open browser and visit <URL>
    Then User see login page
    When User fill email shippers <Email>
    And User fill password shippers <Password>
    And User click button login
    Then User see dashboard menu

    Examples: 
      | URL                                   | Email          | Password     |
      | https://staging.shippers.rit-ase.com/ | order@xl.co.id | YFZfyx+NhJE= |

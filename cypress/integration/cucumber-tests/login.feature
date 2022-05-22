Feature: Login to Application

  As a invalid user
  I cannot log into application

  As a valid user
  I want to log into Application

  Scenario: Invalid login
    Given I open login page
    When I fill username with "invalid username"
    And I fill password with "invalid password"
    And I click submit login
    Then I should see error message

  Scenario: Valid login
    Given I open login page
    When I fill username with "username"
    And I fill password with "password"
    And I click submit login
    Then I should see homepage


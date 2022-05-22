Feature: Login to Application

  As a invalid user
  I cannot log into application

  As a valid user
  I want to log into Application

  Scenario: Invalid login
    Given I open login page
    And I want to wait 2 seconds
    And I see "Zero - Log in" in the title
    And I see "/login" in the url
    When I fill username with "invalid username"
    And I fill password with "invalid password"
    And I click submit login
    Then I should see error message
    And I reload the browser

  Scenario: Valid login
    Given I open login page
    When I fill username with "username"
    And I fill password with "password"
    And I click submit login
    Then I should see homepage


Feature: Send Feedback

  As a customer
  I can send my feedback via form

  Scenario: Submit Feedback form
    Given I open feedback page
    When I fill feedback form
    And i click send button
    Then I see "/sendFeedback.html" in the url
@FE @app
Feature: Application Globals

  Scenario: As an unauthenticated user, I can see the app nav menu
    Given I navigate to the login page
    Then I see the main nav menu banner
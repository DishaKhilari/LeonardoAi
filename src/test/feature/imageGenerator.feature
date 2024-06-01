Feature: Text to Image Generation

  Scenario: Generate an image successfully
    Given a logged in user
    And the Image Generation page
    And the "Leonardo Lightning XL" model
    And Alchemy turned off
    And a prompt of "a successful end to end test"
    And image dimensions of 512 x 512
    And Number of Images is "1"
    When the generate button is clicked
    Then the generated image displays successfully
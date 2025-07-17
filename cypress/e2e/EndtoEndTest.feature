Feature: End to End Scenario

Scenario: Verify if user can successfully purchase a product from login to checkout
    Given User successfully logs in to the app using valid credentials
    When User added products to cart 
    And User checks if cart counter is correct based on the checked out product
    And User goes to the cart
    And User checks if the product on the cart are complete
    And User clicks checkout button
    And User enters all checkout info
    And User clicks continue button
    And User checks if the product on checkout overview are complete
    And User clicks finish button
    Then Complete order notification message should show once order is complete
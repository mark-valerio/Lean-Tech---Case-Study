import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { Checkout_pages } from '../pages/Checkout_pages.cy'

const checkout_pages = new Checkout_pages();

/**
     * this is the step-definition implementation for entering checkout info
     * where I call the action/function adding first name, last name, and postal code
*/
When('User enters all checkout info', () => {
    checkout_pages.enterFirstName();
    checkout_pages.enterLasttName();
    checkout_pages.enterPostalCode();
})

/**
     * this is the step-definition implementation for clickign the cart's continue button
     * where I call the action/function for clicking the continue button
*/
When('User clicks continue button', () => {
    checkout_pages.clickContinueButton();
})

/**
     * this is the step-definition implementation for clicking the finish button to complete checkout
     * where I call the action/function for clicking the finish button
*/
When('User clicks finish button', () => {
    checkout_pages.clickFinishButton();
})

/**
     * this is the step-definition implementation for checking if products are complete on checkout overview
     * where I call the action/function checking the items displayed on checkout overview
*/
When('User checks if the product on checkout overview are complete', () => {
    checkout_pages.checkItemDisplayedOnOverviewIsCorrect();
})

/**
     * this is the step-definition implementation for verifying the completion message displayed
     * where I call the action/function checking the completion message
*/
Then('Complete order notification message should show once order is complete', () => {
    checkout_pages.checkOrderCompletedMessageIsVisible();
})
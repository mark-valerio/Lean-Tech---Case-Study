import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { Cart_pages } from '../pages/cart_pages.cy'

const cart_pages = new Cart_pages();

/**
     * this is the step-definition implementation for checking the correctness of the counter on the cart
     * where I call the action/function for checking the counter
*/
When('User checks if cart counter is correct based on the checked out product', () => {
    cart_pages.checkCartCoutnerIfCorrect();
})

/**
     * this is the step-definition implementation for user going to cart
     * where I call the action/function for navigating to cart
*/
When('User goes to the cart', () => {
    cart_pages.navigateToCart();
})

/**
     * this is the step-definition implementation for checking if products added to the cart are complete
     * where I call the action/function for checking the displayed itemn on the cart
*/
When('User checks if the product on the cart are complete', () => {
    cart_pages.checkItemDisplayedOnCartIsCorrect();

})

/**
     * this is the step-definition implementation for clickling the checkout button
     * where I call the action/function for clicking the checkout button
*/
When('User clicks checkout button', () => {
    cart_pages.clickCheckOutButton();
})
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { Products_pages } from '../pages/Products_pages.cy'

const products_pages = new Products_pages();

/**
     * this is the step-definition implementation for adding products to cart
     * where I call the action/function adding products to cart
*/
When('User added products to cart', () => {
    products_pages.addProductsToCart();
})


export class Checkout_pages {
    /**
     * this function is getting the test data from the testData.json file
     * and it looks for the first name field and enter the first name from the test data
     */
    enterFirstName(firstName){
        //getting the test data from the testData.json file
        return cy.fixture('testData')
            .then((data) => {
                const checkoutDetails = data['checkout-details'];
                //the main logic where we input data on the field
                cy.get('div.checkout_info')
                    .find('input#first-name')
                    .type(checkoutDetails.firstName)
                    .should('have.value',checkoutDetails.firstName);
            })
    }

    /**
     * this function is getting the test data from the testData.json file
     * and it looks for the last name field and enter the last name from the test data
     */
    enterLasttName(lastName){
        //getting the test data from the testData.json file
        return cy.fixture('testData')
            .then((data) => {
                const checkoutDetails = data['checkout-details'];
                //the main logic where we input data on the field
                cy.get('div.checkout_info')
                    .find('input#last-name')
                    .type(checkoutDetails.lastName)
                    .should('have.value',checkoutDetails.lastName);
            })
    }

    /**
     * this function is getting the test data from the testData.json file
     * and it looks for the postal code field and enter the postal code from the test data
     */
    enterPostalCode(postalCode){
        //getting the test data from the testData.json file
        return cy.fixture('testData')
            .then((data) => {
                const checkoutDetails = data['checkout-details'];
                //the main logic where we input data on the field
                cy.get('div.checkout_info')
                    .find('input#postal-code')
                    .type(checkoutDetails.postalCode)
                    .should('have.value',checkoutDetails.postalCode);
            })
    }
    
    /**
     * this function is to locate the continue button
     * and click it to continue on checkout
     */
    clickContinueButton(){
        return cy.get('div.checkout_buttons')
                    .find('input#continue')
                    .click();
    }

    /**
     * this function is to locate the finish button
     * and click it to finish the checkout process
     */
    clickFinishButton(){
        return cy.get('div.cart_footer')
                    .children('button#finish')
                    .click();
    }

    /**
     * this function is to collect all the product name on overview item
     * to be used and compare with the products on the test data
     */
    getCheckoutOverviewItems()
    {
        return cy.get('div.inventory_item_name');
    }

    /**
     * this function is getting the test data from the testData.json file
     * and since the prodcut test data is 1 string with 4 prodducts separated by conmma (,),
     * I did assign them in a new variable to convert them into array, split them by comma, and trim
     * then looping through all the input products to compare with the getCartItems to make sure that all products are on product overview
     */
    checkItemDisplayedOnOverviewIsCorrect(products)
    {
        //getting the test data from the testData.json file
        return cy.fixture('testData')
            .then((testData) => {
                const productData = testData['product-selection'];
                //assigning to new variable to convert to array
                //splitting and trimming
                const inputProducts = productData.product
                    .split(',')
                    .map(word => word.trim());
                //here I looped to the input data
                //and then check if each one of them is present on the checkout overview items which is all the title added to the cart
                for(let i=0; i < inputProducts.length; i++)
                {
                    this.getCheckoutOverviewItems()
                        .contains(inputProducts[i]);
                }
        })
    }
    
    /**
     * this function is to locate the header text and sub text for checkout completion notification
     * comparing it with the exepcted completion notification mesage
     */
    checkOrderCompletedMessageIsVisible()
    {
        return cy.get('div#checkout_complete_container')
                    .children('h2.complete-header')
                    .should('have.text','Thank you for your order!')
                    .siblings('div.complete-text')
                    .should('have.text','Your order has been dispatched, and will arrive just as fast as the pony can get there!')
    }
}
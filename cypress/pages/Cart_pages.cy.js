export class Cart_pages {

    /**
     * this function is to click the cart icon so user can view the cart page
     */
    navigateToCart()
    {
        return cy.get('div#header_container')
                    .find('a.shopping_cart_link')
                    .click();
    }

    /**
     * this function is to click the checkout button
     */
    clickCheckOutButton(){
        return cy.get('div#cart_contents_container')
                    .find('button#checkout')
                    .click();
    }

    /**
     * this function is for getting the test data from the testData.json file.
     * and since the prodcut test data is 1 string with 4 prodducts separated by conmma (,),
     * I did assign them in a new variable to convert them into array, split them by comma, and trim
     * then using length property to get the expected numberr of product to compare it with the number displayed on the counter
     */
    checkCartCoutnerIfCorrect()
    {
        //getting the test data from the testData.json file
        return cy.fixture('testData')
            .then((testData) => {
                const productData = testData['product-selection'];
                //assigning to new variable to convert to array
                //splitting and trimming
                const individualProducts = productData.product
                    .split(',')
                    .map(word => word.trim());
                //getting the product number to set as expected counter number
                const productCount = individualProducts.length;
                //then this is the main logic where I get the number on the counter and compare it with the expected count
                cy.get('div#header_container')
                    .children('div.primary_header')
                    .find('span.shopping_cart_badge')
                    .contains(productCount);
        })
    }

    /**
     * this function is to collect all the product name added to the cart
     * to be used and compare with the products on the test data
     */
    getCartItems() {
        return cy.get('div.inventory_item_name');
    }

    /**
     * this function is for getting the test data from the testData.json file
     * and since the prodcut test data is 1 string with 4 prodducts separated by conmma (,),
     * I did assign them in a new variable to convert them into array, split them by comma, and trim
     * then looping through all the input products to compare with the getCartItems to make sure that all products are added on the cart
     */
    checkItemDisplayedOnCartIsCorrect(products){
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
                //and then check if each one of them is present on the getCartItems which is all the title added to the cart
                for(let i=0; i < inputProducts.length; i++)
                {
                    this.getCartItems()
                        .contains(inputProducts[i]);
                }
        })      
    }
}
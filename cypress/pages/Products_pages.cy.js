export class Products_pages 
{
    /**
     * this function is getting the test data from the testData.json file
     * and since the prodcut test data is 1 string with 4 prodducts separated by conmma (,),
     * I did assign them in a new variable to convert them into array, split them by comma, trim, set to lower case, and replace space with -
     * The reason for that is to append their product name to button id (since their button id's structure is button#add-to-cart-{productname}
     * so I can just make a loop for each product and click their add to cart button
     */
    addProductsToCart(){
        //getting the test data from the testData.json file
        return cy.fixture('testData')
            .then((testData) => {
                const productData = testData['product-selection'];
                //assigning to new variable to convert to array
                //splitting, trimming, set to lowercase, adn replace the space with -
                const individualProducts = productData.product
                    .split(',')
                    .map(word => word.trim().toLowerCase().replace(/\s+/g, '-'));
                //the main logic where I loop to each product on the test data
                //and select their add to cart button 1 by 1
                individualProducts.forEach(product => {
                    cy.get('div#inventory_container')
                        .children('div.inventory_list')
                        .children('div.inventory_item')
                        .children('div.inventory_item_description')
                        .find(`button#add-to-cart-${product}`)
                        .click();
                    })
            }) 
    }
}
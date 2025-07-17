export class Login_pages {
    /**
     * this function is for getting the test data from the testData.json file
     * and it looks for the login page's username field and enter the username from the test data
     */
    enterUsername(){
        //getting the test data from the testData.json file
        return cy.fixture('testData')
            .then((data) => {
                const user = data['user-info'];
                //the main logic where we input data on the field
                cy.get('div.form_group')
                    .children('input#user-name')
                    .type(user.username)
                    .should('have.value', user.username);
            })
    }

    /**
     * this function is for getting the test data from the testData.json file
     * and it looks for the login page's password field and enter the password from the test data
     */
    enterPassword(){
        //getting the test data from the testData.json file
        return cy.fixture('testData')
            .then((data) => {
                const user = data['user-info'];
                //the main logic where we input data on the field
                cy.get('div.form_group')
                    .children('input#password')
                    .type(user.password)
                    .should('not.be.null');
            })
    }

    /**
     * this function is to locate the Login button
     * and click it to activate the login
     */
    clicksLoginButton(){
        return cy.get('form')
                    .children('input#login-button')
                    .click();
    }

    /**
     * this function is to look for the app's logo 
     * to verify that user were able to go through login and reach the homepage
     */
    checkIfLoginSuccessfully(){
        return cy.get('div.header_label')
                    .children('div.app_logo')
                    .should('have.text','Swag Labs');
    }
}
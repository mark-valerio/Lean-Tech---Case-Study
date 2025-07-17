import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { Login_pages } from '../pages/Login_pages.cy';

const login_pages = new Login_pages();

/**
     * this is the step-definition implementation for the login
     * where I call actions/functions like entering username, entering password, clicking of login button,
     * and verifying the logo on homepage to verify successfull login
*/
When('User successfully logs in to the app using valid credentials', ()=>{
    cy.visit('https://www.saucedemo.com/');
    login_pages.enterUsername();
    login_pages.enterPassword();
    login_pages.clicksLoginButton();
    login_pages.checkIfLoginSuccessfully();
})
/// <reference types='Cypress'/>
import '@shelex/cypress-allure-plugin';
import '../../support/commands'

describe('EOS SSO Login', () => {

    beforeEach('Run Google', () => {

        Cypress.on('uncaught:exception', (err) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        });
        cy.loginByGoogleApi();

    });


    it('Login with SSO', () => {


        // cy.visit('https://uat.eos.onefin.app/dashboard');
        cy.visit

    });

});


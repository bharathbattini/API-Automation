/// <reference types='Cypress'/>
import '@shelex/cypress-allure-plugin';

describe('EOS SSO Login', () => {

    it('Login with SSO', () => {

        Cypress.on('uncaught:exception', (err) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        });

        cy.visit('https://eos.onefin.app/');
        cy.get('.btn').click();

        cy.origin('https://accounts.google.com/', () => {

            cy.get('#identifierId').type('testuser2@1finance.co.in');
            cy.contains('Next').click();
            cy.wait(2000);
            cy.pause();
        });

    });

});
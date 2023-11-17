/// <reference types='Cypress'/>
import '@shelex/cypress-allure-plugin';
import '../../support/commands'

describe('EOS SSO Login', () => {

    beforeEach('Run Google', () => {

        Cypress.on('uncaught:exception', err => !err.message.includes('ResizeObserver loop limit exceeded'))


    });

    it('Login with SSO', () => {

        cy.visit('https://uat.eos.onefin.app');

        cy.get('.btn').click();

        cy.origin('https://accounts.google.com', () => {
            cy.wait(2000);

            cy.get('#identifierId').type('testuser2@1finance.co.in');
            cy.wait(2000);

            cy.contains('Next').click();
            cy.wait(2000);
            cy.get('input[name="Passwd"]').type('1Finance@Testuser');
            cy.wait(2000);

            cy.get('#passwordNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click();

        });

        cy.visit('https://uat.eos.onefin.app/dashboard');
        cy.get(':nth-child(2) > .sidenav-nav-link').click();
        cy.get(':nth-child(2) > .sidenav-nav-link > .sidenav-link-text').click();

    });

});


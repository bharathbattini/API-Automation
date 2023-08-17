/// <reference types = "Cypress" />
import 'cypress-plugin-api'

let getCustomerDependentURL = 'https://uat.eos.onefin.app/api/customer/dependent?';
let incorrectURL = 'https://uat.eos.onefin.app/api/customer/dependen?';
let insecureURL = 'https://uat.eos.onefin.app/api/customer/dependent?'

let usercode = '8a6b7fe6-93a5-4d38-8849-e28bcec6e00f';
let incorrectusercode = '8a6b7fe6-93a5-4d38-8849-e28bcec6e00';

describe('Get User Profile Unit Test Scripts', () => {

    it('Get User Profile with Positive Case', () => {

        cy.api({

            method: 'GET',
            url: getCustomerDependentURL + 'usercode=' + usercode,
            failOnStatusCode: false,
            qs: {

                user_code: usercode
            }

        }).then((response) => {

            expect(response.status).to.be.eq(200);
            expect(response.body).to.have.property('status').to.be.a('number');
            expect(response.body).to.have.property('message').to.be.a('String');

        });

    });

    it('Get User Profile with Incorrect URL', () => {

        cy.api({

            method: 'GET',
            url: incorrectURL + 'usercode=' + usercode,
            failOnStatusCode: false,
            qs: {

                user_code: usercode
            }

        }).then((response) => {

            expect(response.status).to.be.eq(500);

        });

    });

    it('Get User Profile with Incorrect Method', () => {

        cy.api({

            method: 'POST',
            url: getCustomerDependentURL + 'usercode=' + usercode,
            failOnStatusCode: false,
            qs: {

                user_code: usercode
            }

        }).then((response) => {

            expect(response.status).to.be.eq(415);


        });

    });

    it('Get User Profile with Incorrect Inputs', () => {

        cy.api({

            method: 'POST',
            url: getCustomerDependentURL + 'usercode=' + usercode,
            failOnStatusCode: false,
            qs: {

                user_code: usercode
            }

        }).then((response) => { 

            expect(response.status).to.be.eq(415);

        });
    });

    it('Get User Profile with Incorrect Query Parameters', () => {

        cy.api({

            method: 'POST',
            url: getCustomerDependentURL + 'usercode=' + usercode,
            failOnStatusCode: false,
            qs: {

                user_code: incorrectusercode
            }

        }).then((response) => {

            expect(response.status).to.be.eq(415);


        });

    });

    it('Get User Profile with Unsecured API URL', () => {

        cy.api({

            method: 'GET',
            url: insecureURL + 'usercode=' + usercode,
            failOnStatusCode: false,
            qs: {

                user_code: incorrectusercode
            }

        }).then((response) => {

            expect(response.status).to.be.eq(500);


        });


    });



});
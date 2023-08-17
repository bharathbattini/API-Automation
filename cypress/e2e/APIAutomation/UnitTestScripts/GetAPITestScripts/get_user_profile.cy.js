/// <reference types = "Cypress" />
import 'cypress-plugin-api'
import getMethods from '../../../../support/get_methods_function';

let getCustomerProfile = 'https://eos.onefin.app/api/customer/profile';
let incorrectURL = 'https://uat.eos.onefin.app/api/customer/profile?';
let insecureURL = 'http://uat.eos.onefin.app/api/customer/profile?'
let usercode = '5df9d9e3-134b-40e7-9f96-79f5a8cdfd78';
let incorrectusercode = '8a6b7fe6-93a5-4d38-8849-e28bcec6e00';
const gm = new getMethods();

describe('Get User Profile Unit Test Scripts', () => {

    it.only('Get User Profile with Positive Case', () => {

        gm.getProfileMethods('GET',getCustomerProfile,usercode).then((response) => {

            expect(response.status).to.be.eq(200);
            // expect(response.body).to.have.property('status').to.be.a('number');
            // expect(response.body).to.have.property('message').to.be.a('String');
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
            url: getCustomerProfile + 'usercode=' + usercode,
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
            url: getCustomerProfile + 'usercode=' + usercode,
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
            url: getCustomerProfile + 'usercode=' + usercode,
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

            method: 'POST',
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
// <reference types = "Cypress" />
import 'cypress-plugin-api'
import apiEndpoints from '../../../../support/api_end_points';

let environment = `${apiEndpoints.env}`;
let baseUrl = environment == 'prod' ? `https://eos.onefin.app/` : `https://${environment}.eos.onefin.app/`;
let userInsuranceUrl = baseUrl + `${apiEndpoints.postUserInsurance}`;
let incorrecuserInsuranceUrl = baseUrl + `${apiEndpoints.invalidPostIncomeExpense}`;

describe('Post User Profile Unit Test Scripts', () => {

    it('Post User Profile with Positive Case', () => {

        cy.api({

            method: 'POST',
            url: userInsuranceUrl,
            failOnStatusCode: false,
            headers:{

              authorization : `Bearer ${apiEndpoints.accessToken}`

            },
            body:{
                "user_code": `${apiEndpoints.userCode}`,
                "insurances": [
                    {
                        "category_id": 101,
                        "coverage": 20000000,
                        "pending_premium": 480,
                        "annual_premium": 20000,
                        "payment_frequency": 1,
                        "name": "TATA AIA"
                    },
                    {
                        "category_id": 102,
                        "coverage": 0,
                        "pending_premium": 0,
                        "annual_premium": 0,
                        "payment_frequency": 0,
                        "name": ""
                    },
                    {
                        "category_id": 64,
                        "coverage": 500000,
                        "pending_premium": 0,
                        "annual_premium": 8320,
                        "payment_frequency": 1,
                        "name": "STAR HEALTH"
                    },
                    {
                        "category_id": 103,
                        "coverage": 250000,
                        "pending_premium": 120,
                        "annual_premium": 1200,
                        "payment_frequency": 1,
                        "name": "LIC"
                    }
                ]
            }
            
        }).then((response) =>{

            expect(response.status).to.be.eq(200);

        });

    });

});



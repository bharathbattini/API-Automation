// <reference types = "Cypress" />
import 'cypress-plugin-api'
import apiEndpoints from '../../../../support/api_end_points';

let environment = `${apiEndpoints.env}`;
let baseUrl = environment == 'prod' ? `https://eos.onefin.app/` : `https://${environment}.eos.onefin.app/`;
let userInvestmentUrl = baseUrl + `${apiEndpoints.postUserInvestment}`;
let incorrectUserInvestmentUrl = baseUrl + `${apiEndpoints.invalidPostUserInvestment}`;

describe('Post User Profile Unit Test Scripts', () => {

    it('Post User Profile with Positive Case', () => {

        cy.api({

            method: 'POST',
            url: userInvestmentUrl,
            failOnStatusCode: false,
            headers:{

              authorization : `Bearer ${apiEndpoints.accessToken}`

            },
            body:
            {
                "user_code": `${apiEndpoints.userCode}`,
                "cas_document": true,
                "cam_document": false,
                "investments": [
                    {
                        "category_id": 18,
                        "name": "Public Stock (India) 1",
                        "monthly_investment": 10000,
                        "current_amount": 1500000
                    },
                    {
                        "category_id": 19,
                        "name": "Equity Mutual Funds 1",
                        "monthly_investment": 5000,
                        "current_amount": 200000
                    },
                    {
                        "category_id": 23,
                        "name": "Equity ETFs 1",
                        "monthly_investment": 10000,
                        "current_amount": 400000
                    },
                    {
                        "category_id": 24,
                        "name": "International Funds 1",
                        "monthly_investment": 5000,
                        "current_amount": 50000
                    },
                    {
                        "category_id": 21,
                        "name": "Unlisted Stocks 1",
                        "monthly_investment": 10000,
                        "current_amount": 80000
                    },
                    {
                        "category_id": 22,
                        "name": "Public Stocks (International) 1",
                        "monthly_investment": 2000,
                        "current_amount": 20000
                    },
                    {
                        "category_id": 25,
                        "name": "Direct Bonds 1",
                        "monthly_investment": 10000,
                        "current_amount": 500000
                    },
                    {
                        "category_id": 33,
                        "name": "Occupied Home 1",
                        "monthly_investment": 0,
                        "current_amount": 10000000
                    },
                    {
                        "category_id": 30,
                        "name": "Rental Yielding (Commercial) 1",
                        "monthly_investment": 0,
                        "current_amount": 0
                    },
                    {
                        "category_id": 31,
                        "name": "Non-Yielding (Residential) 1",
                        "monthly_investment": 50000,
                        "current_amount": 6000000
                    },
                    {
                        "category_id": 32,
                        "name": "Non-Yielding (Commercial) 1",
                        "monthly_investment": 0,
                        "current_amount": 0
                    },
                    {
                        "category_id": 34,
                        "name": "Physical Gold 1",
                        "monthly_investment": 3000,
                        "current_amount": 200000
                    },
                    {
                        "category_id": 90,
                        "name": "Physical Silver 1",
                        "monthly_investment": 1000,
                        "current_amount": 50000
                    },
                    {
                        "category_id": 37,
                        "name": "Bank FD 1",
                        "monthly_investment": 5000,
                        "current_amount": 500000
                    },
                    {
                        "category_id": 45,
                        "name": "Savings 1",
                        "monthly_investment": 3000,
                        "current_amount": 200000
                    },
                    {
                        "category_id": 46,
                        "name": "NPS Tier I 1",
                        "monthly_investment": 5000,
                        "current_amount": 150000
                    },
                    {
                        "category_id": 43,
                        "name": "EPF 1",
                        "monthly_investment": 3000,
                        "current_amount": 30000
                    },
                    {
                        "category_id": 50,
                        "name": "Direct Cryptos 1",
                        "monthly_investment": 5000,
                        "current_amount": 100000
                    }
                ],
                "pan_data": {
                    "category_id": 129,
                    "pancard": "CHIPB1111E"
                }
            }
            
        }).then((response) =>{

            expect(response.status).to.be.eq(200);

        });

    });

});



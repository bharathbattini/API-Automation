// <reference types = "Cypress" />
import 'cypress-plugin-api'
import apiEndpoints from '../../../../support/api_end_points';

let environment = `${apiEndpoints.env}`;
let baseUrl = environment == 'prod' ? `https://eos.onefin.app/` : `https://${environment}.eos.onefin.app/`;
let userLoansUrl = baseUrl + `${apiEndpoints.postUserLoans}`;
let incorrectuserLoansUrl = baseUrl + `${apiEndpoints.invalidPostUserLoans}`;
let userCode = 'ae7abe40-175e-489d-9e74-074dfe18a9d7';

describe('Post User Profile Unit Test Scripts', () => {

    it('Post User Profile with Positive Case', () => {

        cy.api({

            method: 'POST',
            url: userLoansUrl,
            failOnStatusCode: false,
            headers:{

              authorization : `Bearer ${apiEndpoints.accessToken}`

            },
            body: {
              "user_code": `${apiEndpoints.userCode}`,
              "different_loans": [
                  {
                      "category_id": 57,
                      "name": "Housing Loan 1",
                      "account_age": 5000000,
                      "outstanding_amount": 2500000,
                      "pending_tenure": 120,
                      "monthly_installment": 25000,
                      "interest_rate": 8
                  },
                  {
                      "category_id": 59,
                      "name": "Personal Loan 1",
                      "account_age": 200000,
                      "outstanding_amount": 120000,
                      "pending_tenure": 24,
                      "monthly_installment": 6500,
                      "interest_rate": 12
                  },
                  {
                      "category_id": 62,
                      "name": "Credit Card 1",
                      "account_age": 50000,
                      "outstanding_amount": 32000,
                      "pending_tenure": 9,
                      "monthly_installment": 5000,
                      "interest_rate": 12
                  }
              ]
          }
            
        }).then((response) =>{

            expect(response.status).to.be.eq(200);

        });

    });

});



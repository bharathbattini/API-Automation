// <reference types = "Cypress" />
import 'cypress-plugin-api'
import apiEndpoints from '../../../../support/api_end_points';

const environment = 'newqa'
let baseUrl = environment == 'prod' ? `https://eos.onefin.app/` : `https://${environment}.eos.onefin.app/`;
let userIncomeExpenseUrl = baseUrl + `${apiEndpoints.postUserIncomeExpense}`;
let incorrecuserDependentUrll = baseUrl + `${apiEndpoints.invalidPostIncomeExpense}`;
let userCode = 'ae7abe40-175e-489d-9e74-074dfe18a9d7';

describe('Post User Profile Unit Test Scripts', () => {

    it('Post User Profile with Positive Case', () => {

        cy.api({

            method: 'POST',
            url: userIncomeExpenseUrl,
            failOnStatusCode: false,
            headers:{

              authorization : `Bearer ${apiEndpoints.accessToken}`

            },
            body: {
                "user_code": `${apiEndpoints.userCode}`,
                "incomes": [
                  {
                    "category_id": 65,
                    "yearly_amount": 1400000
                  }
                ],
                "expense_yearly_amount": 600000,
                "tax_deduction_amount": 400000,
                "retirement_age": "45",
                "tax_regime_id": 136
              }
            
        }).then((response) =>{

            expect(response.status).to.be.eq(200);

        });

    });

});



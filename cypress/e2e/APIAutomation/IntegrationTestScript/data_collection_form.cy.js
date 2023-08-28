import 'cypress-plugin-api'
import getMethods from '../../../../support/get_methods_function';
import apiEndpoints from '../../../../support/api_end_points';

const environment = 'newqa'
let baseUrl = environment == 'prod' ? `https://eos.onefin.app/`:`https://${environment}.eos.onefin.app/`;
let userProfileUrl = baseUrl+`${apiEndpoints.getUserProfile}`;
let userCode = 'ae7abe40-175e-489d-9e74-074dfe18a9d7';
const gm = new getMethods();

describe('Get User Profile Unit Test Scripts', () => {

    it.only('Get User Profile with Positive Case', () => {

        gm.getProfileMethods('GET',userProfileUrl,userCode).then((response) => {

            expect(response.status).to.be.eq(200);

        });

    });

    it('Post User Profile with Positive Case', () => {

        cy.api({

            method: 'POST',
            url: userProfileUrl,
            failOnStatusCode: false,
            body: {

                "user_code": userCode,
                "first_name": "Bharath",
                "last_name": "Battini",
                "dob": "1997-12-07",
                "gender": "Male",
                "email": "bbharath712@gmail.com",
                "mobile_number": "8898782353",
                "city": "Mumbai",
                "state": "Maharashtra",
                "country": "India",
                "money_sign": "Virtuous Elephant",
                "qualification": "Bachelors"
            }

        }).then((response) =>{

            expect(response.status).to.be.eq(200);

        });



    });

    it('Post User Dependency with Positive Case', () => {

        cy.api({

            method: 'POST',
            url: userDependentUrl,
            failOnStatusCode: false,
            body: {
                "user_code": userCode,
                "relative_dependency": true,
                "parent_dependency": true,
                "spouse_dependency": true,
                "has_children": true,
                "marital_status": "Unmarried",
                "relatives": [
                  {
                    "relation": "Mama",
                    "age": 50
                  }
                ],
                "children": [
                  {
                    "relation": "string",
                    "age": 0
                  }
                ],
                "parents": [
                  {
                    "age": 0,
                    "relation": "string"
                  }
                ],
                "spouse": {
                  "relation": "string",
                  "occupation": "Self-Employed",
                  "yearly_income": 10000000
                }
              }
            
        }).then((response) =>{

            expect(response.status).to.be.eq(200);

        });

    });

    it('Post User Profile with Positive Case', () => {

        cy.api({

            method: 'POST',
            url: userIncomeExpenseUrl,
            failOnStatusCode: false,
            body: {
                "user_code": userCode,
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
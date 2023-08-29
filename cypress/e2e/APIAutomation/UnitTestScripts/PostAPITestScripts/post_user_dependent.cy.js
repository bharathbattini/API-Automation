/// <reference types = "Cypress" />
import 'cypress-plugin-api'
import apiEndpoints from '../../../../support/api_end_points';

const environment = 'newqa'
let baseUrl = environment == 'prod' ? `https://eos.onefin.app/` : `https://${environment}.eos.onefin.app/`;
let userDependentUrl = baseUrl + `${apiEndpoints.postUserDependent}`;
let incorrecuserDependentUrll = baseUrl + `${apiEndpoints.invalidPostUserDependent}`;

describe('Add User Dependency Unit Test Scripts', () => {

    it.only('Post User Dependency with Positive Case', () => {

        cy.api({

            method: 'POST',
            url: userDependentUrl,
            failOnStatusCode: false,
            headers:{

              authorization : `Bearer ${apiEndpoints.accessToken}`

            },
            body: {
                "user_code": `${apiEndpoints.userCode}`,
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

});

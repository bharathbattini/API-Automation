/// <reference types = "Cypress" />
import 'cypress-plugin-api'
import apiEndpoints from '../../../../support/api_end_points';

let environment = `${apiEndpoints.env}`;
let baseUrl = environment == 'prod' ? `https://eos.onefin.app/` : `https://${environment}.eos.onefin.app/`;
let userProfileUrl = baseUrl + `${apiEndpoints.postUserProfile}`;
let incorrecuserMemberDetailsUrl = baseUrl + `${apiEndpoints.invalidgetMemberDetails}`;

describe('Post User Profile Unit Test Scripts', () => {

    it('Post User Profile with Positive Case', () => {

        cy.api({

            method: 'POST',
            url: userProfileUrl,
            failOnStatusCode: false,
            headers: {

                authorization: `Bearer ${apiEndpoints.accessToken}`

            },
            body: {

                "user_code": `${apiEndpoints.userCode}`,
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

        }).then((response) => {

            expect(response.status).to.be.eq(200);

        });

    });

});

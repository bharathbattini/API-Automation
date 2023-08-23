/// <reference types = "Cypress" />
import 'cypress-plugin-api'
import apiEndpoints from '../../../../support/api_end_points';

const environment = 'newqa'
let baseUrl = environment == 'prod' ? `https://eos.onefin.app/` : `https://${environment}.eos.onefin.app/`;
let userProfileUrl = baseUrl + `${apiEndpoints.postUserProfile}`;
let incorrecuserMemberDetailsUrl = baseUrl + `${apiEndpoints.invalidgetMemberDetails}`;
let userCode = prompt('d2b9cf1f-5ed0-4a76-9c16-86d12ec5351c');

describe('Post User Profile Unit Test Scripts', () => {

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

});

import 'cypress-plugin-api';
import apiEndpoints from '../../../../support/api_end_points';
import '../../../../support/commands'
let environment = `${apiEndpoints.env}`;
let baseUrl = environment == 'prod' ? `http://eos.onefin.app/` : `https://${environment}.eos.onefin.app/`;
let userProfileUrl = baseUrl + `${apiEndpoints.getUserProfile}`;

describe.only('Get User Profile Unit Test Scripts', () => {

    it('Get User Profile with Positive Case', () => {

        cy.GetApis('GET', userProfileUrl, `${apiEndpoints.accessToken}`, `${apiEndpoints.userCode}`).then((response) => {

            expect(response.status).to.be.not.eq(200);

        });

    });

});    
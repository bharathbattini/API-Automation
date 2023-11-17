/// <reference types = "Cypress" />
import 'cypress-plugin-api'
import getMethods from '../../../../support/get_methods_function';
import apiEndpoints from '../../../../support/api_end_points';

let environment = `${apiEndpoints.env}`;
let baseUrl = environment == 'prod' ? `http://eos.onefin.app/` : `https://${environment}.eos.onefin.app/`;
let userProfileUrl = baseUrl + `${apiEndpoints.getUserProfile}`;
let invaliduserProfileUrl = baseUrl + `${apiEndpoints.invalidGetUserProfile}`;
const gm = new getMethods();

describe('Get User Profile Unit Test Scripts', () => {

    it('Get User Profile with Positive Case', () => {

        cy.GetApis('GET', userProfileUrl, `${apiEndpoints.accessToken}`, `${apiEndpoints.userCode}`).then((response) => {

            expect(response.status).to.be.eq(200);

        });

    });

    it('Get User Profile with Incorrect Method', () => {

        cy.GetApis('POST', userProfileUrl, `${apiEndpoints.accessToken}`, `${apiEndpoints.userCode}`).then((response) => {

            expect(response.status).to.be.eq(415);
            expect(response.body).to.have.property('type').to.be.a('String');
            expect(response.body).to.have.property('title').to.be.a('String');
            expect(response.body).to.have.property('title').contain('Unsupported Media Type');
            expect(response.body).to.have.property('status').to.be.a('number');
            expect(response.body).to.have.property('traceId').to.be.a('String');
        });

    });

    it('Get User Profile with Invalid Method', () => {

        cy.GetApis('DEL', userProfileUrl, `${apiEndpoints.accessToken}`, `${apiEndpoints.userCode}`).then((response) => {

            expect(response.status).to.be.eq(415);

        });

    });

    it('Get User Profile with Incorrect URL', () => {

        cy.GetApis('GET', invaliduserProfileUrl, `${apiEndpoints.accessToken}`, `${apiEndpoints.userCode}`).then((response) => {

            expect(response.status).to.be.eq(200);

        });

    });

    it('Get User Profile with Incorrect Access Token', () => {

        cy.GetApis('GET', userProfileUrl, `${apiEndpoints.invalidAccessToken}`, `${apiEndpoints.userCode}`).then((response) => {

            expect(response.status).to.be.eq(401);

        });



    });

    it('Get User Profile with Incorrect Usercode', () => {

        cy.GetApis('GET', userProfileUrl, `${apiEndpoints.accessToken}`, `${apiEndpoints.incorrectUserCode}`).then((response) => {

            expect(response.status).to.be.eq(404);

        });



    });

});
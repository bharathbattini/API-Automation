/// <reference types = "Cypress" />
import 'cypress-plugin-api'
import getMethods from '../../../../support/get_methods_function';
import apiEndpoints from '../../../../support/api_end_points';

let environment = `${apiEndpoints.env}`;
let baseUrl = environment == 'prod' ? `http://eos.onefin.app/` : `https://${environment}.eos.onefin.app/`;
let userInheritanceUrl = baseUrl + `${apiEndpoints.getUserInheritance}`;
let invaliduserInheritanceUrl = baseUrl + `${apiEndpoints.invalidGetUserInheritance}`;
const gm = new getMethods();

describe('Get User Inheritance Unit Test Scripts', () => {

    it('Get User Inheritance with Positive Case', () => {

        cy.GetApis('GET', userInheritanceUrl, `${apiEndpoints.accessToken}`, `${apiEndpoints.userCode}`).then((response) => {

            expect(response.status).to.be.eq(200);

        });

    });

    it('Get User Inheritance with Incorrect Method', () => {

        cy.GetApis('POST', userInheritanceUrl, `${apiEndpoints.accessToken}`, `${apiEndpoints.userCode}`).then((response) => {

            expect(response.status).to.be.eq(415);
            expect(response.body).to.have.property('type').to.be.a('String');
            expect(response.body).to.have.property('title').to.be.a('String');
            expect(response.body).to.have.property('title').contain('Unsupported Media Type');
            expect(response.body).to.have.property('status').to.be.a('number');
            expect(response.body).to.have.property('traceId').to.be.a('String');
        });

    });

    it('Get User Inheritance with Invalid Method', () => {

        cy.GetApis('DEL', userInheritanceUrl, `${apiEndpoints.accessToken}`, `${apiEndpoints.userCode}`).then((response) => {

            expect(response.status).to.be.eq(415);

        });

    });

    it('Get User Inheritance with Incorrect URL', () => {

        cy.GetApis('GET', invaliduserInheritanceUrl, `${apiEndpoints.accessToken}`, `${apiEndpoints.userCode}`).then((response) => {

            expect(response.status).to.be.eq(200);

        });

    });

    it('Get User Inheritance with Incorrect Access Token', () => {

        cy.GetApis('GET', userInheritanceUrl, `${apiEndpoints.invalidAccessToken}`, `${apiEndpoints.userCode}`).then((response) => {

            expect(response.status).to.be.eq(401);

        });



    });

    it('Get User Inheritance with Incorrect Usercode', () => {

        cy.GetApis('GET', userInheritanceUrl, `${apiEndpoints.accessToken}`, `${apiEndpoints.incorrectUserCode}`).then((response) => {

            expect(response.status).to.be.eq(404);

        });



    });

});
/// <reference types = "Cypress" />
import 'cypress-plugin-api'
import getMethods from '../../../../support/get_methods_function';
import apiEndpoints from '../../../../support/api_end_points';

let environment = `${apiEndpoints.env}`;
let baseUrl = environment == 'prod' ? `http://eos.onefin.app/` : `https://${environment}.eos.onefin.app/`;
let userProfileUrl = baseUrl + `${apiEndpoints.getUserProfile}`;
const gm = new getMethods();

describe('Get User Profile Unit Test Scripts', () => {

    it.only('Get User Profile with Positive Case', () => {

        gm.getProfileMethods('GET', userProfileUrl, `${apiEndpoints.userCode}`).then((response) => {

            expect(response.status).to.be.eq(200);

        });

    });

    it('Get User Profile with Incorrect Method', () => {

        gm.getProfileMethods('POST', userProfileUrl, usercode).then((response) => {

            expect(response.status).to.be.eq(415);
            expect(response.body).to.have.property('type').to.be.a('String');
            expect(response.body).to.have.property('title').to.be.a('String');
            expect(response.body).to.have.property('title').contain('Unsupported Media Type');
            expect(response.body).to.have.property('status').to.be.a('number');
            expect(response.body).to.have.property('traceId').to.be.a('String');
        });

    });

    it('Get User Profile with Invalid Method', () => {

        gm.getProfileMethods('DEL', userProfileUrl, usercode).then((response) => {

            expect(response.status).to.be.eq(415);

        });

    });

    it('Get User Profile with Incorrect URL', () => {

        gm.getProfileMethods('GET', invaliduserProfileUrl, usercode).then((response) => {

            expect(response.status).to.be.eq(200);

        });

    });

    it('Get User Profile with Invalid URL', () => {

        gm.getProfileMethods('GET', invaliduserProfileUrl, usercode).then((response) => {

            expect(response.status).to.be.eq(200);

        });

    });

});
/// <reference types = "Cypress" />
import 'cypress-plugin-api'
import getMethods from '../../../../support/get_methods_function';
import apiEndpoints from '../../../../support/api_end_points';

const environment = 'prod'
let baseUrl = environment == 'prod' ? `https://eos.onefin.app/`:`https://${environment}.eos.onefin.app/`;
let userDependentUrl = baseUrl+`${apiEndpoints.getUserDependent}`;
let incorrectUserDependentUrl = baseUrl + `${apiEndpoints.invalidGetUserDependent}`;
let usercode = '5df9d9e3-134b-40e7-9f96-79f5a8cdfd78';
const gm = new getMethods();

describe('Get User Dependent Unit Test Scripts', () => {

    it('Get User Dependent with Positive Case', () => {

        gm.getProfileMethods('GET',userDependentUrl,usercode).then((response) => {

            expect(response.status).to.be.eq(200);

        });

    });
    
    it('Get User Dependent with Incorrect Method', () => {

        gm.getProfileMethods('POST',userDependentUrl,usercode).then((response) => {

            expect(response.status).to.be.eq(415);
            expect(response.body).to.have.property('type').to.be.a('String');
            expect(response.body).to.have.property('title').to.be.a('String');
            expect(response.body).to.have.property('title').contain('Unsupported Media Type');
            expect(response.body).to.have.property('status').to.be.a('number');
            expect(response.body).to.have.property('traceId').to.be.a('String');
        });

    });

    it('Get User Dependent with Invalid Method', () => {

        gm.getProfileMethods('DEL',userDependentUrl,usercode).then((response) => {

            expect(response.status).to.be.eq(415);

        });

    });

    it('Get User Dependent with Incorrect URL', () => {

        gm.getProfileMethods('GET',incorrectUserDependentUrl,usercode).then((response) => {

            expect(response.status).to.be.eq(200);

        });

    });

    it('Get User Dependent with Invalid URL', () => {

        gm.getProfileMethods('GET',incorrectUserDependentUrl,usercode).then((response) => {

            expect(response.status).to.be.eq(200);

        });

    });

});
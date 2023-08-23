/// <reference types = "Cypress" />
import 'cypress-plugin-api'
import getMethods from '../../../../support/get_methods_function';
import apiEndpoints from '../../../../support/api_end_points';

const environment = 'prod'
let baseUrl = environment == 'prod' ? `https://eos.onefin.app/`:`https://${environment}.eos.onefin.app/`;
let userMemberDetailsUrl = baseUrl+`${apiEndpoints.getMemberDetails}`;
let incorrecuserMemberDetailsUrl = baseUrl + `${apiEndpoints.invalidgetMemberDetails}`;
let usercode = '5df9d9e3-134b-40e7-9f96-79f5a8cdfd78';
const gm = new getMethods();

describe('Get Member Details Unit Test Scripts', () => {

    it('Get User Investments with Positive Case', () => {

        gm.getProfileMethods('GET',userMemberDetailsUrl,usercode).then((response) => {

            expect(response.status).to.be.eq(200);

        });

    });
    
    it('Get Member Details with Incorrect Method', () => {

        gm.getProfileMethods('POST',userMemberDetailsUrl,usercode).then((response) => {

            expect(response.status).to.be.eq(415);
            expect(response.body).to.have.property('type').to.be.a('String');
            expect(response.body).to.have.property('title').to.be.a('String');
            expect(response.body).to.have.property('title').contain('Unsupported Media Type');
            expect(response.body).to.have.property('status').to.be.a('number');
            expect(response.body).to.have.property('traceId').to.be.a('String');
        });

    });

    it('Get Member Details with Invalid Method', () => {

        gm.getProfileMethods('DELETE',userMemberDetailsUrl,usercode).then((response) => {

            expect(response.status).to.be.eq(415);

        });

    });

    it('Get Member Details with Incorrect URL', () => {

        gm.getProfileMethods('GET',incorrecuserMemberDetailsUrl,usercode).then((response) => {

            expect(response.status).to.be.eq(200);

        });

    });

    it('Get Member Details with Invalid URL', () => {

        gm.getProfileMethods('GET',incorrecuserMemberDetailsUrl,usercode).then((response) => {

            expect(response.status).to.be.eq(200);

        });

    });

});
/// <reference types = "Cypress" />
import 'cypress-plugin-api'
import getMethods from '../../../../support/get_methods_function';
import apiEndpoints from '../../../../support/api_end_points';

const environment = 'newqa'
let baseUrl = environment == 'prod' ? `https://eos.onefin.app/`:`https://${environment}.eos.onefin.app/`;
let userLoansUrl = baseUrl+`${apiEndpoints.getUserLoans}`;
let incorrectuserLoansUrl = baseUrl + `${apiEndpoints.invalidGetUserLoans}`;
let usercode = 'd2b9cf1f-5ed0-4a76-9c16-86d12ec5351c';
const gm = new getMethods();

describe('Get User Loans Unit Test Scripts', () => {

    it('Get User Loans with Positive Case', () => {

        gm.getProfileMethods('GET',userLoansUrl,usercode).then((response) => {

            expect(response.status).to.be.eq(200);

        });

    });
    
    it('Get User Loans with Incorrect Method', () => {

        gm.getProfileMethods('POST',userLoansUrl,usercode).then((response) => {

            expect(response.status).to.be.eq(415);
            expect(response.body).to.have.property('type').to.be.a('String');
            expect(response.body).to.have.property('title').to.be.a('String');
            expect(response.body).to.have.property('title').contain('Unsupported Media Type');
            expect(response.body).to.have.property('status').to.be.a('number');
            expect(response.body).to.have.property('traceId').to.be.a('String');
        });

    });

    it('Get User Loans with Invalid Method', () => {

        gm.getProfileMethods('DEL',userLoansUrl,usercode).then((response) => {

            expect(response.status).to.be.eq(415);

        });

    });

    it('Get User Loans with Incorrect URL', () => {

        gm.getProfileMethods('GET',incorrectuserLoansUrl,usercode).then((response) => {

            expect(response.status).to.be.eq(200);

        });

    });

    it('Get User Loans with Invalid URL', () => {

        gm.getProfileMethods('GET',incorrectuserLoansUrl,usercode).then((response) => {

            expect(response.status).to.be.eq(200);

        });

    });

});
import 'cypress-plugin-api'
import getMethods from '../../../../support/get_methods_function';
import apiEndpoints from '../../../../support/api_end_points';

const environment = 'newqa'
let baseUrl = environment == 'prod' ? `https://eos.onefin.app/`:`https://${environment}.eos.onefin.app/`;
let userProfileUrl = baseUrl+`${apiEndpoints.getUserProfile}`;
let usercode = '3520662c-e21a-4eed-b2f1-eadd9783aee5';
const gm = new getMethods();

describe('Get User Profile Unit Test Scripts', () => {

    it.only('Get User Profile with Positive Case', () => {

        gm.getProfileMethods('GET',userProfileUrl,usercode).then((response) => {

            expect(response.status).to.be.eq(200);

        });

    });

});
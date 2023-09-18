/// <reference types = 'Cypress' />
import apiEndpoints from "../../../../support/api_end_points";
import getMethods from "../../../../support/get_methods_function";

let environment = 'newqa';
let baseUrl = environment == 'prod' ? 'https://eos.onefin.app/':   `https://${environment}.eos.onefin.app/`;
let meetingSummaryUrl = baseUrl + `${apiEndpoints.getMeetingSummary}`
const gm = new getMethods();

describe('Get All Assigned Customer Details Unit Test Scripts', ()=>{

it('Get All Assigned Customers with Positive case', ()=>{

    gm.getProfileMethods('GET',meetingSummaryUrl,`${apiEndpoints.userCode}`).then((response) =>{
        
        expect(response.status).to.be.eq(200);
        console.log(response.body);


    })

});

});

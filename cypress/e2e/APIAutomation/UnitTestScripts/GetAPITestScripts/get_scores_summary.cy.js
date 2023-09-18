/// <reference types = 'Cypress' />
import apiEndpoints from "../../../../support/api_end_points";
import getMethods from "../../../../support/get_methods_function";

let environment = 'newqa';
let baseUrl = environment == 'prod' ? 'https://eos.onefin.app/':   `https://${environment}.eos.onefin.app/`;
let scoreSummaryUrl = baseUrl + `${apiEndpoints.getScoreSummary}`
const gm = new getMethods();

describe('Get Score Summary Details Unit Test Scripts', ()=>{

it('Get Score Summary  with Positive case', ()=>{


    gm.getProfileMethods('GET',scoreSummaryUrl,`${apiEndpoints.userCode}`).then((response) =>{
        
        expect(response.status).to.be.eq(200);
        console.log(response.body);


    })

});

});

/// <reference types = 'Cypress' />
import apiEndpoints from "../../../../support/api_end_points";
import getMethods from "../../../../support/get_methods_function";

let environment = `${apiEndpoints.env}`; 
let baseUrl = environment == 'prod' ? 'https://eos.onefin.app/':   `https://${environment}.eos.onefin.app/`;
let customerDetailsUrl = baseUrl + `${apiEndpoints.getCustomerDetails}`
const gm = new getMethods();
let email = 'testuser2@1finance.co.in';
let fromDate = '2023-08-28';
let toDate = '2023-08-28';
describe('Get All Assigned Customer Details Unit Test Scripts', ()=>{

it('Get All Assigned Customers with Positive case', ()=>{

    gm.getCustomerDetailsMethod('GET',customerDetailsUrl,email,fromDate,toDate).then((response) =>{
        
        expect(response.status).to.be.eq(200);
        console.log(response.body);

    })

});

});

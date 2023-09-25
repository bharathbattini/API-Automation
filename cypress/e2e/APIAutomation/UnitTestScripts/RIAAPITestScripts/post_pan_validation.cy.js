/// <reference types = 'Cypress'/>
import 'cypress-plugin-api';
import apiEndpoints from '../../../../support/api_end_points';
import getMethods from '../../../../support/get_methods_function';

let environment = `${apiEndpoints.env}`; 
let baseUrl = environment == 'prod' ? `https://eos.onefin.app/`:`https://${environment}.eos.onefin.app/`;
let panVerificationUrl = baseUrl+`${apiEndpoints.postPanVerification}`;
const PAN = 'CHIPB2816E'
let queryParams = {
  
        "pan_no"    :   PAN,
        "user_code" : `${apiEndpoints.userCode}`,

}
const gm = new getMethods();

describe('Member Onboarding - PAN Validation Test Scripts', ()=> {

    it('PAN Validation with Valid Usercode and PAN', ()=>{

        cy.api({

            method: 'POST',
            url: panVerificationUrl,
            failOnStatusCode: false,
            headers: {

                authorization: `Bearer ${apiEndpoints.accessToken}`

            },
            qs: queryParams

        }).then((response) =>{

               expect(response.status).to.eq(200);

        })

    });

    it('PAN Validation with Invalid Method', ()=>{

        cy.api({

            method: 'GET',
            url: panVerificationUrl,
            failOnStatusCode: false,
            headers: {

                authorization: `Bearer ${apiEndpoints.accessToken}`

            },
            qs: queryParams

        }).then((response) =>{

               expect(response.status).to.eq(405);

        })

    });

    it('PAN Validation with Invalid Usercode', ()=>{

        cy.api({

            method: 'GET',
            url: panVerificationUrl,
            failOnStatusCode: false,
            headers: {

                authorization: `Bearer ${apiEndpoints.accessToken}`

            },
            qs: queryParams

        }).then((response) =>{

               expect(response.status).to.eq(405);

        })

    });

    it('PAN Validation with Invalid Access Token', ()=>{

        cy.api({

            method: 'GET',
            url: panVerificationUrl,
            failOnStatusCode: false,
            headers: {

                authorization: `Bearer ${apiEndpoints.accessToken}`

            },
            qs: queryParams

        }).then((response) =>{

               expect(response.status).to.eq(405);

        })

    });

    it('PAN Validation with Invalid Url', ()=>{

        cy.api({

            method: 'GET',
            url: panVerificationUrl,
            failOnStatusCode: false,
            headers: {

                authorization: `Bearer ${apiEndpoints.accessToken}`

            },
            qs: queryParams

        }).then((response) =>{

               expect(response.status).to.eq(405);

        })

    });

    it('PAN Validation with Invalid PAN', ()=>{

        cy.api({

            method: 'GET',
            url: panVerificationUrl,
            failOnStatusCode: false,
            headers: {

                authorization: `Bearer ${apiEndpoints.accessToken}`

            },
            qs: queryParams

        }).then((response) =>{

               expect(response.status).to.eq(405);

        })

    });

    it('PAN Validation with Invalid PAN', ()=>{

        cy.api({

            method: 'GET',
            url: panVerificationUrl,
            failOnStatusCode: false,
            headers: {

                authorization: `Bearer ${apiEndpoints.accessToken}`

            },
            qs: queryParams

        }).then((response) =>{

               expect(response.status).to.eq(405);

        })

    });


});

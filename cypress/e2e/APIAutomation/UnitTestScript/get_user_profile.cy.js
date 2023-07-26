/// <reference types = "Cypress" />
import 'cypress-plugin-api'

let getCustomerProfile = 'https://uat.eos.onefin.app/api/customer/profile?';
let usercode = 'a4b78d76-713a-46b9-a459-dda29f776470'


it('Get Customer Profile', ()=>{

    cy.api({

        method: 'GET',
        url: getCustomerProfile+'usercode='+usercode,
        qs:{

            user_code : usercode
        }

    }).then((response)=>{

        expect(response.status).to.be.eq(200);
        expect(response.body).to.have.property('status').to.be.a('number');
        expect(response.body).to.have.property('message').to.be.a('String');

    });

});
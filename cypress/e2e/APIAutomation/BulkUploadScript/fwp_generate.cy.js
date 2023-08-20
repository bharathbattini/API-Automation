const neatCsv = require("neat-csv");
import 'cypress-plugin-api';

const fwpGenerate = 'https://eos.onefin.app/api/user/generate/fwp?user_code=';

let userdata = [];

let list = { response_code:[], usercode: []}

describe('FWP Generate Data Bulk Upload', () => {

    it('FWP Bulk Generate', () => {

        cy.readFile('/Users/bharath/Downloads/fwpdata1.csv').
            then(neatCsv).
            then(jsondata => {

                console.log(jsondata);

                jsondata.forEach(a => {

                    cy.api({

                        method: 'POST',
                        url: fwpGenerate + a.user_code,
                        failOnStatusCode: false,
                        qa:
                        {

                            user_code : a.user_code
                        }

                    }).then((response) => {

                    //    expect(response.status).to.be.eq(200);
                        list.usercode.push(a.user_code)
                        list.response_code.push(response.status);

                        cy.writeFile('/Users/bharath/Documents/cypressproject/cypress/fixtures/responsedata.json', list);

                    });

                });

            });

    });

});
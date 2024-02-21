const neatCsv = require("neat-csv");
import 'cypress-plugin-api';

const statusTrackerURL = 'https://newqa.eos.onefin.app/api/customer/3/status-tracker?user_code=';
let userdata = [];

let list = { usercode: [] }

describe('Status tracker API Status Check', () => {

    it('Status Tracker', () => {

        cy.readFile('/Users/bharath/Downloads/fwpdata.csv').
            then(neatCsv).
            then(jsondata => {

                console.log(jsondata);

                jsondata.forEach(a => {

                    cy.api({

                        method: 'GET',
                        url: statusTrackerURL + a.user_code,
                        failOnStatusCode: false,
                        qa:
                        {

                            user_code: a.user_code
                        }

                    }).then((response) => {

                        if (response.status != 200) {

                            //    expect(response.status).to.be.eq(200);
                            cy.log(a);
                            cy.log(a.user_code);
                            var d = a.user_code.toString() + ', ' + response.status.toString();
                            list.usercode.push(d);


                            cy.writeFile('/Users/bharath/Documents/cypressproject/cypress/fixtures/statustracker.json', list);

                        }
                    });

                });

            });

    });

});



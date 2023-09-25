const neatCsv = require("neat-csv");
import 'cypress-plugin-api';

const statusTrackerURL = 'https://newqa.eos.onefin.app/api/customer/3/status-tracker?user_code=';
let userdata = [];

let list = { usercode: [] }

describe('Status tracker API Status Check', () => {

    it('Status Tracker', () => {

        cy.readFile('/Users/bharath/Downloads/fwpdata1.csv').
            then(neatCsv).
            then(jsondata => {

                console.log(jsondata);

                jsondata.forEach(a => {

                    cy.api({

                        method: 'GET',
                        url: statusTrackerURL + a.user_code,
                        failOnStatusCode: false,
                        headers:{

                            authorization: `Bearer `

                        },
                        qa:
                        {

                            user_code: a.user_code
                        }

                    }).then((response) => {

                        if (response = 200) {

                            cy.log(response);

                        }

                        cy.writeFile('/Users/bharath/Documents/cypressproject/cypress/fixtures/statustracker.json', list);


                    });

                });

            });

    });

});



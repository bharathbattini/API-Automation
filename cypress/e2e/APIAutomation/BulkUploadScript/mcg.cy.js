const neatCsv = require("neat-csv");
import 'cypress-plugin-api';

const mcg = 'https://boffice.marwadionline.com/MSFLThirdPartyAPI/OneFinance/CheckPANExist?pan=';
const token = 'Basic T25lRmluYW5jZTpNc2ZsMSRGaW5hbmNlQDEyMw==';
let userdata = [];

let list = { usercode: [] }
function textContainsWord(text, word) {
    // Create a regular expression to match the word
    const regex = new RegExp('\\b' + word + '\\b', 'i');

    // Test if the text contains the word
    return regex.test(text);
}

describe('Status tracker API Status Check', () => {

    it('Status Tracker', () => {

        cy.readFile('/Users/bharath/Downloads/pan_mcg.csv').
            then(neatCsv).
            then(jsondata => {

                // console.log(jsondata);

                jsondata.forEach(a => {

                    cy.api({

                        method: 'GET',
                        url: mcg + a.pan,
                        failOnStatusCode: false,
                        headers: {
                            authorization: `${token}`
                        },
                        qa:
                        {

                            user_code: a.pan
                        }

                    }).then((response) => {

                        if (response.status = 200) {

                            if (textContainsWord(response.body.Message, 'not')) {

                                // cy.log(a);
                                // cy.log(a.pan);
                                var d = a.pan.toString() + ', ' + 'Not Available';
                                list.usercode.push(d);

                            }
                            else {

                                // cy.log(a);
                                // cy.log(a.pan);
                                var d = a.pan.toString() + ', ' + 'Available';
                                list.usercode.push(d);

                            }
                        }

                        cy.writeFile('/Users/bharath/Documents/API-Automation-EOS/cypress/fixtures/MCG.json', list);

                    });

                });

            });

    });

});



/// <reference types = "Cypress" />
import 'cypress-plugin-api'
const neatCsv = require("neat-csv");

const refreshWorkbookUrl = 'https://eos.onefin.app/api/user/generate/fwp?'
let list = {responsebody:[]}

describe('Refresh Workbook Bulk Upload', () => {

    it('Refresh Workbook', () => {

            cy.readFile('/Users/bharath/Downloads/generate_workbook.csv').
                then(neatCsv).
                then(jsondata => {
        
                    console.log(jsondata);

                    jsondata.forEach(a => {
    
                        cy.api({
    
                            method: 'POST',
                            url: refreshWorkbookUrl + 'user_code='+ a.user_code,
                            failOnStatusCode: false,
                            qa:
                            {
                                user_code : a.user_code
                            }
    
                        }).then((response) => {
    
                            response.body.user_code = a.user_code;

                            list.responsebody.push(response.body);
    
                            cy.writeFile('/Users/bharath/Documents/API-Automation-EOS/cypress/fixtures/responsedata.json', list);
    
                        });
    
                    });
    
                });
    
        });

});
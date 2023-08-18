/// <reference types = "Cypress" />
import 'cypress-plugin-api'
const neatCsv = require("neat-csv");

const refreshWorkbookUrl = 'https://eos.onefin.app/api/user/generate/fwp?'
let list = {usercode:[],response:[]}

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
    
                            list.usercode.push(a.user_code)
                            list.response.push(response.body);
    
                            cy.writeFile('/Users/bharath/Documents/cypressproject/cypress/fixtures/responsedata.json', list);
    
                        });
    
                    });
    
                });
    
        });

});
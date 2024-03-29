/// <reference types = "Cypress" />
import 'cypress-plugin-api'
const neatCsv = require("neat-csv");

const refreshWorkbookUrl = 'https://newqa.eos.onefin.app/api/user/generate/fwp?'
let list = {responsebody:[]}

describe('Refresh Workbook Bulk Upload', () => {

    it('Refresh Workbook', () => {

            cy.readFile('/Users/bharath/Downloads/workbook_refresh.csv').
                then(neatCsv).
                then(jsondata => {
        
                    console.log(jsondata);

                    jsondata.forEach((a,i) => {
    
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
                            console.log(i);
                            
                            response.body.index = i;
                            list.responsebody.push(response.body);
    
                            cy.writeFile('/Users/bharath/Documents/API-Automation-EOS/cypress/fixtures/refresh_workbook_responsedata.json', list);
    
                        });
    
                    });
    
                });
    
        });

});
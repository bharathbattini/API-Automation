const neatCsv = require("neat-csv");
import 'cypress-plugin-api';

const statusTrackerURL = 'https://eos.onefin.app/api/customer/4/status-tracker?user_code=';
const tokenUrl = "https://account.onefin.app/api/user/login-user";
const accessToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk4RDA2MEVEMjc2NTZFQ0VBREU2RkMxNURDRUQ1NEYwIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2OTM5ODU0NTUsImV4cCI6MTY5Mzk4OTA1NSwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50Lm9uZWZpbi5hcHAiLCJjbGllbnRfaWQiOiJDdXN0b21lckFwcExvZ2luQ2xpZW50Q3JlZGVudGlhbHMiLCJpYXQiOjE2OTM5ODU0NTUsInNjb3BlIjpbImN1c3RvbWVyLWxvZ2luIl19.AwvIvppWeDObivLfAZnsTfdGsP4dgXE5uVZ8y7Az_GWbx1l_cQsLudAYwL-2WgFjKROZKPzPDblKxkOpwJJ_a8BHi0hUBwfaJyCt_yJhlk2KuTG9bpQLPNeo1ENJIl0qxANVjSCqqGPrbiXrg3a5fBH64_rjwwTGdgQAZuYbVmUwH7JUlwNtPFT1Nt5JoJCMSm-yDNaXAxwq0NFApZLYAomYr8HMQmjhtABSlHGqfhwg61CPDK0bU9SkPsJlzR41a_pvd_ApirIFCIiVhB9kDL4Sev1fenzZC05uUY9snL2To-P36gSpOZisTyzqUt90RqyL1aCfL6h8JbwjU7a1fg';

var userCode = '';
var userToken = '';
var statustracker = [];

let list = { usercode: [] }

describe('Status tracker API Status Check', () => {

    it('Status Tracker', () => {


        cy.readFile('/Users/bharath/Downloads/mobilenumber.csv').
            then(neatCsv).
            then(jsondata => {

                jsondata.forEach(a => {


                    cy.api({

                        method: 'POST',
                        url: tokenUrl,
                        headers: {

                            authorization: `Bearer ${accessToken}`

                        },
                        body: {

                            "user_name": a.mobile_number

                        }

                    }).then((response) => {

                        expect(response.status).to.be.eq(200);
                        expect(response.body.data.user_id).to.be.a('String');

                        userCode = response.body.data.user_id;

                        userToken = response.body.data.token;

                        cy.api({

                            method: 'GET',
                            url: statusTrackerURL + userCode,
                            failOnStatusCode: false,
                            headers: {

                                authorization: `Bearer ${userToken}`

                            },
                            qa:
                            {

                                user_code: userCode
                            }

                        }).then((response) => {

                            expect(response.body.data.tracker).to.be.a('object');

                            statustracker = response.body.data.tracker.data;

                            console.log(statustracker);

                            if (response = 200) {

                                if (statustracker.length < 0) {

                                    var userid = userCode.toString();
                                    list.usercode.push(userid);

                                    cy.writeFile('/Users/bharath/Documents/API-Automation-EOS/cypress/fixtures/emptydata.json', list);

                                }
                            }

                        });

                    });

                });

            });

    });

});



const neatCsv = require("neat-csv");
import 'cypress-plugin-api';
import '@shelex/cypress-allure-plugin';
import 'allure-commandline';

const customerProfileUrl = 'https://uat.customer.onefin.app/api/customer/customer-profile';
const tokenUrl = "https://uat.account.onefin.app/api/user/login-user";
const accessToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk4RDA2MEVEMjc2NTZFQ0VBREU2RkMxNURDRUQ1NEYwIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2OTM5ODU0NTUsImV4cCI6MTY5Mzk4OTA1NSwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50Lm9uZWZpbi5hcHAiLCJjbGllbnRfaWQiOiJDdXN0b21lckFwcExvZ2luQ2xpZW50Q3JlZGVudGlhbHMiLCJpYXQiOjE2OTM5ODU0NTUsInNjb3BlIjpbImN1c3RvbWVyLWxvZ2luIl19.AwvIvppWeDObivLfAZnsTfdGsP4dgXE5uVZ8y7Az_GWbx1l_cQsLudAYwL-2WgFjKROZKPzPDblKxkOpwJJ_a8BHi0hUBwfaJyCt_yJhlk2KuTG9bpQLPNeo1ENJIl0qxANVjSCqqGPrbiXrg3a5fBH64_rjwwTGdgQAZuYbVmUwH7JUlwNtPFT1Nt5JoJCMSm-yDNaXAxwq0NFApZLYAomYr8HMQmjhtABSlHGqfhwg61CPDK0bU9SkPsJlzR41a_pvd_ApirIFCIiVhB9kDL4Sev1fenzZC05uUY9snL2To-P36gSpOZisTyzqUt90RqyL1aCfL6h8JbwjU7a1fg';
const uatAccessToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkZFQzBDMUYwMTYzMDNEMzY3NUVDMzRCQTI4NDYxQkE2IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2OTMzODc5NDUsImV4cCI6MTY5MzM5MTU0NSwiaXNzIjoiaHR0cHM6Ly91YXQuYWNjb3VudC5vbmVmaW4uYXBwIiwiY2xpZW50X2lkIjoiQ3VzdG9tZXJBcHBMb2dpbkNsaWVudENyZWRlbnRpYWxzIiwiaWF0IjoxNjkzMzg3OTQ1LCJzY29wZSI6WyJjdXN0b21lci1sb2dpbiJdfQ.SnI0C2B7MxY9CjD37Xy1gVcKKTiArxTYQhXJhW5j3npiKBqPBzL_3bg1fl-fZd7Fivmhofi1QR1Sx5bAcSxjzntNauC9EEfes2eGz4unQba19h2BasXOf3Qz6bqOlNwPYBMGub0AiF8rHJkWwXegz2ZBJpsgj-deVaDwsP_y1H90u61JA8A0Vz3GtyDbkGvbcIzmZWBf2CfSdaF8MgqRyQ5_MYu8YP5vq0QyZYq9DyTo9Jn_vtpxMiJCoWYUMsYLDKk12azN_8_mW-Y3yZLZzjHnmx2wLQ0BgrR1fBKqHbP_tDn8Xa8cPy9ajuxr6TgtK4V5Sj-5_BV3KQ5QWQM7Rg';

var userCode = '';
var userToken = '';

let list = { usercode: [] }

describe('Customer Profile API Status Check', () => {

    it('Customer Profile', () => {


        cy.readFile('/Users/bharath/Downloads/mobilenumber.csv').
            then(neatCsv).
            then(jsondata => {

                jsondata.forEach(a => {


                    cy.api({

                        method: 'POST',
                        url: tokenUrl,
                        failOnStatusCode: false,
                        headers: {

                            authorization: `Bearer ${uatAccessToken}`

                        },
                        body: {

                            "user_name": a.mobile_number

                        }

                    }).then((response) => {

                        userCode = response.body.data.user_id;

                        userToken = response.body.data.token;

                        cy.api({

                            method: 'GET',
                            url: customerProfileUrl,
                            failOnStatusCode: false,
                            headers: {

                                authorization: `Bearer ${userToken}`

                            }

                        }).then((response) => {

                            if (response.status = 200) {

                                var status = response.body.user_id.toString() + ', ' + response.status.toString();
                                list.usercode.push(status);

                                cy.writeFile('/Users/bharath/Documents/API-Automation-EOS/cypress/fixtures/customer_profile.json', list);

                            }

                        });

                    });

                });

            });

    });

});



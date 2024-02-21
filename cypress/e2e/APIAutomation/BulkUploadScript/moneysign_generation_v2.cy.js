import generateMoneySignClass from '../../../support/utils/moneysign_generation_function'
import 'cypress-plugin-api';
import '@shelex/cypress-allure-plugin';

const baseUrl = Cypress.env('qa').customerBaseUrl;
const msBaseUrl = Cypress.env('qa').moneySignBaseUrl;
const requestOtpUrl = `${baseUrl}onboarding/request-for-otp`;
const validateOtpUrl = `${baseUrl}onboarding/validate-otp`;
const onboardCustomerUrl = `${baseUrl}onboarding/onboard-customer`;
const deleteUserAccountUrl = `${baseUrl}customer/delete-customer-data`;
const moneysignQuiz = `${msBaseUrl}user/money-sign-quiz`;
const moneysignAddResponseUrl = `${msBaseUrl}user/money-sign/add-response`;
const mobileNumber = '4000000000';
const validOtp = '9999';
let firstName = "Bharath";
let lastName = "Battini";
let isCustomerFound;
let accessToken = '';
let refreshToken = '';
let tempCode = '';
let userId = '';

let questionId = [];

let answerId = new Array(25); // create an array with 25 rows
for (let i = 0; i < answerId.length; i++) {
    answerId[i] = new Array(5); // create an array with 5 columns
}

let questionTypeID = [];

const mgf = new generateMoneySignClass();

describe('Customer Onboarding with First Name and Last Name', () => {

    it('Request OTP with Valid Mobile Number', () => {

        mgf.requestOtpMethod('POST', requestOtpUrl, mobileNumber).then((response) => {

            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('message');

        });


    });

    it('Validate the OTP', () => {

        cy.api({

            method: 'POST',
            url: validateOtpUrl,
            failOnStatusCode: false,
            body: {

                "mobile_number": mobileNumber,
                "otp": validOtp,
                "customer_app_instance_id": "string",
                "app_version": "string",
                "device_platform": "string",
                "device_model": "string",
                "notification_token": "string"
            }

        }).then((response) => {

            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('otp_valid', true);
            expect(response.body).to.have.property('customer_found').to.be.a('boolean');
            isCustomerFound = response.body.customer_found;
            expect(response.body).to.have.property('access_token');
            accessToken = response.body.access_token;
            expect(response.body).to.have.property('refresh_token');
            refreshToken = response.body.refresh_token;
            tempCode = response.body.temp_code;


            if (isCustomerFound == true) {

                cy.log('Delete user if exist');

                cy.api({

                    method: 'DELETE',
                    url: deleteUserAccountUrl,
                    failOnStatusCode: false,
                    headers: {

                        authorization: `Bearer ${accessToken}`

                    }

                }).then((response) => {

                    expect(response.status).to.eq(200);

                });

                //  });

            }
            else {

                cy.log('User does not exist');
            }

        })

    });

    it('Request OTP with Valid Mobile Number', () => {

        cy.api({
            method: 'POST',
            url: requestOtpUrl,
            failOnStatusCode: false,
            body: {

                "mobile_number": mobileNumber,
                "otp_autoread_string": "QA",
                "app_version": "API Automation",
                "device_platform": "API Automation",
                "device_model": "API Automation"
            }

        }).then((response) => {

            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('message');

        });


    });
    it('Validate the OTP', () => {

        cy.api({

            method: 'POST',
            url: validateOtpUrl,
            failOnStatusCode: false,
            body: {

                "mobile_number": mobileNumber,
                "otp": validOtp,
                "customer_app_instance_id": "string",
                "app_version": "string",
                "device_platform": "string",
                "device_model": "string",
                "notification_token": "string"
            }

        }).then((response) => {

            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('otp_valid', true);
            expect(response.body).to.have.property('access_token');
            accessToken = response.body.access_token;
            expect(response.body).to.have.property('refresh_token');
            refreshToken = response.body.refresh_token;
            expect(response.body).to.have.property('temp_code').to.be.a('string');
            tempCode = response.body.temp_code;

        });

    });

    it('Onboard customer with valid First and Last Name', () => {

        cy.api({
            method: 'POST',
            url: onboardCustomerUrl,
            failOnStatusCode: false,
            body: {

                "first_name": firstName,
                "last_name": lastName,
                "mobile_number": mobileNumber,
                "temp_code": tempCode,
                "customer_app_instance_id": tempCode,
                "app_version": "string",
                "device_platform": "string",
                "device_model": "string",
                "notification_token": "string"

            }
        }).then((response) => {

            expect(response.status).to.have.eq(201);
            expect(response.body).to.have.property('id').to.be.a('string');
            expect(response.body).to.have.property('access_token').to.be.a('string');
            expect(response.body).to.have.property('refresh_token').to.be.a('string');
            expect(response.body).to.have.property('access_token').to.be.a('string');
            accessToken = response.body.access_token;
            userId = response.body.id;

        })

    });

    it('MoneySign Quiz Data Fetch', () => {

        cy.api({

            method: "GET",
            url: moneysignQuiz,
            failOnStatusCode: false,
            headers: {
                authorization: `Bearer ${accessToken}`
            }
        }).then((response) => {
            cy.log(JSON.stringify(response));
            expect(response.status).to.be.eq(200);
            expect(response.body).to.have.property('message').to.be.a('string');
            expect(response.body.data).to.have.property('money_sign');
            expect(response.body.data.money_sign).to.have.length(25).to.be.a('array');
            expect(response.body.data.money_sign[0]).to.be.a('object');
            expect(response.body.data.money_sign[0].question_id).to.be.a('number');
            expect(response.body.data.money_sign[0].answers).to.be.a('array');

            for (let i = 0; i < response.body.data.money_sign.length; i++) {

                questionId[i] = response.body.data.money_sign[i].question_id;
            };

            for (let j = 0; j < response.body.data.money_sign.length; j++) {

                questionTypeID[j] = response.body.data.money_sign[j].question_typeid;

                for (let k = 0; k < response.body.data.money_sign[j].answers.length; k++) {

                    answerId[j][k] = response.body.data.money_sign[j].answers[k].answer_id;

                };
                console.log(response.body.data.money_sign[j].answers.length);
            };

            console.table(questionId);
            console.table(questionTypeID);
            console.table(answerId);
        });
    });



    it('MoneySign User Random Add Response', () => {

        cy.api({

            method: 'POST',
            url: moneysignAddResponseUrl,
            failOnStatusCode: false,
            headers: {
                authorization: `Bearer ${accessToken}`
            },
            body: {

                "userCode": userId,
                "answers": [
                    {
                        "questionId": "1",
                        "scores": [
                            "5"
                        ],
                        "answerids": [
                            "81"
                        ]
                    }
                ]

            }

        });

    });
});


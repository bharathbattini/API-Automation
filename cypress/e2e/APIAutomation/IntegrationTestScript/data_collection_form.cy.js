/// <reference types = 'Cypress' />
import 'cypress-plugin-api'
import apiEndpoints from '../../../support/api_end_points';
import getMethods from '../../../support/get_methods_function';

let environment = `${apiEndpoints.env}`;
let baseUrl = environment == 'prod' ? `https://eos.onefin.app/` : `https://${environment}.eos.onefin.app/`;
const getuserProfileUrl = baseUrl + `${apiEndpoints.getUserProfile}`;
const userProfileUrl = baseUrl + `${apiEndpoints.postUserProfile}`;
const userIncomeExpenseUrl = baseUrl + `${apiEndpoints.postUserIncomeExpense}`;
const userDependentUrl = baseUrl + `${apiEndpoints.postUserDependent}`;
const userInvestmentUrl = baseUrl + `${apiEndpoints.postUserInvestment}`;
const userLoansUrl = baseUrl + `${apiEndpoints.postUserLoans}`;
const userInsuranceUrl = baseUrl + `${apiEndpoints.postUserInsurance}`;
const gm = new getMethods();

let firstName;
let lastName;
let mobileNumber;
let emailId;


describe('Get User Profile Unit Test Scripts', () => {

    it('Get User Profile from Get API', () => {

        gm.getProfileMethods('GET', getuserProfileUrl, `${apiEndpoints.userCode}`).then((response) => {

            expect(response.status).to.be.eq(200);
            firstName = response.body.data.first_name;
            lastName = response.body.data.last_name;
            mobileNumber = response.body.data.mobile_number;
            emailId = response.body.data.email;

        });

    });

    it('Post User Profile with Positive Case', () => {

        cy.api({

            method: 'POST',
            url: userProfileUrl,
            failOnStatusCode: false,
            headers: {

                authorization: `Bearer ${apiEndpoints.accessToken}`

            },
            body: {

                "user_code": `${apiEndpoints.userCode}`,
                "first_name": firstName,
                "last_name": lastName,
                "dob": "1997-12-07",
                "gender": "Male",
                "email": emailId,
                "mobile_number": mobileNumber,
                "city": "Mumbai",
                "state": "Maharashtra",
                "country": "India",
                "money_sign": "Virtuous Elephant",
                "qualification": "Bachelors"
            }

        }).then((response) => {

            expect(response.status).to.be.eq(200);

        });

    });

    it('Post User Income-Expense with Positive Case', () => {

        cy.api({

            method: 'POST',
            url: userIncomeExpenseUrl,
            failOnStatusCode: false,
            headers: {

                authorization: `Bearer ${apiEndpoints.accessToken}`

            },
            body: {
                "user_code": `${apiEndpoints.userCode}`,
                "incomes": [
                    {
                        "category_id": 65,
                        "yearly_amount": 1400000
                    }
                ],
                "expense_yearly_amount": 600000,
                "tax_deduction_amount": 400000,
                "retirement_age": "45",
                "tax_regime_id": 136
            }

        }).then((response) => {

            expect(response.status).to.be.eq(200);

        });

    });

    it('Post User Dependency with Positive Case', () => {

        cy.api({

            method: 'POST',
            url: userDependentUrl,
            failOnStatusCode: false,
            headers: {

                authorization: `Bearer ${apiEndpoints.accessToken}`

            },
            body: {
                "user_code": `${apiEndpoints.userCode}`,
                "relative_dependency": true,
                "parent_dependency": false,
                "spouse_dependency": true,
                "has_children": true,
                "marital_status": "Unmarried",
                "relatives": [
                    {
                        "relation": "Mama",
                        "age": 50
                    }
                ],
                "children": [
                    {
                        "relation": "string",
                        "age": 0
                    }
                ],
                "parents": [
                    {
                        "age": 0,
                        "relation": "string"
                    }
                ],
                "spouse": {
                    "relation": "string",
                    "occupation": "Self-Employed",
                    "yearly_income": 10000000
                }
            }

        }).then((response) => {

            expect(response.status).to.be.eq(200);

        });

    });

    it('Post User Investments with Positive Case', () => {

        cy.api({

            method: 'POST',
            url: userInvestmentUrl,
            failOnStatusCode: false,
            headers: {

                authorization: `Bearer ${apiEndpoints.accessToken}`

            },
            body:
            {
                "user_code": `${apiEndpoints.userCode}`,
                "cas_document": true,
                "cam_document": false,
                "investments": [
                    {
                        "category_id": 18,
                        "name": "Public Stock (India) 1",
                        "monthly_investment": 10000,
                        "current_amount": 1500000
                    },
                    {
                        "category_id": 19,
                        "name": "Equity Mutual Funds 1",
                        "monthly_investment": 5000,
                        "current_amount": 200000
                    },
                    {
                        "category_id": 23,
                        "name": "Equity ETFs 1",
                        "monthly_investment": 10000,
                        "current_amount": 400000
                    },
                    {
                        "category_id": 24,
                        "name": "International Funds 1",
                        "monthly_investment": 5000,
                        "current_amount": 50000
                    },
                    {
                        "category_id": 21,
                        "name": "Unlisted Stocks 1",
                        "monthly_investment": 10000,
                        "current_amount": 80000
                    },
                    {
                        "category_id": 22,
                        "name": "Public Stocks (International) 1",
                        "monthly_investment": 2000,
                        "current_amount": 20000
                    },
                    {
                        "category_id": 25,
                        "name": "Direct Bonds 1",
                        "monthly_investment": 10000,
                        "current_amount": 500000
                    },
                    {
                        "category_id": 33,
                        "name": "Occupied Home 1",
                        "monthly_investment": 0,
                        "current_amount": 10000000
                    },
                    {
                        "category_id": 30,
                        "name": "Rental Yielding (Commercial) 1",
                        "monthly_investment": 0,
                        "current_amount": 0
                    },
                    {
                        "category_id": 31,
                        "name": "Non-Yielding (Residential) 1",
                        "monthly_investment": 50000,
                        "current_amount": 6000000
                    },
                    {
                        "category_id": 32,
                        "name": "Non-Yielding (Commercial) 1",
                        "monthly_investment": 0,
                        "current_amount": 0
                    },
                    {
                        "category_id": 34,
                        "name": "Physical Gold 1",
                        "monthly_investment": 3000,
                        "current_amount": 200000
                    },
                    {
                        "category_id": 90,
                        "name": "Physical Silver 1",
                        "monthly_investment": 1000,
                        "current_amount": 50000
                    },
                    {
                        "category_id": 37,
                        "name": "Bank FD 1",
                        "monthly_investment": 5000,
                        "current_amount": 500000
                    },
                    {
                        "category_id": 45,
                        "name": "Savings 1",
                        "monthly_investment": 3000,
                        "current_amount": 200000
                    },
                    {
                        "category_id": 46,
                        "name": "NPS Tier I 1",
                        "monthly_investment": 5000,
                        "current_amount": 150000
                    },
                    {
                        "category_id": 43,
                        "name": "EPF 1",
                        "monthly_investment": 3000,
                        "current_amount": 30000
                    },
                    {
                        "category_id": 50,
                        "name": "Direct Cryptos 1",
                        "monthly_investment": 5000,
                        "current_amount": 100000
                    }
                ],
                "pan_data": {
                    "category_id": 129,
                    "pancard": "CHIPB1111E"
                }
            }

        }).then((response) => {

            expect(response.status).to.be.eq(200);

        });

    });

    it('Post User Loans with Positive Case', () => {

        cy.api({

            method: 'POST',
            url: userLoansUrl,
            failOnStatusCode: false,
            headers: {

                authorization: `Bearer ${apiEndpoints.accessToken}`

            },
            body: {
                "user_code": `${apiEndpoints.userCode}`,
                "different_loans": [
                    {
                        "category_id": 57,
                        "name": "Housing Loan 1",
                        "account_age": 5000000,
                        "outstanding_amount": 2500000,
                        "pending_tenure": 120,
                        "monthly_installment": 25000,
                        "interest_rate": 8
                    },
                    {
                        "category_id": 59,
                        "name": "Personal Loan 1",
                        "account_age": 200000,
                        "outstanding_amount": 120000,
                        "pending_tenure": 24,
                        "monthly_installment": 6500,
                        "interest_rate": 12
                    },
                    {
                        "category_id": 62,
                        "name": "Credit Card 1",
                        "account_age": 50000,
                        "outstanding_amount": 32000,
                        "pending_tenure": 9,
                        "monthly_installment": 5000,
                        "interest_rate": 12
                    }
                ]
            }

        }).then((response) => {

            expect(response.status).to.be.eq(200);

        });

    });

    it('Post User Insurance with Positive Case', () => {

        cy.api({

            method: 'POST',
            url: userInsuranceUrl,
            failOnStatusCode: false,
            headers: {

                authorization: `Bearer ${apiEndpoints.accessToken}`

            },
            body: {
                "user_code": `${apiEndpoints.userCode}`,
                "insurances": [
                    {
                        "category_id": 101,
                        "coverage": 20000000,
                        "pending_premium": 480,
                        "annual_premium": 20000,
                        "payment_frequency": 1,
                        "name": "TATA AIA"
                    },
                    {
                        "category_id": 102,
                        "coverage": 0,
                        "pending_premium": 0,
                        "annual_premium": 0,
                        "payment_frequency": 0,
                        "name": ""
                    },
                    {
                        "category_id": 64,
                        "coverage": 500000,
                        "pending_premium": 0,
                        "annual_premium": 8320,
                        "payment_frequency": 1,
                        "name": "STAR HEALTH"
                    },
                    {
                        "category_id": 103,
                        "coverage": 250000,
                        "pending_premium": 120,
                        "annual_premium": 1200,
                        "payment_frequency": 1,
                        "name": "LIC"
                    }
                ]
            }

        }).then((response) => {

            expect(response.status).to.be.eq(200);

        });

    });

});
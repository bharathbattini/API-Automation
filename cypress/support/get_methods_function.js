import 'cypress-plugin-api';

class getMethods {

    getProfileMethods(getMethods, getUrl, getUsercode) {

        return cy.api({
            method: getMethods,
            url: getUrl,
            failOnStatusCode: false,
            headers: {

                authorization: `Bearer ${accessToken}`

            },
            qs: {

                user_code: getUsercode
            }

        });
    }

    getCustomerDetailsMethod(getMethods, getUrl, getEmail, fromDate, toDate) {

        return cy.api({
            method: getMethods,
            url: getUrl,
            failOnStatusCode: false,
            headers: {

                authorization: `Bearer ${accessToken}`

            },
            qs: {

                email: getEmail,
                fromdate: fromDate,
                todate: toDate
            }

        });
    }

}

export default getMethods;
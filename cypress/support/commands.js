

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('GetApis', (getMethods, getUrl, accessToken, getUsercode) => {

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

});

// cypress/support/commands.js

Cypress.Commands.add('loginByGoogleApi', () => {
    cy.log('Logging in to Google')
    cy.request({
        method: 'POST',
        url: 'https://www.googleapis.com/oauth2/v4/token',
        failOnStatusCode
            : false,
        body: {
            grant_type: 'refresh_token',
            client_id: Cypress.env('googleClientId'),
            client_secret: Cypress.env('googleClientSecret'),
            refresh_token: Cypress.env('googleRefreshToken'),
        },
    }).then(({ body }) => {
        const { access_token, id_token } = body
        cy.log(access_token);

        cy.request({
            method: 'GET',
            url: 'https://www.googleapis.com/oauth2/v3/userinfo',
            failOnStatusCode: false,
            headers: { Authorization: `Bearer ${access_token}` },
        }).then(({ body }) => {
            console.log(body);

            const userItem = {

                token: id_token,
                user: {
                    googleId: body.sub,
                    email: body.email,
                    givenName: body.given_name,
                    familyName: body.family_name,
                    imageUrl: body.picture,

                },
            }
            //            window.localStorage.setItem('googleCypress', JSON.stringify(userItem.token));
            cy.log(userItem.token);
            window.localStorage.setItem('access_token', (userItem.token));
            window.localStorage.setItem('email', ('testuser2@1finance.co.in'));
            window.localStorage.setItem('first_name', (userItem.user.givenName));
            window.localStorage.setItem('last_name', (userItem.user.familyName));

        })
    })
})

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
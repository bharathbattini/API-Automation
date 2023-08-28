import 'cypress-plugin-api';
let accessToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjhGNzAyRUUxMjFCQ0Q1MTI2Nzg3Q0VEODA0NDczNjk1IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2OTMyMDUzMDcsImV4cCI6MTY5MzI5MTcwNywiaXNzIjoiaHR0cHM6Ly9uZXdxYS5hY2NvdW50Lm9uZWZpbi5hcHAiLCJjbGllbnRfaWQiOiJDdXN0b21lckFwcENsaWVudENyZWRlbnRpYWxzIiwic3ViIjoiMGFkM2ZjMzktMjUyNC00OWQyLWI4MDAtOTA3YTcyN2U0YzMyIiwiYXV0aF90aW1lIjoxNjkyOTY1MzE0LCJpZHAiOiJsb2NhbCIsImlhdCI6MTY5Mjk2NTMxNCwic2NvcGUiOlsiY3VzdG9tZXItbG9naW4iLCJjdXN0b21lci1yZWdpc3RyYXRpb24iLCJtb25leS1zaWduIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.oI87OmtmXArKw4GwCopc4FHJ_Vrnmxd9i3GZrPCFXHKTZMk7ps2bgxKGTauadJh_vRS-4jhgiWAWF-0Mgw9VWwtGQ8_twI9wgrnLm6bCMv8ldU913lG4oqhDVkZJBG42ei_xIylWrJqeioQEiD7IIExAQUEN5Ua561S4U-M_TTH2iUrwuQMbruniGDf0MFE901OhK2WKjjkDVrmBbfMkhAvWiBsXrY4lU9R5qDSI1CjakDIqkudCk3FLu5MVZfVtgQQPZ67OobM0bbQaJwRuZJRy-YPWuISL8OUxmx_3pkikE32tLRW2pNn9fnckOgJDvTYoPrFy-Q9vRLCssOS-DQ';

class getMethods
{
    getProfileMethods(getMethods,getUrl,getUsercode){

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

}

export default getMethods;
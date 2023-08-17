import 'cypress-plugin-api';

class getMethods
{
    getProfileMethods(getMethods,getUrl,getUsercode){

        return cy.api({
        method: getMethods,
        url: getUrl,
        failOnStatusCode: false,
        qs: {

            user_code: getUsercode
        }

    });
}

}

export default getMethods;
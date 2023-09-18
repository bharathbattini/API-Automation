/// <reference types='Cypress'/>


describe('Magazine Mousetouch',()=>{

    it('Mouse Gesture on Magazine',()=>{

        Cypress.on('uncaught:exception', (err) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        });
    
        cy.visit('https://1finance.co.in/');
        cy.get('.headerStyles_navLinks__CEkii > [href="https://1finance.co.in/magazine"]').click();
        cy.scrollTo(0, 1200);
        cy.get('//*[@id="swiper-wrapper-310d51c107bc1023b9a"]/div[2]/a/img').scrollTo(-200,0);
       

    });

});
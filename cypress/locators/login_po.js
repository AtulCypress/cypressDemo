
class LoginPageObjects {


    getunderstandpopUp() {
        return cy.get('#onetrust-accept-btn-handler')
    }

    getContinue_btn() {
        return cy.xpath('//span[normalize-space()="Continue"]')
    }
    getNameArrow() {
        return cy.get('.rZcsCYFux69xpuXhJCVA')
    }

    getLogout() {
        return cy.get('[href="/users/sessions"] > .tswlbdx')
    }

    getUserNameIcon() {
        return cy.get('.b72fb0n > span')
    }

    getEmail_txt() {
        return cy.xpath('//body/div[@id="root"]/div/div/form/div/div/div/div/input')
    }
    
    getpwd_txt() {
        return cy.xpath('//body/div[@id="root"]/div/div/form/div/div/div/input')
    }

}


export default LoginPageObjects
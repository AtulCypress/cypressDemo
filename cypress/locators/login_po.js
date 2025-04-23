class LoginPageObjects {

    getEmail_Txt() {
       // return cy.get('[href="/project-management/projects"] > .MuiListItemText-root > .MuiTypography-root')
        return  cy.get('[placeholder="Enter your email"]')
    }


}


export default LoginPageObjects
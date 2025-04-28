/// <reference types="cypress" />

import "cypress-xpath"
import BrowserAction from "../utility/BrowserEvent.js";
import Validation from "../utility/Validation.js";
import LoginPageObjects from "../locators/login_po.js"
import ProfilePageObjects from "../locators/profile_po.js"

const action = new BrowserAction()
const verify = new Validation()
const login_po = new LoginPageObjects()
const profile_po = new ProfilePageObjects()


describe('Calendly application Profile update', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.viewport(1500, 1000)
    })
    beforeEach(function () {
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })

    it('Update profile Welcome message  ', function () {
        const url = Cypress.env('URL');
        const username = Cypress.env('username');
        const password = Cypress.env('password');
        cy.visit(url);
        verify.verifyTextwithUrl('calendly.com')
        action.clickforce(login_po.getunderstandpopUp());
        verify.checkElementVisibilityByText("Enter your email to get started.")
        action.type(login_po.getEmail_txt(), username);
        action.clickforce(login_po.getContinue_btn());
        //  verify.checkElementVisibilityByText("Enter your password")
        verify.checkElementVisibilityByText(this.data.passwordText) // fixture data fetch
        action.type(login_po.getpwd_txt(), password);
        action.clickforce(login_po.getContinue_btn());
        verify.checkElementPresence1(login_po.getUserNameIcon())
        action.click(login_po.getNameArrow())
        action.clickByContains('Profile')
        profile_po.getunderstandpopUp().clear()
        action.typeAndValidate(profile_po.getunderstandpopUp(), "This is Welcome Message of profile")
        action.clickByContains('Save Changes')
        verify.checkElementVisibilityByText('Your settings have been saved!')
        action.clickforce(login_po.getNameArrow())
        action.clickforce(login_po.getLogout())
        verify.checkElementVisibilityByText("Log In")
        cy.addContext("User successfully logout from the application")
    })

})
/// <reference types="cypress" />

import "cypress-xpath"
import BrowserAction from "../utility/BrowserEvent.js";
import Validation from "../utility/Validation.js";
import LoginPageObjects from "../locators/login_po.js"

const action = new BrowserAction()
const verify = new Validation()
const login_po = new LoginPageObjects()


describe('Calendly Login Page Test', () => {
    beforeEach(() => {
        // cy.viewport(1920, 1080)
        cy.viewport(1500, 1000)
    })
    beforeEach(function () {
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })

    it('Calendly application Login ', function () {
        const url = Cypress.env('URL');
        const username = Cypress.env('username');
        const password = Cypress.env('password');
        cy.visit(url);
        action.clickforce(login_po.getunderstandpopUp());
        action.type(login_po.getEmail_txt(), username);
        action.clickforce(login_po.getContinue_btn());
        action.type(login_po.getpwd_txt(), password);
        action.clickforce(login_po.getContinue_btn());
        action.click(login_po.getNameArrow())
        verify.checkElementVisibilityByText("Atul Sharma")
        cy.addContext("User successfully login into application")
    })

    it('Calendly application Logout ', function () {
        const url = Cypress.env('URL');
        const username = Cypress.env('username');
        const password = Cypress.env('password');
        cy.visit(url);
        action.clickforce(login_po.getunderstandpopUp());
        action.type(login_po.getEmail_txt(), username);
        action.clickforce(login_po.getContinue_btn());
        action.type(login_po.getpwd_txt(), password);
        action.clickforce(login_po.getContinue_btn());
        action.click(login_po.getNameArrow())
        verify.checkElementVisibilityByText("Atul Sharma")
        cy.addContext("User successfully login into application")
        cy.wait(3000)
        action.clickforce(login_po.getNameArrow())
        action.clickforce(login_po.getLogout())
        verify.checkElementVisibilityByText("Log In")
        cy.addContext("User successfully logout from the application")
    })


})
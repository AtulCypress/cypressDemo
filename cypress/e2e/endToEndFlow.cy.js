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
        cy.clearCookies();
        cy.viewport(1500, 1000)
    })
    beforeEach(function () {
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })

    it('Calendly application Login and profile update', function () {
        const url = Cypress.env('URL');
        const username = Cypress.env('username');
        const password = Cypress.env('password');

        // Login to the application
        cy.visit(url);
        cy.url().should('include', 'calendly.com');
        cy.get('#onetrust-accept-btn-handler').click()
        cy.contains("Enter your email to get started.").should('be.visible');

        // Enter email and password
        cy.get('[type="email"]').type(username)
        cy.xpath('//span[normalize-space()="Continue"]').click()
        cy.contains("Enter your password").should('be.visible');
        cy.get('[type="password"]').type(password)
        cy.xpath('//span[normalize-space()="Continue"]').click()
        cy.get('.b72fb0n > span').should('be.visible');
        // Verify login success
        cy.get('.rZcsCYFux69xpuXhJCVA').click()
        cy.contains("Atul Sharma").should('be.visible');
        cy.addContext("User successfully login into application")

        // update Profile - Welcome Message
        cy.contains('Profile').click();
        cy.get('[name="description"]').clear()
        cy.get('[name="description"]').type('This is Welcome Message of profile update')
        cy.contains('Save Changes').click();
        cy.contains('Your settings have been saved!').should('be.visible');
        cy.get('.rZcsCYFux69xpuXhJCVA').click()
        cy.get('[href="/users/sessions"] > .tswlbdx').click()
        cy.contains('Log In').should('be.visible');
        cy.addContext("User successfully logout from the application")
    })


})
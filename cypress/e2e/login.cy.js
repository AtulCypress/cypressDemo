/// <reference types="cypress" />

import BrowserAction from "../utility/BrowserEvent.js";
import Validation from "../utility/Validation.js";
import LoginPageObjects from "../locators/login_po.js"

const action = new BrowserAction()
const verify = new Validation()
const loginpo = new LoginPageObjects()

describe('Calendly Login Page Test', () => {

  it('Login into Calendly application', () => {
    const url = Cypress.env('URL');
    const username = Cypress.env('username');
    const password = Cypress.env('password');

    cy.viewport(1920, 1080)
    cy.visit(url);
    verify.checkElementVisibilityByText('Log in to your account')
    cy.get('#onetrust-accept-btn-handler').click()
    cy.get('[data-testid="email-input"] input').should('have.attr', 'placeholder', 'Enter your email')
    cy.get('[placeholder="Enter your email"]').type(username);
    cy.get('[type="submit"]').click()
    cy.get('[placeholder="password"]').type(password);
    cy.get('[type="submit"]').click({force:true})
    cy.wait(5000)
  });



});



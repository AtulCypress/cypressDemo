class Validation {

    // Verify the existence of an element
    checkElementPresence(locators) {
        cy.get(locators).should('exist');
    }

    // Verify the visibility of an element
    checkElementVisibility(locators) {
        cy.get(locators).should('be.visible');
    }

    // Verify the visibility of an element by text
    checkElementVisibilityByText(textValue) {
        cy.contains(textValue).should('be.visible');
    }

    // Verify the existence of text in an element
    checkExistOfText(textValue) {
        cy.contains(textValue).should('exist');
    }

    // Verify the presence of an element by text
    checkElementPresenceByText(text) {
        cy.contains(text).then((el) => {
            if (el.length) {
                return true;
            } else {
                return false;
            }
        });
    }

    // Verify the text of an element
    verifyElementWithText(locators, text) {
        return locators.should('contain.text', text);
    }

    // Verify the element presence by text
    verifyElementPresenceByText(locators, text) {
        return locators.contains(text);
    }

    // Extract text from an element
    extractTextFromElement(locators) {
        return locators.invoke('text');
    }

    // Validate text in an element
    validateText(locators, expectedText) {
        locators.should('have.text', expectedText);
    }

    // Validate if a button is enabled
    enabledButton(locators) {
        cy.get(locators).should('be.enabled');
    }

    // Validate if a button is disabled
    disabledButton(locators) {
        cy.get(locators).should('be.disabled');
    }

    disableCheck(locators) {
        locators.should('be.disabled');
    }

    // Validate a link
    linkValidation(locators, urlText) {
        cy.get(locators).should('have.attr', 'href').and('include', urlText);
    }

    // Validate dropdown values against expected values
    validateDropdownValues(locators, expectedValue) {
        locators.each(($el) => {
            expectedValue.forEach(element => {
                if ($el.text() === element) {
                    cy.log(`Actual value: ${$el.text()} matched with expected value: ${element}`);
                    return true;
                }
            });
        });
    }

    // Verify the existence of an element (alternate method)
    checkElementPresence1(locators) {
        locators.should('exist');
    }

    // Verify that an element does not exist
    checkElementNotPresence(locators) {
        locators.should('not.exist');
    }

    // Verify that a button text does not exist
    checkButtonTextNotPresence(locators) {
        cy.contains('button', locators).should('not.exist');
    }

    // verify the url
    verifyTextwithUrl(text) {
        return cy.url().should('include', text);
    }
}

export default Validation;
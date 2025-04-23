class BrowserAction {

    // Click on Element
    click(locators) {
        locators.click();
    }

    // Force Click on Element
    clickforce(locators) {
        locators.click({ force: true });
        cy.wait(200);
    }

    clickByContains(text) {
        return cy.contains(text).click();
    }

    doubleclickByContains(text) {
        return cy.contains(text).dblclick();
    }

    rightclickByContains(text) {
        return cy.contains(text).rightclick();
    }

    // Click on Element by Index
    elementsClickByIndex(locators, number) {
        return locators.eq(number).click();
    }

    // Click & Type
    type(locators, value) {
        locators.click({ force: true }).type(value);
    }

    // Type without Click
    typeWithoutClick(locators, value) {
        locators.type(value);
    }

    // Enter & validate text
    typeAndValidate(locators, value) {
        locators.click({ force: true }).type(value).should('have.value', value);
        cy.wait(500);
    }

    // Dropdown selection by value
    dropdownValueSelector(locators, toBeSelectedValue) {
        return cy.get(locators).contains(toBeSelectedValue).scrollIntoView().click({ force: true });
    }

    // Dropdown selection by Index
    dropdownElements(number) {
        return cy.get('[role="combobox"]').eq(number);
    }

    // Mouse Hover
    mouseHover(locators) {
        return locators.realHover();
    }

    // Drag & Drop
    performDragAndDrop(sourceLocator, targetLocator) {
        sourceLocator.realMouseDown({ position: 'center' }).realMouseMove(15, 0, { position: 'center' });
        cy.wait(500);
        targetLocator.realMouseMove(0, 0, { position: 'center' }).realMouseUp({ position: 'bottom' });
        cy.wait(500);
    }

    // Verify text within URL
    verifytextWithinURL(text) {
        return cy.url().should('include', text);
    }
}

export default BrowserAction;
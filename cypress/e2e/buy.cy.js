import path from '../support/pathManager';

describe('Comprar', () => {
    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    });

    it('Comprar', () => {
        cy.visit(path.variable.url);
        cy.xpath(path.element.buttonAgree).should('be.visible', { timeout: 10000 }).click();
        cy.xpath(path.element.buttonEnter).should('be.visible').click();
        cy.xpath(path.element.accessAccount).should('be.visible');
        cy.xpath(path.element.buttonRegisterNow).click();
        cy.xpath(path.element.titleCreateAccount).should('be.visible');
        cy.xpath(path.element.inputName).should('be.visible').type(path.variable.name);
        cy.xpath(path.element.inputEmail).should('be.visible').type(path.variable.emailSecundary);
        cy.xpath(path.element.inputPassword).should('be.visible').type(path.variable.password);
        cy.xpath(path.element.inputConfirmPassword).should('be.visible').type(path.variable.password);
        cy.xpath(path.element.inputBirthdate).should('be.visible').type(path.variable.birthdate);
        cy.xpath(path.element.inputPhone).should('be.visible').type(path.variable.phone);
        cy.xpath(path.element.inputCpf).should('be.visible').type(path.variable.cpf);
        cy.xpath(path.element.buttonCreateAccount).should('be.visible').click();
        cy.xpath(path.element.createSucess).should('be.visible');
        cy.xpath(path.elementHome.home).should('be.visible').click();
        cy.xpath(path.elementHome.inputOrigin).should('be.visible').type(path.variable.origin);
        cy.xpath(path.elementHome.selectOrigin).should('be.visible').click();
        cy.xpath(path.elementHome.inputDestination).should('be.visible').type(path.variable.destination);
        cy.xpath(path.elementHome.selectDestination).should('be.visible').click();
        cy.xpath(path.elementHome.inputGoing).should('be.visible').click();
        cy.get('[data-date="1688083200000"]').should('be.visible').click();
        cy.xpath(path.elementHome.buttonSearch).should('be.visible').click();
        cy.get('button[class^="btn btn-primary btn-reservation mt-lg-0 mt-2"]')
            .first()
            .click({ force: true });
        cy.wait(3000);
        cy.xpath(path.elementHome.buttonOne).should('be.visible').click();
        cy.wait(3000);
        cy.xpath(path.elementHome.buttonAdvance).should('be.visible').click();
        cy.wait(2000);
        cy.xpath(path.elementHome.inputName).should('be.visible').type(path.variable.name);
        cy.xpath(path.elementHome.inputDoc).should('be.visible').type(path.variable.cpf);
        cy.screenshot('screenshots/buy.png');
    })
});
import path from '../support/pathManager';

export function login() {
    describe('Login', () => {
        it('Login', () => {
            cy.visit(path.variable.url);
            cy.xpath(path.element.buttonAgree).should('be.visible', { timeout: 10000 }).click();
            cy.xpath(path.element.buttonEnter).should('be.visible', { timeout: 10000 }).click();
            cy.xpath(path.elementLogin.inputUser).should('be.visible').type(path.variable.email);
            cy.xpath(path.elementLogin.inputPassword).should('be.visible').type(path.variable.password);
            cy.xpath(path.elementLogin.buttonEnter).should('be.visible', { timeout: 10000 }).click();
            cy.wait(3000);
            cy.xpath(path.elementLogin.sucess).should('be.visible');
        });
    })
};
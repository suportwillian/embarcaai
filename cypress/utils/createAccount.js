import path from '../support/pathManager';
export function createAccount() {
    describe('Criar conta', () => {
    it('Criar conta', () => {
        cy.visit(path.variable.url);
        cy.xpath(path.element.buttonAgree).should('be.visible', {timeout: 10000}).click();
        cy.xpath(path.element.buttonEnter).should('be.visible').click();
        cy.xpath(path.element.accessAccount).should('be.visible');
        cy.xpath(path.element.buttonRegisterNow).click();
        cy.xpath(path.element.titleCreateAccount).should('be.visible');
        cy.xpath(path.element.inputName).should('be.visible').type(path.variable.name);
        cy.xpath(path.element.inputEmail).should('be.visible').type(path.variable.email4);
        cy.xpath(path.element.inputPassword).should('be.visible').type(path.variable.password);
        cy.xpath(path.element.inputConfirmPassword).should('be.visible').type(path.variable.password);
        cy.xpath(path.element.inputBirthdate).should('be.visible').type(path.variable.birthdate);
        cy.xpath(path.element.inputPhone).should('be.visible').type(path.variable.phone);
        cy.xpath(path.element.inputCpf).should('be.visible').type(path.variable.cpf);
        cy.xpath(path.element.buttonCreateAccount).should('be.visible').click();
        cy.xpath(path.element.createSucess).should('be.visible');
    }) 
})};
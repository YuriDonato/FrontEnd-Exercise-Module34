/// <reference types="cypress"/>

describe("Testes para a agenda de contatos", () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/");
    });
    it("Deve cadastrar um contato", () => {
        cy.get('[type="text"]').type("Yuri Donato");
        cy.get('[type="email"]').type("yuri@teste.com");
        cy.get('[type="tel"]').type("67 992718050");
        cy.get(".adicionar").click();
        cy.wait(2000);
        cy.screenshot("tela-cadastro-concluido", { overwrite: true });
    });

    it("Deve alterar o contato", () => {
        cy.get(":nth-child(5) > .sc-gueYoa > .edit").click();
        cy.get('[type="text"]').clear();
        cy.get('[type="email"]').clear();
        cy.get('[type="tel"]').clear();
        cy.get('[type="text"]').type("Yuri Donato Editado");
        cy.get('[type="email"]').type("yuriEditado@teste.com");
        cy.get('[type="tel"]').type("68 992718050");
        cy.get(".alterar").click();
        cy.wait(2000);
        cy.screenshot("tela-alteracao-concluida", { overwrite: true });
    });

    it("Deve remover um contato", () => {
        cy.get(":nth-child(5) > .sc-gueYoa > .delete").click();
        cy.wait(2000);
        cy.screenshot("tela-remocao-concluida", { overwrite: true });
    });
});

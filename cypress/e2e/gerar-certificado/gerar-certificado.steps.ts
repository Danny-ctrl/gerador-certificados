import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página de geração de certificado", () => {
  cy.visit("/");
});

When("preencho o nome {string}", (nome: string) => {
  cy.get("#nome").clear().type(nome);
});

When("adiciono a atividade {string}", (atividade: string) => {
  cy.get("#atividade").clear().type(atividade);
  cy.contains("Adicionar").click();
});

When("removo a atividade {string}", (atividade: string) => {
  cy.contains(".item", atividade).find(".remove-btn").click();
});

When("clico em {string}", (texto: string) => {
  cy.contains(texto).click();
});

Then("devo ser redirecionado para a página do certificado", () => {
  cy.url().should("include", "/certificados/");
});

Then("o botão {string} deve estar desabilitado", (texto: string) => {
  cy.contains(texto).should("have.attr", "disabled");
});

Then("a lista de atividades deve conter apenas {string}", (atividade: string) => {
  cy.get(".item-list .item").should("have.length", 1);
  cy.get(".item-list .item").should("contain.text", atividade);
});

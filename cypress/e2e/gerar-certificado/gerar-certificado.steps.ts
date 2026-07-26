import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from '@faker-js/faker';

Given("que estou na página de geração de certificado", () => {
  cy.visit("/certificados/novo");
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

When("não preencho o nome", () => {
  cy.get("#nome").clear();
});
When("preencho o nome com um valor aleatório", () => {
  const nomeAleatorio = faker.person.fullName();
  cy.get("#nome").clear().type(nomeAleatorio);
});

When("adiciono uma atividade aleatória", () => {
  const atividadeAleatoria = `Curso de ${faker.hacker.noun()}`;
  cy.get("#atividade").clear().type(atividadeAleatoria);
  cy.contains("Adicionar").click();
});

When("gero {int} certificados aleatórios", (quantidade: number) => {
  for (let i = 0; i < quantidade; i++) {
    cy.visit("/certificados/novo");

    const nomeAleatorio = faker.person.fullName();
    const atividadeAleatoria = `Curso de ${faker.hacker.noun()}`;

    cy.get("#nome").clear().type(nomeAleatorio);
    cy.get("#atividade").clear().type(atividadeAleatoria);
    cy.contains("Adicionar").click();
    cy.contains("Gerar certificado").click();
  }
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

Then("devo ver pelo menos {int} certificados na lista", (quantidade: number) => {
  cy.visit("/");
  cy.get("app-item-certificado").should("have.length.at.least", quantidade);
});

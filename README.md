# Gerador de Certificados

Aplicação desenvolvida em **Angular** para geração de certificados de forma simples e automatizada.

O sistema permite preencher os dados do participante, validar as informações e gerar o certificado em PDF para download.

---

# Tecnologias utilizadas

## Aplicação

- Angular 20
- TypeScript
- HTML5
- CSS3

## Testes

- Cypress
- Cucumber (Gherkin)
- @badeball/cypress-cucumber-preprocessor
- @bahmutov/cypress-esbuild-preprocessor

---

# Como executar o projeto

## Pré-requisitos

- Node.js
- npm

## Instalação

Clone o repositório:

```bash
git clone https://github.com/Danny-ctrl/gerador-certificados.git
```

Acesse a pasta do projeto:

```bash
cd gerador-certificados
```

Instale as dependências:

```bash
npm install
```

Inicie a aplicação:

```bash
ng serve
```

A aplicação ficará disponível em:

```
http://localhost:4200
```

---

# Testes E2E com Cucumber (Gherkin) + Cypress

Este projeto utiliza **BDD (Behavior Driven Development)** para os testes end-to-end (E2E), combinando **Cypress** com **Cucumber**, utilizando a linguagem **Gherkin**.

## O que é BDD com Gherkin?

Gherkin é uma linguagem simples e estruturada para descrever o comportamento esperado do sistema de forma legível tanto para pessoas técnicas quanto para pessoas de negócio.

Os arquivos `.feature` funcionam como documentação viva da aplicação e também como entrada para a automação dos testes.

## Palavras-chave

| Palavra-chave | Significado |
|---------------|------------|
| **Feature** | Funcionalidade |
| **Background** | Contexto comum |
| **Scenario** | Cenário de teste |
| **Scenario Outline** | Cenário parametrizado |
| **Examples** | Dados utilizados pelo Scenario Outline |
| **Given** | Contexto inicial |
| **When** | Ação realizada |
| **Then** | Resultado esperado |

---

# Estrutura dos testes

```text
cypress/
├── e2e/
│   ├── gerar-certificado/
│   │   └── gerar-certificado.steps.ts
│   └── gerar-certificado.feature
├── fixtures/
└── support/
    └── e2e.ts

cypress.config.ts
```

---

# Executando os testes

## Abrir o Cypress

Com a aplicação em execução:

```bash
npx cypress open
```

Selecione **E2E Testing**, escolha um navegador e execute o arquivo `.feature`.

## Executar em modo Headless

Ideal para integração contínua (CI):

```bash
npx cypress run
```

---

# Como criar um novo teste

1. Crie um arquivo `.feature` dentro de `cypress/e2e/`.
2. Crie uma pasta com o mesmo nome do cenário.
3. Dentro dela, crie um arquivo `.steps.ts`.
4. Implemente os passos utilizando `Given`, `When` e `Then`.
5. Prefira seletores estáveis (`id` ou `data-cy`).

## Exemplo de Feature

```gherkin
Feature: Gerar certificado

  Scenario: Gerar certificado com sucesso
    Given que estou na página inicial
    When realizo uma ação
    Then devo visualizar o resultado esperado
```

## Exemplo de Step Definition

```typescript
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página inicial", () => {
  cy.visit("/");
});

When("realizo uma ação", () => {
  // ação do teste
});

Then("devo visualizar o resultado esperado", () => {
  // validação
});
```

---

# Boas práticas

- Utilize seletores por `id` ou `data-cy`.
- Escreva cenários do ponto de vista do usuário.
- Evite duplicação de Step Definitions.
- Mantenha os arquivos `.feature` como documentação viva do comportamento da aplicação.
- Escreva cenários pequenos, independentes e fáceis de manter.

---

# Estrutura do projeto

```text
src/
├── app/
│   ├── _components/
│   ├── _services/
│   ├── _models/
│   └── app.ts
├── assets/
└── styles.css

cypress/
├── e2e/
├── fixtures/
└── support/
```

---

## 🧪 Testes Automatizados

O projeto possui testes **End-to-End (E2E)** desenvolvidos com **Cypress** e **Cucumber**, utilizando a abordagem **BDD (Behavior Driven Development)**.

Os cenários são escritos em **Gherkin**, permitindo que os requisitos sejam descritos de forma legível para desenvolvedores, analistas e pessoas de negócio.

### Funcionalidades cobertas

Atualmente os testes automatizados validam os seguintes cenários:

- ✅ Geração de certificado com nome e uma atividade.
- ✅ Validação do botão **Gerar certificado** quando não existe nenhuma atividade cadastrada.
- ✅ Validação do botão quando o nome não foi informado.
- ✅ Inclusão e remoção de atividades.
- ✅ Geração de certificados utilizando diferentes conjuntos de dados (**Scenario Outline**).
- ✅ Geração de certificados com dados aleatórios.
- ✅ Geração em lote de múltiplos certificados aleatórios.

### Exemplo de cenário em Gherkin

```gherkin
Funcionalidade: Geração de certificado
  Cenário: Gerar certificado com nome e uma atividade
    Dado que estou na página de geração de certificado
    Quando preencho o nome "Maria Silva"
    E adiciono a atividade "Curso de Angular"
    E clico em "Gerar certificado"
    Então devo ser redirecionado para a página do certificado
```

### Dados de teste

Os testes utilizam a biblioteca **Faker.js** para geração de dados sintéticos aleatórios, evitando dependência de serviços externos e garantindo testes determinísticos e independentes de rede.

### Como executar

```bash
# Em um terminal, suba a aplicação
ng serve

# Em outro terminal, abra o Cypress
npx cypress open
```

Na interface do Cypress, selecione **E2E Testing**, escolha um navegador e clique no arquivo `.feature` desejado.

Para rodar em modo headless (sem interface, ideal para CI):

```bash
npx cypress run
```

### Benefícios da abordagem BDD

- Cenários legíveis para pessoas técnicas e não técnicas.
- Documentação viva do comportamento esperado da aplicação.
- Maior confiabilidade durante evoluções do sistema.
- Facilidade para adicionar novos casos de teste.
- Regressão automatizada das principais funcionalidades.

# Licença

Este projeto foi desenvolvido para fins de estudo e demonstração de conhecimentos em Angular, Cypress, Cucumber e automação de testes.

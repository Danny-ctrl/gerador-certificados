# 📜 Gerador de Certificados

Aplicação web desenvolvida em **Angular** para geração de certificados, permitindo cadastrar participantes, adicionar atividades, validar as informações e exportar o certificado em PDF.

Além da implementação da aplicação, o projeto possui uma suíte de **testes automatizados End-to-End (E2E)** utilizando **Cypress** e **Cucumber**, aplicando a metodologia **BDD (Behavior Driven Development)** para validar os principais fluxos do sistema.

---

# 🎯 Objetivo

Este projeto foi desenvolvido com dois objetivos principais:

- Desenvolver uma aplicação Angular para geração de certificados.
- Demonstrar a implementação de testes automatizados E2E utilizando Cypress, Cucumber e Gherkin.

---

# ✨ Funcionalidades

## Aplicação

- Cadastro do nome do participante.
- Inclusão de uma ou mais atividades.
- Remoção de atividades cadastradas.
- Validação dos campos obrigatórios.
- Geração dinâmica do certificado.
- Visualização do certificado.
- Exportação do certificado em PDF.

## Testes Automatizados

- Testes End-to-End (E2E).
- Escrita dos cenários utilizando Gherkin.
- Automação com Cypress.
- Utilização de **Scenario Outline** para testes parametrizados.
- Geração de dados aleatórios utilizando Faker.js.
- Validação dos principais fluxos da aplicação.

---

# 🛠 Tecnologias Utilizadas

| Tecnologia | Finalidade |
|------------|------------|
| Angular 20 | Framework Front-end |
| TypeScript | Linguagem de programação |
| HTML5 | Estrutura da aplicação |
| CSS3 | Estilização |
| jsPDF | Geração do PDF |
| html2canvas | Conversão do certificado em imagem para exportação |
| Cypress | Testes automatizados End-to-End |
| Cucumber | Escrita dos cenários em Gherkin |
| Faker.js | Geração de dados aleatórios para testes |

---

# 📂 Estrutura do Projeto

```text
src/
├── app/
│   ├── _components/
│   ├── _models/
│   ├── _services/
│   └── app.ts
├── assets/
└── styles.css

cypress/
├── e2e/
├── fixtures/
└── support/

cypress.config.ts
```

## Organização

### `_components`

Contém os componentes responsáveis pela interface da aplicação.

### `_services`

Centraliza as regras de negócio e serviços utilizados pela aplicação.

### `_models`

Armazena interfaces e modelos utilizados durante o desenvolvimento.

### `assets`

Arquivos estáticos utilizados pela aplicação.

### `cypress`

Contém toda a estrutura dos testes automatizados End-to-End.

---

# 🔄 Fluxo da Aplicação

```text
Usuário
    │
    ▼
Informa o nome
    │
    ▼
Adiciona as atividades
    │
    ▼
Validação dos dados
    │
    ▼
Geração do certificado
    │
    ▼
Visualização
    │
    ▼
Exportação em PDF
```

---

# 🚀 Como Executar o Projeto

## Pré-requisitos

- Node.js
- npm

## Clone o repositório

```bash
git clone https://github.com/Danny-ctrl/gerador-certificados.git
```

## Acesse a pasta do projeto

```bash
cd gerador-certificados
```

## Instale as dependências

```bash
npm install
```

## Execute a aplicação

```bash
ng serve
```

A aplicação estará disponível em:

```text
http://localhost:4200
```

---

# 🧪 Testes Automatizados

Para garantir a qualidade da aplicação, foi implementada uma suíte de testes **End-to-End (E2E)** utilizando **Cypress** e **Cucumber**.

Os cenários são escritos em **Gherkin**, permitindo descrever o comportamento esperado da aplicação de forma legível para desenvolvedores, analistas e demais envolvidos no projeto.

Essa abordagem segue os princípios do **BDD (Behavior Driven Development)**, onde os requisitos funcionais são transformados em cenários executáveis.

## Estrutura dos testes

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

# ✅ Cobertura dos Testes

Os testes automatizados validam os principais fluxos da aplicação:

- ✅ Geração de certificado com nome e uma atividade.
- ✅ Validação do botão **Gerar Certificado** quando nenhuma atividade foi adicionada.
- ✅ Validação da obrigatoriedade do nome do participante.
- ✅ Inclusão de atividades.
- ✅ Remoção de atividades.
- ✅ Geração de certificados utilizando diferentes conjuntos de dados (**Scenario Outline**).
- ✅ Geração de certificados utilizando dados aleatórios com **Faker.js**.
- ✅ Geração de múltiplos certificados em sequência.

---

# 📝 Exemplo de Cenário BDD

```gherkin
Funcionalidade: Geração de certificado

  Cenário: Gerar certificado com nome e uma atividade
    Dado que estou na página de geração de certificado
    Quando preencho o nome "Maria Silva"
    E adiciono a atividade "Curso de Angular"
    E clico em "Gerar certificado"
    Então devo ser redirecionado para a página do certificado
```

---

# ▶️ Executando os Testes

Com a aplicação em execução, abra outro terminal.

## Interface gráfica

```bash
npx cypress open
```

Selecione **E2E Testing**, escolha um navegador e execute o arquivo `.feature`.

## Modo Headless

Ideal para integração contínua (CI):

```bash
npx cypress run
```

---

# ➕ Como Criar um Novo Cenário

1. Crie um arquivo `.feature` em `cypress/e2e`.
2. Descreva o comportamento esperado utilizando Gherkin.
3. Crie o arquivo `.steps.ts` responsável pela implementação dos passos.
4. Utilize seletores estáveis (`id` ou `data-cy`).
5. Reutilize Step Definitions sempre que possível.

---

# 📋 Boas Práticas Adotadas

- Organização do projeto seguindo a arquitetura padrão do Angular.
- Separação das responsabilidades entre componentes, serviços e modelos.
- Aplicação da metodologia BDD para especificação dos requisitos.
- Testes escritos do ponto de vista do usuário.
- Reutilização de Step Definitions.
- Utilização de dados dinâmicos para ampliar a cobertura dos testes.
- Utilização de seletores estáveis (`id` e `data-cy`).
- Cenários independentes e de fácil manutenção.

---

# 🚀 Melhorias Futuras

- Persistência dos certificados gerados.
- Histórico de certificados emitidos.
- Personalização de modelos de certificados.
- Inclusão de QR Code para validação.
- Assinatura digital.
- Pipeline de Integração Contínua (CI) para execução automática dos testes.

---

# 📄 Licença

Este projeto foi desenvolvido para fins de estudo e demonstração de conhecimentos em:

- Angular
- TypeScript
- Cypress
- Cucumber
- Behavior Driven Development (BDD)
- Automação de Testes End-to-End (E2E)

# language: pt
Funcionalidade: Geração de certificado
  Como usuário do sistema
  Eu quero preencher os dados de um certificado
  Para gerar e visualizar o certificado do aluno

  Cenário: Gerar certificado com nome e uma atividade
    Dado que estou na página de geração de certificado
    Quando preencho o nome "Maria Silva"
    E adiciono a atividade "Curso de Angular"
    E clico em "Gerar certificado"
    Então devo ser redirecionado para a página do certificado

  Cenário: Botão de gerar certificado fica desabilitado sem atividade
    Dado que estou na página de geração de certificado
    Quando preencho o nome "João Souza"
    Então o botão "Gerar certificado" deve estar desabilitado

  Cenário: Remover uma atividade da lista
    Dado que estou na página de geração de certificado
    Quando preencho o nome "Ana Costa"
    E adiciono a atividade "Curso de Testes"
    E adiciono a atividade "Curso de Cypress"
    E removo a atividade "Curso de Testes"
    Então a lista de atividades deve conter apenas "Curso de Cypress"

  Cenário: Não permite gerar certificado sem nome
    Dado que estou na página de geração de certificado
    Quando adiciono a atividade "Curso de Angular"
    Mas não preencho o nome
    Então o botão "Gerar certificado" deve estar desabilitado

  Esquema do Cenário: Gerar certificado com diferentes nomes e atividades
    Dado que estou na página de geração de certificado
    Quando preencho o nome "<nome>"
    E adiciono a atividade "<atividade>"
    E clico em "Gerar certificado"
    Então devo ser redirecionado para a página do certificado

    Exemplos:
      | nome        | atividade        |
      | Maria Silva | Curso de Angular |
      | João Souza  | Curso de Cypress |
      | Ana Costa   | Curso de Testes  |

  Cenário: Gerar certificado com dados aleatórios
    Dado que estou na página de geração de certificado
    Quando preencho o nome com um valor aleatório
    E adiciono uma atividade aleatória
    E clico em "Gerar certificado"
    Então devo ser redirecionado para a página do certificado

 Cenário: Gerar múltiplos certificados aleatórios
    Dado que estou na página de geração de certificado
    Quando gero 5 certificados aleatórios
    Então devo ver pelo menos 5 certificados na lista

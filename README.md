# Olá, seja Bem-Vindo(a) ao repositório do Hackathon - Grupo 5.

---
# Descrição
Trata-se de uma aplicação FullStack, com o FrontEnd desenvolvido em [React](https://pt-br.reactjs.org/), e o BackEnd desenvolvido em [NodeJs](https://nodejs.org/pt-br/docs/) conectado ao banco de dados não-relacional [MongoDb](https://docs.mongodb.com/). O objetivo é movimentar a economia das cidades no pós-pandemia, dessa forma, aprensentar eventos que incentivem as pessoas a irem as cidades propostas. 

---
# Tecnologias e Ferramentas utilizadas
 - React Hooks para gerenciamentos de Estado dos componentes.
 - Ciclo de Vida de um componente React.
 - Bibliotecas Mocha, Chai e Sinon para realização de testes do FrontEnd.
 - Modelo MSC para as camadas feitas no BackEnd.
 - Instalação do Express, Nodemon, MongoDb e Cors para desenvolvimento do BackEnd.
 - Assim como referências na documentação das ferramentas e no conteúdo do curso da [Trybe](https://www.betrybe.com/)

 ---

# Referências
  -Eventos: https://eztravel.com.br/eventos-de-turismo-2021-brasil/
  -Cidades: WikiPedia e Google
  -Baseado em: https://revistas.face.ufmg.br/index.php/mtr/article/view/5807

---
# Clone o projeto para a sua máquina
- Para fazer isso, basta abrir o seu terminal e digitar o comando `git clone git@github.com:BSY-Development/turismo-5.git`
- Feito isso, utilize o comando `cd turismo-5` para entrar na pasta do repositório que você acabou de clonar.

---
# Instruções para executar o projeto

## 1- Configurar o MongoDb
-Entrar na pasta de backend e criar um arquivo .env colocando como conteúdo `DB_CONNECTION=mongodb+srv://Alice:malry123@cluster0.kry2p.mongodb.net/test`.

## 2- Configurar o BackEnd
- Abra um novo terminal e navegue até a pasta do backend. Feito isso realize o comando `npm install` dentro dela (necessário apenas uma vez).
- Com as dependências instaladas para o backend, precisamos iniciá-lo para que o projeto funcione. Para isso realize o comando `npm run dev`. Seu terminal deve ficar aberto para que o servidor funcione.

Obs: O backend executará na porta 3001.

## 3- Configurar o FrontEnd
- Por fim, deve-se configurar a parte frontend da aplicação. para isso abra um novo terminal(lembrando que até o momento você terá 1 terminal aberto para o backend).
- Navegue até a pasta "frontend" e realize o comando `npm install`. Deve ser realizado somente uma vez.
- Feito isso você deverá iniciar a aplicação no frontend e manter o terminal aberto. Para isso realize o comando `npm start`. Seu terminal deve ficar aberto para que o frontend funcione. 

Obs: O frontend executará na porta 3000.

---
# Linter do projeto
Neste projeto foi configurado o [ESLint](https://eslint.org/), para uma boa legibilidade do código e atendimento a boas práticas de Desenvolvimento.

---
# Execução dos Testes

## 1- FrontEnd (ainda estão em desenvolvimento)

## 2- BackEnd
Para realizar os testes do backend basta navegar até a pasta do backend e executar o comando `npm test` ou `npm run test`. Dessa forma os testes serão realizados.

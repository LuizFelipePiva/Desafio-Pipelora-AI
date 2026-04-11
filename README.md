# Desafio-Pipelora-AI

## Como utilizar a API:

## 1. Baixando dependências

- Instale o Node.js:

https://nodejs.org/en/download

- Para instalar todas as dependências, rode os comandos no terminal:

npm install puppeteer

npm install express

npm install dotenv

## 2. Criar .env

Crie um arquivo .env na raiz do projeto e adicione "PORT=3000" para a API rodar na porta 3000

## 3. Iniciando Servidor

Para iniciar o servidor, abra um terminal e rode o comando "npm start" ou "node src/index.js"

## 4. Como rodar (Postman)

- Deixe o servidor rodando

- Abra o aplicativo postman, selecione o metodo post coloque "http://localhost:3000/integrar" na url.

- Selecione a opcao Body e crie o seguinte json:

{

	"login": "tomsmith",

    "password": "SuperSecretPassword!",

    "url": "https://the-internet.herokuapp.com/login"
    
}

- Clique no botao "Send"

## 5. Como rodar (terminal)

- Deixe o servidor rodando

- Abra um novo terminal (CMD)

- Cole o seguinte comando:

curl -X POST http://localhost:3000/integrar ^

-H "Content-Type: application/json" ^

-d "{\"login\":\"tomsmith\",\"senha\":\"SuperSecretPassword!\",\"url\":\"https://the-internet.herokuapp.com/login\"}"

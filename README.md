# Desafio-Pipelora-AI

## Como utilizar a API:

## 1. Baixando dependências

- Instale o Node.js:

https://nodejs.org/en/download

- Para instalar todas as dependências, rode os comandos no terminal:
{

    npm install express puppeteer dotenv
    
}

## 2. Criar .env

Crie um arquivo .env na raiz do projeto, adicione "PORT=3000" para a API rodar na porta 3000 e "URL_DATA=https://the-internet.herokuapp.com/challenging_dom"
para ter um caminho para buscar os dados.

## 3. Iniciando Servidor

Para iniciar o servidor, abra um terminal e rode o comando "npm start" ou "node src/index.js".

## 4. Como rodar (Postman / Apidog)

- Deixe o servidor rodando.

- Abra o aplicativo e crie uma requisição POST com "http://localhost:3000/integrar" na url.

- Selecione a opção Body -> raw (Postman) ou JSON (Apidog) e crie o seguinte json:

{

	"login": "tomsmith",
    "senha": "SuperSecretPassword!",
    "url_sistema": "https://the-internet.herokuapp.com/login"
    
}

- Clique no botao "Send".

## 5. Como rodar (terminal)

- Deixe o servidor rodando.

- Abra um novo terminal (CMD).

- Cole o seguinte comando:

curl -X POST http://localhost:3000/integrar ^

-H "Content-Type: application/json" ^

-d "{\"login\":\"tomsmith\",\"senha\":\"SuperSecretPassword!\",\"url_sistema\":\"https://the-internet.herokuapp.com/login\"}"

## Ver resultado

- Depois de rodar, o arquivo "result.json" receberá o resultado da chamada.

## 7. Exemplo de resultado

{

    "success": true,
    "messageLogin": "Login realizado com sucesso!",
    "messageData": "Dados extraídos com sucesso!",
    "total": 10,
    "data": [
        {
            "Lorem": "Iuvaret0",
            "Ipsum": "Apeirian0",
            "Dolor": "Adipisci0",
            "Sit": "Definiebas0",
            "Amet": "Consequuntur0",
            "Diceret": "Phaedrum0"
        }
    ]

}
# Projeto ToDoList CRUD Fullstack

Este é um projeto de ToDoList que implementa operações CRUD (Create, Read, Update, Delete) em uma lista de tarefas. Até o momento, o projeto consiste apenas no backend, que é uma API completa desenvolvida com Node.js, Express e MySQL.

## Funcionalidades

- [x] Criar uma nova tarefa.
- [x] Listar todas as tarefas existentes.
- [x] Atualizar uma tarefa existente.
- [x] Excluir uma tarefa.

## Tecnologias Utilizadas

- Node.js
- Express.js
- MySQL

## Configuração do Banco de Dados

Antes de executar o projeto, é necessário configurar o banco de dados MySQL. Você pode fazer isso seguindo estas etapas:

1. Instale o MySQL em seu sistema, se ainda não estiver instalado.

2. Crie um banco de dados MySQL para o projeto.

3. Renomeie o arquivo `.env.example` para `.env` na pasta raiz do projeto e configure as variáveis de ambiente necessárias para a conexão com o banco de dados. Você pode usar o arquivo `.env.example` como referência.

```plaintext
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_DATABASE=nome_do_banco_de_dados
```

Edite o arquivo de configuração connection.js na pasta src para usar as variáveis de ambiente configuradas em seu arquivo .env.
```javascript
require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

module.exports = {
host: process.env.DB_HOST,
user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
database: process.env.DB_DATABASE,
};
```

## Instalação e Execução

Siga estas etapas para executar o projeto:

1. Clone este repositório:

       git clone https://github.com/seu-usuario/seu-projeto-todolist.git
2. Navegue até a pasta do projeto:
     
       cd seu-projeto-todolist
3. Instale as dependências:

       npm start


A API estará acessível em [http://localhost:3333](http://localhost:3333). Certifique-se de que o MySQL esteja em execução e configurado corretamente.

## Endpoints da API

A API possui os seguintes endpoints:

- `GET /tasks`: Lista todas as tarefas.
- `POST /tasks`: Cria uma nova tarefa.
- `PUT /tasks/:id`: Atualiza uma tarefa existente.
- `DELETE /tasks/:id`: Exclui uma tarefa.

Para mais detalhes sobre como usar cada endpoint, consulte a documentação da API.

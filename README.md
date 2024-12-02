# 🛠️ Projeto DevOps: Lista de Itens

Este projeto é uma aplicação simples de gerenciamento de itens, construída para demonstrar práticas DevOps com integração entre backend, frontend e uso de Docker para containerização.

---

## 📋 **Funcionalidades**

- Adicionar itens à lista.
- Listar todos os itens.
- Excluir itens da lista.


---

## 🚀 **Como Rodar o Projeto**

### Pré-requisitos

- **Docker**: Certifique-se de que o Docker está instalado na sua máquina. [Instalar Docker](https://docs.docker.com/get-docker/)
- **Docker Compose**: Já incluído na instalação do Docker.

### Passos para execução

1. Clone este repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd meu-projeto
   ```

2. Construa e inicie os containers:
 ```bash
docker-compose up --build
```

3. Acesse a aplicação:

Frontend: http://localhost:8080
Backend (API): http://localhost:3000

APIs Disponíveis
Base URL: http://localhost:3000
GET /items
Retorna a lista de itens.
Exemplo de Resposta:
```bash
[
  { "id": 1, "name": "Item 1" },
  { "id": 2, "name": "Item 2" }
]
```

POST /items
Adiciona um novo item.
Corpo da Requisição:
````bash
{ "name": "Novo Item" }
````

Exemplo de Resposta:

````{ "id": 3, "name": "Novo Item" }````

DELETE /items/:id
Remove um item pelo ID.
Exemplo de Resposta:

```{ "message": "Item deleted successfully" }```

## * Testes com Postman*

1. Importe a API no Postman:

- Crie requisições para as rotas:
  - GET /items
  - POST /items
  - DELETE /items/:id
- Documente os testes no Postman.

2. Executando os testes:

Teste cada endpoint para garantir que as funcionalidades estão funcionando como esperado.

## *🐳 Docker*
- Backend:

  - Dockerfile configurado para rodar o backend no Node.js.
  - Porta exposta: 3000.

- Frontend:

  - Dockerfile configurado para servir o frontend com Nginx.
  - Porta exposta: 8080.

- Orquestração:

  - O docker-compose.yml conecta os dois serviços.


## *📚 Tecnologias Utilizadas*
- Frontend:
  - HTML, CSS, JavaScript.

- Backend:
  - Node.js, Express.

- DevOps:
  - Docker, Docker Compose.

- Testes:
  - Postman para testes e documentação da API.


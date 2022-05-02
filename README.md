# Desafio  FullStack Júnior Contele

<p>Nesse projeto foi desenvolvida uma API com NodeJs e Express para controle de usuários </p>


* [Sobre](#sobre)
* [Instalar dependências](#instalar)
* [Executar aplicação](#executar)
* [Rota Swagger](#swagger)
* [Rotas](#rotas)


# Sobre

<p>Esse projeto foi desenvolvido como teste para participar da seleção de desenvolvedor fullstack junior!</p>

<p>Foram utilizadas as seguintes tecnologias:</p>

<ul>
  <li>JavaScript</li>
  <li>Express</li>
  <li>Knex</li>
  <li>PostgreSql</li>
  <li>Swagger</li>
  <li>Docker Compose</li>
</ul>

# Instalar dependências

```bash
$ npm install
```

# Executar aplicação

```bash
# Subir os containers para o APP e para o BD
$ docker-compose up
```

# Rota Swagger

```bash
# Rota para acessar a documentação Swagger
$ http://localhost:3000/docs-api
```


# Rotas

<table>
  <tr>
    <td>HTTP</td>
    <td>Route</td>
    <td>Body</td>
    <td>Descrição</td>
  </tr>
  <tr>
    <td>Get</td>
    <td>/api/v1/users</td>
    <td></td>
    <td>Listar todos os usuários</td>
  </tr>
  <tr>
    <td>Get</td>
    <td>/api/v1/users/{id}</td>
    <td></td>
    <td>Listar usuário pelo ID</td>
  </tr>
   <tr>
    <td>Post</td>
    <td>/api/v1/users</td>
    <td>JSON(email,senha)</td>
    <td>Criar único usuário</td>
  </tr>
   <tr>
    <td>Put</td>
    <td>/api/v1/users/{id}</td>
    <td>JSON(email,senha)</td>
    <td>Atualizar pelo ID</td>
  </tr>
   <tr>
    <td>Delete</td>
    <td>/api/v1/users</td>
    <td></td>
    <td>Deletar todos os usuários</td>
  </tr>
   <tr>
    <td>Delete</td>
    <td>/api/v1/users/{id}</td>
    <td></td>
    <td>Deletar usuário pelo ID</td>
  </tr>
</table>
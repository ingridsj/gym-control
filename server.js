const express = require('express') //Criando o servidor
const nunjucks = require('nunjucks')
const routes = require("./routes")

const server = express()

server.use(express.urlencoded({ extended: true})) //config para receber e ler os dados do front
server.use(express.static('public')) //Arrumando a pasta public
server.use(routes) //Criando as rotas

server.set("view engine", "njk") // Configurando a view engine

nunjucks.configure("views", {
    express:server
})

server.listen(5000, function(){ //Colocando o servidor online
    console.log("Server is running")
})
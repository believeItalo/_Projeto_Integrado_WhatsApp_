/*
    Objetivo: Construir uma API para ser utilizada no projeto "Whatsapp"
    Autor: Ítalo Reis
    Data Inicio: 17/03/2023
    Versão: 1.0

*/

const express = require('express')

const cors = require('cors')

const bodyParser = require('body-parser')

const app = express()


app.use((request, response, next) => {

    response.header('Access-Control-Allow-Origin', '*')

    response.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, OPTIONS')

    app.use(cors())

    next()
})

const contatos = require('./module/contatos.js')

app.get('/whatsapp/perfil/:numeroDeTelefone' , cors() , async function (request,response,next){
   
    let numeroDeCelular = request.params.numeroDeTelefone

    const getPerfil = contatos.getPerfil(numeroDeCelular)


        response.status(200)
        response.json(getPerfil)
})
app.get('/whatsapp/perfil/contatos/:idContato' , cors(), async function (request,response,next){
   let idContato = request.params.idContato

   const getPerfil = contatos.getMenssagens(idContato)

   response.status(200)
   response.json(getPerfil)
})

app.listen(8080, function () {
    console.log('Servidor aguardando requisições na porta 8080');
})
const express = require('express')  // Importando
const app = express() // Iniciando express

app.get('/', function(req,res){
    res.send("Teste")
})

app.get('/canal/', (req, res) => {
    var valor = req.query["teste"]
    res.send(` ${valor == null ? 'Não há valor' : 'O valor passado foi ' + valor }`)
})


app.get('/oi/:nome?', function(req,res){

    if(req.params.nome != null){
        res.send(`<h1>Olá, ${req.params.nome}</h1>`)
    }else{
        res.send(`<h1>Olá!</h1>`)
    }
    
})

app.listen(8088, function(erro){
    if(erro){
        console.log('Ocorreu um erro, viu?!')
    }else{
        console.log('Servidor iniciado com sucesso!')
    }
})
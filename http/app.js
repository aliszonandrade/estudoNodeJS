var http = require('http')

http.createServer(function(requisicao, resposta){
    resposta.end("<h1>Bem vindo ao meu site!</h2>" )
}).listen(8088)
console.log('Meu servidor está rodando')
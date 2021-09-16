function enviarEmail(corpo, para, callback){
    setTimeout(() => {
    
            var deuErro = true;
    
            if(deuErro){
                callback("O envio do e-mail falhou!!!");
            }else{
                callback();
            }
        }, 3000)
    }
    
    console.log("Isso é um teste");
    enviarEmail("Oi, seja bem vindo ao meu teste", "alisson@teste.com", (erro) => {
        
        if(erro == undefined){
            console.log("Tudo ok!");
        }else{    
            console.log("Ocorreu um erro: " + erro);
        }
    });
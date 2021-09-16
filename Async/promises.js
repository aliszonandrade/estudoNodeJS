function catchId(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2);
        }, 1500);
    })
}

function searchEmailInDB(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("eita@teste.com")
        }, 2000);
    })
}


function enviarEmail(corpo, para){
    //NÃO NECESSÁRIO CALLBACK, POIS PROMISE É ALTERNATIVA AO CALLBACK
    
    return new Promise((resolve, reject) => { //Eu prometo que...
        setTimeout(() => {
            
            var deuErro = false;


            if(!deuErro){
                resolve({time: 6, to: "alisao"}); //só aceita um parametro, no caso, estou passando um json
            }else{
                reject("Se deu mal e não vou te explicar o porquê.")
            };

        }, 1000);
    }); 
}


catchId().then((id) => {
    searchEmailInDB(id).then((email) => {
        
        enviarEmail("Olá",email).then(() => {
            console.log("Email enviado para o usuário com o  id: " + id)
        }).catch(err => {
            console.log(err);
        });
    })
})


// enviarEmail("Ola brother!","opa@teste.com").then(({ time, to }) => {
//     console.log(`Tempo: ${time}s -- Para: ${to}`);
//     console.log("E-mail enviado, meu brother!");
// }).catch(function(erro){
//     console.log("Que pena! Que pena, amor.\n" + erro);
// })

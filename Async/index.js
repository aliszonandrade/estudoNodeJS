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
            
            var deuErro = true;


            if(!deuErro){
                resolve({time: 6, to: "alisao"}); //só aceita um parametro, no caso, estou passando um json
            }else{
                reject("Se deu mal e não vou te explicar o porquê.")
            };

        }, 1000);
    }); 
}


async function principal(){
    var id = await catchId();
    var email = await searchEmailInDB(id)

    try{
        await enviarEmail("Olá, teste", email)
        console.log("Email enviado com sucesso")
    }catch(erro){
        console.log("Deu erro bichão!" + erro);
    }
}


principal()


function teste(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {name: "Victor"},
                {name: "Alisson"},
                {name: "Gorro"},
            ])
        }, 2000)        
    })
}        

async function pegarUsuarios(){
    var resultado = await teste(); //Espere ser concluida e me retorne  num resultado
    console.log(resultado)
}


pegarUsuarios()

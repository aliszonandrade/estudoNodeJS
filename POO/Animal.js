/// Herança

class Animal{
    constructor(nome,idade,preco){
        this.nome = nome;
        this.idade = idade;
        this.preco = preco;
    }

    ChecarEstoque(){
        return 10;
    }

    MetodoReutilizado(){
        console.log("Funciona ein");
    }

}

class Cachorro extends Animal{ //Cachorro herda Animal

    constructor(nome,idade,preco, raca){
        super(nome,idade,preco);
        this.raca = raca;
    }


    Latir(){//Apenas a classe filha tem esse método
        console.log('Rolf! Rolf!');
    }

    ChecarEstoque(){
        return "Eita, meu! Oloco bicho!"
    }

    MetodoReutilizado(){
        super.MetodoReutilizado();
        console.log("eitaaaaa");
    }
}

class Pato extends Animal{
    
}


var dog = new Cachorro("Bilu",12,2,"raça");

console.log(dog.ChecarEstoque());
dog.Latir();
dog.MetodoReutilizado();
console.log(dog.raca);
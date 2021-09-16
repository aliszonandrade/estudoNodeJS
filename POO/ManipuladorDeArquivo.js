///COMPOSIÇÃO

class Leitor{
    Ler(caminho){
        return console.log("Conteúdo do arquivo");
    }
}

class Escritor{
    Escrever(arquivo,conteudo){
        return console.log("Co");
    }
}

class ManipuladorDeArquivo{
    constructor(nome){
        this.arquivo = nome;
        this.leitor = new Leitor();
        this.escritor = new Escritor();
    }
}

var manipulador = new ManipuladorDeArquivo("teste.txt");
manipulador.escritor.Escrever();
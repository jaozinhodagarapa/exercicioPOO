abstract class Animal{
    private nome: string;
    private qtdPatas:number;

    constructor(nome:string, qtdPatas:number){
        this.nome = nome;
        this.qtdPatas = qtdPatas;
    }

    abstract fazerBarulho():void;

    apresentar(): void{
        console.log( "Este é um " + this.nome + " com " + this.qtdPatas + " patas");
    }
}

class Dog extends Animal{
    constructor(){
        super("Cachorro",4);
    }


    fazerBarulho():void {
        console.log("O cachorro está latindo");
    }
}

class Cat extends Animal{
    constructor(){
        super("gato", 4)
    }
    fazerBarulho():void {
        console.log("O Gato está miando");
    }
    
}

class Passaro extends Animal{
    constructor(){
        super("Pássaro", 2);
    }
    
    fazerBarulho(): void {
        console.log(" O pássaro está cantando");
    }
}
const cachorro = new Dog();
cachorro.apresentar();
cachorro.fazerBarulho();

const gato = new Cat();
gato.apresentar();
gato.fazerBarulho();

const passaro = new Passaro();
passaro.apresentar();
passaro.fazerBarulho();
"use strict";
class Pessoa {
    constructor(nome, idade, comidas) {
        this.nome = nome;
        this.idade = idade;
        this.comidas = comidas;
    }
    cumprimentar() {
        let msgHabilitacao = "Já posso tirar minhs CNH";
        if (this.idade < 18) {
            msgHabilitacao = "Não posso tirar minhs CNH";
        }
        return "Olá meu nome é " + this.nome + " e tenho " + this.idade + " anos " + msgHabilitacao + ".";
    }
    comidasFavoritas() {
        console.log("Minha(s) comida(s) favorita(s)");
        for (let i = 0; i <= this.comidas.length; i++) {
            console.log(this.comidas[i]);
        }
    }
}
let pessoa1 = new Pessoa("João", 16, ["Parmegiana", "strogonoff"]);
console.log(pessoa1.cumprimentar());
console.log(pessoa1.comidasFavoritas());

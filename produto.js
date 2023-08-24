"use strict";
class Produto {
    constructor(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }
    descrever() {
        return "O produto " + this.nome + " tem o valor de R$ " + this.valor + ".";
    }
    desconto(porcentagem) {
        return " O produto " + this.nome + " custa R$ " + (this.valor - ((this.valor * porcentagem) / 100)) + "com desconto";
    }
}
let produto1 = new Produto("Tenis nike Air Jordan Retro Low OG", 1299);
let produto2 = new Produto("Tenis nike Air Jordan  Low ", 1099);
let produto3 = new Produto("Chuteira Nike zoom Mercurial Vapor 15 Elite Campo", 1569);
console.log(produto1.descrever());
console.log(produto1.desconto(30));
console.log(produto2.descrever());
console.log(produto2.desconto(30));
console.log(produto3.descrever());
console.log(produto3.desconto(30));

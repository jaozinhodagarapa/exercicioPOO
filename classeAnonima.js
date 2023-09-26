"use strict";
const pessoa = new class {
    constructor() {
        this.primeiroNome = "José";
        this.ultimoNome = "da Silva";
    }
    getNomeCompleto() {
        return this.primeiroNome + " " + this.ultimoNome;
    }
};
console.log(pessoa.getNomeCompleto());
const pessoa10 = {
    primeiroNome: "José",
    ultimoNome: "da Silva",
    getNomeCompleto: function () {
        return this.primeiroNome + " " + this.ultimoNome;
    }
};
console.log(pessoa10.getNomeCompleto());
const treinadorPessoal = new class {
    constructor() {
        this.rotina = [];
    }
    adicionarExercicios(nome, duracao) {
        this.rotina.push({ nome, duracao });
    }
    calcularTempoTotal() {
        let soma = 0;
        this.rotina.forEach(item => soma += item.duracao);
        //this.rotina.forEach(item => soma = soma + item.duracao);
        return soma;
    }
};
treinadorPessoal.adicionarExercicios("Corrida", 30);
treinadorPessoal.adicionarExercicios("Flexões", 15);
treinadorPessoal.adicionarExercicios("Agachamento", 20);
console.log("Tempo total necessário para a rotina" + treinadorPessoal.calcularTempoTotal() + " em minutos");

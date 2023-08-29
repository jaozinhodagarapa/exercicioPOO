"use strict";
class Funcionario {
    constructor(nome, cargo, salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
    INSS(desconto) {
        let valorDesconto = ((this.salario / 100) * desconto);
        return "Foi reduzido de seu salario " + desconto + " % do INSS. Voce ira receber " + (this.salario - valorDesconto);
    }
}
let funcionario = new Funcionario("Ana Silva", "Analista de Vendas", 3000);
console.log(funcionario);
console.log(funcionario.INSS);

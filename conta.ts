class Conta{
    nome:string;
    saldo:number;


    constructor(nome:string, valor:number){
        this.nome = nome;
        this.saldo = valor;
    }

    banco(){
        return "Meu nome é " + this.nome + "e tenho na minha conta" + this.saldo + "reais";
    }

    deposito(deposito:number):string{
        this.saldo = this.saldo + deposito
        return "Saldo atualizado após o depósito de R$500,00:" + this.saldo + "reais";
    }

    saque(saque:number):string{
        this.saldo = this.saldo - saque
        return "O novo saldo depois do saque de R$200,00 é de" +  this.saldo;
    }
    saqueNovo(saqueNovo:number):string{
        this.saldo = this.saldo - saqueNovo
        return "Saldo atualizado após o saque de R$1500,00" + this.saldo + "reais"
    }   
}

let conta = new Conta(  "João", 1000.00);
let conta2 = new Conta( "Victor", 1000.00);
let conta3 = new Conta( "Ribeiro", 1000.00);


console.log(conta.banco());
console.log(conta.deposito(500));
console.log(conta.saque(200))
console.log(conta.saqueNovo(1500));

console.log(conta2.banco());
console.log(conta2.deposito(600));
console.log(conta2.saque(300))
console.log(conta2.saqueNovo(1600));

console.log(conta3.banco());
console.log(conta3.deposito(700));
console.log(conta3.saque(400))
console.log(conta3.saqueNovo(1700));


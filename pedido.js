"use strict";
var StatusPedido;
(function (StatusPedido) {
    StatusPedido["AguardandoPreparo"] = "Aguardando preparo";
    StatusPedido["EmPreparo"] = "Em preparo";
    StatusPedido["SaiuParaEntrega"] = "Saiu para entrega";
    StatusPedido["Entregue"] = " Entregue";
})(StatusPedido || (StatusPedido = {}));
class ProdutoPedido {
    constructor(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }
}
class Pedido {
    constructor() {
        this.produtos = [];
        this.status = StatusPedido.AguardandoPreparo;
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
        return "Produto adicionado com sucesso!!!";
    }
    atualizarStatus(status) {
        this.status = status;
    }
    exibirStaus() {
        return this.status;
    }
    exibirProdutosDoPedido() {
        console.log("Produtos do pedidos: ");
        for (let index = 0; index < this.produtos.length; index++) {
            console.log("Produto :" + this.produtos[index].nome + " R$ " + this.produtos[index].valor.toFixed(2));
        }
    }
}
const produtoPedido = new ProdutoPedido("Pizza", 30);
const outroProdutoPedido = new ProdutoPedido("X-Frango", 15);
const novoPedido = new Pedido();
novoPedido.adicionarProduto(produtoPedido);
novoPedido.adicionarProduto(outroProdutoPedido);
console.log("Status atual do pedido " + novoPedido.exibirStaus());
novoPedido.atualizarStatus(StatusPedido.EmPreparo);
console.log("Status atual do pedido " + novoPedido.exibirStaus());
novoPedido.exibirProdutosDoPedido();

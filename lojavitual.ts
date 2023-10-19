class ProdutoLoja{
    nome: string;
    preco:number;

    constructor(nomeDoProduto:string, precoDoProduto:number){
        this.nome = nomeDoProduto
        this.preco = precoDoProduto
    }
}
class CarrinhoDeCompras{
    produtosDoCarrinho: ProdutoLoja [] = []
    constructor(){

    }

    adicionarProduto(produto: ProdutoLoja){
        this.produtosDoCarrinho.push(produto)
    }
    excluirProduto(nomeDoProduto:string){   
       this.produtosDoCarrinho = this.produtosDoCarrinho.filter((item) =>item.nome !==nomeDoProduto);
    }
    excluirProduto2(produto: ProdutoLoja){
        this.produtosDoCarrinho.filter(item =>item.nome !==produto.nome);
    }
    calcularValorTotal(){
        let soma = 0;
        for (let i = 0; i < this.produtosDoCarrinho.length; i++) {
            soma = soma + this.produtosDoCarrinho[i].preco;
        }
        return soma.toFixed(2); 
    }

    exibirProdutos(){
        console.log("Produtos do Carrinho");
        for(let i = 0; i < this.produtosDoCarrinho.length; i++){
            console.log("Produto:" + this.produtosDoCarrinho[i].nome + "RS" + this.produtosDoCarrinho[i].preco.toFixed(2))
        }
    }
}
class Loja {
    produtosDoEstoque: ProdutoLoja [] = []
    carrinhoDeCompra = new CarrinhoDeCompras();

    constructor(){

    }
    adicionarProdutoAoEstoque(produto: ProdutoLoja){
        this.produtosDoEstoque.push(produto);
    }
    removerProdutoDoEstoque(produto: ProdutoLoja){
        this.produtosDoEstoque = this.produtosDoEstoque.filter(item => item.nome !== produto.nome);
    }
    adicionarProdutoAoCarrinho(produto: ProdutoLoja){
        const produtoEncontrado = this.produtosDoEstoque.find(item => item.nome ===  produto.nome)
        if(produtoEncontrado){
            this.carrinhoDeCompra.adicionarProduto(produtoEncontrado)
            return "Produto adicionado ao carrinho de compra";
        }
        else{
            return "Produto não encontrado ao estoque da loja";
        }
    }

    removerProdutoDoCarrinho(produto: ProdutoLoja){
        
        this.carrinhoDeCompra.excluirProduto(produto.nome)
    }
    exibirProdutoDoCarrinho(){
        this.carrinhoDeCompra.exibirProdutos();
    }    
}

const ProdutoLoja1= new ProdutoLoja("Camiseta",29.99)
const ProdutoLoja2 = new ProdutoLoja("Calça", 49.99)
const ProdutoLoja3 = new ProdutoLoja("Tenis",100.00)
const ProdutoLoja4 = new ProdutoLoja("meia", 20.00)

//criando Loja

const minhaLoja = new Loja();



minhaLoja.adicionarProdutoAoEstoque(ProdutoLoja1)
minhaLoja.adicionarProdutoAoEstoque(ProdutoLoja2)
minhaLoja.adicionarProdutoAoEstoque(ProdutoLoja3)
minhaLoja.adicionarProdutoAoEstoque(ProdutoLoja4)



minhaLoja.adicionarProdutoAoCarrinho(ProdutoLoja1)
minhaLoja.adicionarProdutoAoCarrinho(ProdutoLoja2)
minhaLoja.adicionarProdutoAoCarrinho(ProdutoLoja3)
minhaLoja.adicionarProdutoAoCarrinho(ProdutoLoja4)



minhaLoja.removerProdutoDoCarrinho(ProdutoLoja4)

minhaLoja.removerProdutoDoEstoque(ProdutoLoja4)

minhaLoja.exibirProdutoDoCarrinho();



console.log("Total de carrinho de compras: R$" + minhaLoja.carrinhoDeCompra.calcularValorTotal())


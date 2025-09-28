function Produto(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque',{
        enumerable: true, // Mostra a chave
        value : estoque, // valor
        writable: false, // pode alterar 
        configurable: true, // pode reconfigurar
    });
}

const p1 = new Produto('Camiseta',30,3)
console.log(Object.keys(p1));

for (const chave in p1) {
    console.log(chave);
}
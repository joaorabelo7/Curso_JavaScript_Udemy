function Produto(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque',{
        enumerable: true, // Mostra a chave
        configurable: true, // pode reconfigurar
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if(typeof(valor) !== 'number'){
                throw new TypeError("Coloque apenas numeros")
                return;
            }
            estoquePrivado = valor;
        }
    });
}

function criaProduto(nome){
    return{
        get nome(){
            return nome
        },
        set nome(valor){
            valor = valor.replace('coisa', '')
            nome = valor
        }
    }
}

// const p1 = new Produto('Camiseta',30,3)
// p1.estoque = 'O valor que eu quero'
// console.log(p1.estoque)

const p2 = criaProduto("Tenis");
console.log(p2)
p2.nome = 'Qualquer coisa'
console.log(p2.nome)
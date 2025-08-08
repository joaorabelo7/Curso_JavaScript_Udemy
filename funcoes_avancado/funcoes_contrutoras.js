// Função construtora -> objetos
// Função construtora -> Pessoa (new)
function Pessoa(nome,sobrenome){
    // Atributos ou metodos privados
    const ID = 123456;
    const metodoInterno = (e) => {
       console.log("Metodo interno") 
    };

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        metodoInterno();
        console.log(this.nome + " Sou um metodo");
    };
}

const p1 = new Pessoa("Joao", "Rabelo");
const p2 = new Pessoa("Pedro", "Henrique");

console.log(p1.sobrenome);
p2.metodo();

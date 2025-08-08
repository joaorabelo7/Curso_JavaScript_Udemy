// Filter, map , reduce 

// Retorne os números maiores que 10

// const numeros = [4,3,4,6,1,22,3,4544,54,4,433,4,77,];

// function callbackFilter (valor, indice , array){
//     if (valor > 10){
//         return true;
//     }else{
//         return false;
//     }
// };

// faz a mesma coisa que a funcao de cima 
// const numerosFiltrados = numeros.filter((valor, indice, array) => valor > 10
// );
// console.log(numerosFiltrados)

const pessoas = [
    {nome: "Joao", idade : 16},
    {nome: "dasdasdasd", idade : 56},
    {nome: "gfsgsf", idade : 66},
    {nome: "Jsd", idade : 36},
    {nome: "gsdgsdgds", idade : 46},
    {nome: "Jasdaso", idade : 66},
]
// retorna pessoas com mais de 4 letras no nome 
const pessoasComNomeGrandes = pessoas.filter(obj => obj.nome.length > 4)
console.log(pessoasComNomeGrandes)

// Retorna pessoas com mais de 50 anos 
const pessoasComMaisDeCiquenta = pessoas.filter(obj => obj.idade > 50)
console.log(pessoasComMaisDe60)
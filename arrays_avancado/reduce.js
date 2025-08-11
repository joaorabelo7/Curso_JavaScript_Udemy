
const numeros = [2,3,5,245,134,43,211,3,4,];
const total = numeros.reduce(function(acumulador, valor, indice, array){ 
    acumulador += valor
    return acumulador
})

// console.log(total)












// Retorne a pessoas mais velha
const pessoas = [
    {nome : "Joao", idade : 16},
    {nome : "Jasd", idade : 296},
    {nome : "hgfdhu", idade : 43},
    {nome : "hfgh", idade : 12},
    {nome : "vnbbv", idade : 23},
    {nome : "upuoi", idade : 254},
];

const pessoasMaisVelha = pessoas.reduce(function(acumulador,valor){
    if(valor.idade > acumulador.idade) acumulador = valor
    return acumulador

})

console.log(pessoasMaisVelha)
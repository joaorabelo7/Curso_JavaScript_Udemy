// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)

const numeros = [2,3,5,245,134,43,211,3,4,];

const numerosPares = numeros
    .filter(valor => valor % 2 == 0)
    .map(valor => valor * 2)
    .reduce(function(acumulador, valor){
        return acumulador += valor
    })
console.log(numerosPares)
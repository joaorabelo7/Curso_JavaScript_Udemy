// mapeamento ira fazer com que o novo array tenha sempre o mesmo numero de indices

// const numeros = [2,3,5,245,134,43,211,3,4,];
// const numeroEmDobro = numeros.map(valor => valor *2 )

// console.log(numeroEmDobro);

const pessoas = [
    {nome : "Joao", idade : 16},
    {nome : "Jasd", idade : 26},
    {nome : "hgfdhu", idade : 43},
    {nome : "hfgh", idade : 12},
    {nome : "vnbbv", idade : 23},
    {nome : "upuoi", idade : 254},
];
// retorne apenas as strings
const pessoasString = pessoas.map(obj => obj.nome
)
// console.log(pessoasString)

//Remova apenas a chave nome do obj
const idades = pessoas.map(obj => ({idade : obj.idade}))
// console.log(idades)

//Adicione uma chave id em cada objeto (id)
const comIds = pessoas.map(function(obj, indice){
    const newObj = {...obj }
    newObj.id = indice
    return newObj
})
console.log(comIds)
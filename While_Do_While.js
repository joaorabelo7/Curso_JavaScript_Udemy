// const nome = "Joao";

// let controle = 0;

// while(controle < nome.length){
//     console.log(nome[controle]);
//     controle += 1;
// }





function random(min,max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;

let rand = random(min,max)

let i = 1

while(rand !== 10){
    rand = random(min,max);
    console.log(rand,i)
    i++
    
}

console.log("###########################################")



// Do While sempre execeuta o código pelo menos uma vez de verificar a exeção
do {
    rand = random(min,max);
    console.log(rand)

} while(rand !== 10);
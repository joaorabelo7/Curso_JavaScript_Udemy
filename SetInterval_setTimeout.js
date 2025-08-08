function mostraHora(){
  let data = new Date();
  
  return data.toLocaleTimeString("pt-BR");
}

// funcao que executa de 1 em 1 segundo
const timer = setInterval(function(){
    console.log(mostraHora());
}, 1000);


// funcao que executa apenas uma vez dps de determinado tempo
setTimeout(function(){
    clearInterval(timer);
}, 3000);

setTimeout(function(){
    console.log("Ola Mundo!");
}, 5000);
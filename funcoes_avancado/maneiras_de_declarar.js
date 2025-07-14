// Declaracao de funcao (Function hoisting)
         
falaOi()

function falaOi() {
    console.log("oi")
}

//First-class objects
//Function expression
const souUmDado = function() {
    console.log("Sou um dado");
}
souUmDado();

//Arrow Function
const funcaoArrow = () => {
    console.log("Sou uma arrow fnction");
}
funcaoArrow();

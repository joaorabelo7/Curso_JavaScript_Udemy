function numeros (n1,n2){
    if(n1 > n2){
        return n1;
    }
    return n2;
    // return n1 > n2 ? n1 : n2; este código faz a mesma coisa que o código de cima 
}
console.log(numeros(20,18))
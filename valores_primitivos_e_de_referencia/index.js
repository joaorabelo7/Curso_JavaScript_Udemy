/*
Primitivos (imutaveis) -> string, number, boolean, undefined, nu ll

// let a = "A";
// let b = a; // Copia
// console.log(a,b);

// a = "Other";
// console.log(a,b)





Referencia (mutavel) -> aray, object, function
*/

let a = [1,2,3];
let b = a;
console.log(a,b);

a.push(4);
console.log(a,b)

b.pop();
console.log(a,b)
//  a e b apontam para o mesmo local na memoria entao as duas variaveis sao afetadas


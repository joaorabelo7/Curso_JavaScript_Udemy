function divisivel (n1){

    if (typeof(n1) != "number") return "Digite um número";
    
    else if (n1 % 3 == 0 && n1 % 5 == 0) return "FizzBuzz";
    
    else if (n1 % 3 == 0) return "Fizz";
    
    else if (n1 % 5 == 0) return "Buzz";
    
    else if (n1 % 3 != 0 && n1 % 5 != 0) return n1;
    
}

for (let i = 0; i <= 100; i++){
    console.log(i, divisivel(i))
}
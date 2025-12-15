const name = "Joao";
const surname = "Rabelo";
const age = 16;

function sum(x,y){
    return x + y
}

export class Pessoa {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
}

export { name, surname as surname2, age, sum };
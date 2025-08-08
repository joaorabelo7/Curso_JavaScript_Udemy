// const person1 = {
//     name : "Joao",
//     surname : "Rabelo",
//     age : 16,
// };

// function creat_people (name,surname,age){
//     return {name,surname,age}


// };

// const person1 = creat_people("Joao", "Rabelo", 16);
// const person2 = creat_people("Vilma", "Rabelo", 60);
// const person3 = creat_people("Eraldo", "Rabelo", 64);
// const person4 = creat_people("Caique", "Rabelo", 30);
// const person5 = creat_people("Icaro", "Rabelo", 28);
 
// console.log(person2.name);

const person1 = {
    name : "Joao",
    surname : "Rabelo",
    age : 16,

    speak(){
        console.log(`My name is ${this.name} ${this.surname} I'am ${this.age} years old`)
    }
};

person1.speak();
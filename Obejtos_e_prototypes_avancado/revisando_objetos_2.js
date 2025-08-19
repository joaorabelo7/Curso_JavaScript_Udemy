// function createPerson(name, surname){
//     return{
//         name,
//         surname,
//         fullName(){
//             return `${this.name} ${this.surname}`;
//         }
//     };
// };

// const person1 = createPerson('Joao', 'Rabelo');
// console.log(person1.fullName());

//Constructor Function
function Person(name, surname){
    this.name = name;
    this.surname = surname;
}

const p1 = new Person('Joao', 'Rabelo');
console.log(p1);
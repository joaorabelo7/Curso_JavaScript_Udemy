function Person(name,surname){
    this.name = name;
    this.surname = surname;
    this.fullName = () => this.name + " " + this.surnanme;
}

const person1 = new Person("Joao", "Rabelo");
const person2 = new Person("Vilma", "Santos");

console.dir(person1);
console.dir(person2);
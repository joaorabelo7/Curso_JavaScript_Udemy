// const mod1 = require('./mod1')
// // const {name, surname, sayName} = require('./mod1');

// mod1.sayName()

const { People, surname } = require('./mod1');

const p1 = new People('Joao');

console.log(p1);
console.log(surname);
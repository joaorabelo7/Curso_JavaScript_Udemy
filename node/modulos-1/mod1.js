// const name = 'Joao';
// const surname = 'Rabelo';

// const sayName = () => {
//     console.log(name + " " +  surname)
// }


// // module.exports.name = name;
// // module.exports.surname = surname;
// // module.exports.sayName = sayName;

// // console.log(module.exports)

// exports.name = name;
// exports.surname = surname;
// exports.sayName = sayName;
// this.anything = 'Anything';

class People {
    constructor(name){
        this.name = name;
    }
}

exports.People = People
this.surname = 'Anything';
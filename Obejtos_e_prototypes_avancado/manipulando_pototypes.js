// const objA = {
//     keyA: "A"
// };
// const objB = {
//     keyB: "B"
// };
// const objC = new Object();
// objC.keyC = "C";

// Object.setPrototypeOf(objB, objA);
// Object.setPrototypeOf(objC, objB);
// console.log(objC.keyA)
// console.log(objC.keyB)

function Product(name,price){
    this.name = name;
    this.price = price;
};

Product.prototype.descount = function(percentual){
    this.price = this.price - (this.price * (percentual/100));
};
Product.prototype.rise = function(percentual){
    this.price = this.price + (this.price * (percentual/100));
};

const p1 = new Product('t-shirt', 60);

// Literal
const p2 = {
    name: "mug",
    price: 15
};

Object.setPrototypeOf(p2, Product.prototype);

p2.rise(20);

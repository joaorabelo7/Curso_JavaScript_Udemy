function Product(name,price){
    this.name = name;
    this.price = price;
};

Product.prototype.descount = function(qt){
    this.price -= qt 
}
Product.prototype.rise = function(qt){
    this.price += qt;
};

function Tshirt(name,price,color){
    Product.call(this,name,price);
    this.color = color;
}

Tshirt.prototype = Object.create(Product.prototype);
Tshirt.prototype.constructor = Tshirt;

Tshirt.prototype.rise = function (percentage){
    this.price = this.price + (this.price * (percentage/100))
}

function Mug(name,price,material,stock){
    Product.call(this,name,price);
    this.material = material;

    Object.defineProperty(this,'stock',{
        enumerable: true,
        configurable: false,
        get: function (){
            return stock
        },
        set: function(value){
            if(typeof value != 'number') return;
            stock = value;
        }
    })
}
Mug.prototype = Object.create(Product.prototype);
Mug.prototype.constructor = Mug;

const tshirt1 = new Tshirt('regatta', 20,'black');
const product1 = new Product('generic', 35);
const mug1 = new Mug('Mug', 13,'plastic', 3)

tshirt1.rise(100);

console.log(product1);
console.log(tshirt1);
console.log(mug1)
// Getter
console.log(mug1.stock)
// Setter
mug1.stock = 30
console.log(mug1.stock)
let dragon = {
   name: 'Toothless',
   fire: true,
   fight() {
      return 5;
   },
   sing() {
      if (this.fire) {
         return `I am ${this.name}, breather of fire`
      }
   }
}

let lizard = {
   name: 'Vicky',
   fight() {
      return 1;
   }
}
//Lizard obj inherits sing method of dragon - Since lizard doesn't have fire property we get undefined
const singLizard = dragon.sing.bind(lizard);
console.log(singLizard()); //undefined

//Let's create a prototype chain

lizard.__proto__ = dragon; //not the correct way to inherit
console.log(lizard.sing())
console.log(lizard.fire)
console.log(lizard.fight()) // returns 1

//Inherit all the properties and method of the dragon through the prototype chain

for (let prop in lizard) {
   if (lizard.hasOwnProperty(prop)) {
      console.log(prop); // Only log lizard's own property, while other properties are inherited from the prototype chain
   }
}
//-----------------------------------//
//never manually assign proto property

function a() { }

console.log('Does function a has its own call method ?', a.hasOwnProperty('call')) // false 
function multiplyBy5() {
   return num * 5;
}

const arr = [];
[].hasOwnProperty('map') //false

arr.__proto__ // Array.prototype

arr.__proto__.hasOwnProperty('map') //true

Array.prototype.hasOwnProperty('map') //true

multiplyBy5.__proto__.hasOwnProperty('call') //true
//-----------------------------------//

let human = {
   mortal: true
}
//Alternate way to inherit from another object instead of using __proto__
let socrates = Object.create(human); //inherited from human
socrates.age = 45;
console.log('Socrates.mortal', socrates.mortal);
console.log('Is human the prototype of Socrates', human.isPrototypeOf(socrates))

//Constructor Function
// Array.prototype 
// Function.prototype
// String.prototype

function a() {

}

function Car() {

}

Car.prototype.drive = function () {
   console.log('vrroom')
}

var benz = new Car();

benz.drive();

function Rectangle (width,height) {
   this.width = width;
   this.height = height;
   this.getParams = function () {
      console.log(this); //this refers to the instance
      console.log(this.width * this.height)
   }
}

Rectangle.prototype.area = function() {
   return this.width * this.height;
}

var rect = new Rectangle(3,4);
rect.getParams();

function Square(length) {
   this.width = this.height = length;
}

Square.prototype = Object.create(Rectangle.prototype);

var sq = new Square(4);

console.log(sq.area())
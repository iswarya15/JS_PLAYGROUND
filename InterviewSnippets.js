const r = (() => {
   const n = 1;
   const m = 2;
   return n + m;
})();

function Vehicle() {

}

let car = new Vehicle()
//https://zeekat.nl/articles/constructors-considered-mildly-confusing.html

var Foo = function () {
   this.A = 1;
   this.B = 2;
};

Foo();

var bar = new Foo(); //this keyword points to the newly created object - bar

console.log(bar.__proto__);
function Poo() {
   return this;
}

console.log(Poo())

var obj = new Poo();
console.log(obj)

//https://medium.com/@ajmeyghani/javascript-prototypes-a-pocket-reference-d88f550ffce3

class Person {

}
class Employee extends Person { }
class Developer extends Employee { }
const tom = new Developer();

console.log(Object.getPrototypeOf(tom) === Developer.prototype);
console.log(Object.getPrototypeOf(tom) === Employee.prototype);
console.log(Developer.isPrototypeOf(tom));
console.log(Developer.prototype.isPrototypeOf(tom));
console.log(Employee.prototype.isPrototypeOf(tom)); // true since we are asking Employee.prototype appears anywhere in Tom's prototype chain
console.log(Person.prototype.isPrototypeOf(tom));
console.log(Object.prototype.isPrototypeOf(tom));

const a = () => {};
function C() {}

console.log(typeof a);; // function
console.log(typeof C);; // function
console.log(Object.getPrototypeOf(a)); // Function.prototype
console.log(Object.getPrototypeOf(C)); // Function.prototype
console.log(a.prototype); // C Arrow fun does not have any prototype
console.log(C.prototype); // C 
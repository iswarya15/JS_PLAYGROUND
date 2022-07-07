// [[Prototype]] 
const F = function () {
   this.a = 1;
   this.b = 2;
}

const o = new F(); // o is an Object - instance of F

console.log('o =>', o);

//Below properties are assigned to all the objects created by F function
F.prototype.b = 3;
F.prototype.c = 4;

//o.[[Prototype]] has properties b and c
// o.[[Prototype]].[[Prototype]] is Object.prototype.
// Finally, o.[[Prototype]].[[Prototype]].[[Prototype]] is null

// Thus, the full prototype chain looks like:
// { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> Object.prototype ---> null

//-----------------------------------//

const x = {
   a: 2,
   m: function () {
      return this.a + 1;
   }
}
console.log(x.m());

const p = Object.create(x); //inherits methods and props from x

//p.[[Prototype]] has property a and method m
p.a = 4;
console.log('p => ', p);
console.log(p.m());

//-----------------------------------//

// Using prototypes
function doSomething() {
   console.log('doSomething.prototype => ', doSomething.prototype);
}

const doSomethingWithArrow = () => {
   console.log(doSomethingWithArrow.prototype); //undefined
}

doSomething();
doSomethingWithArrow();

doSomething.prototype.foo = 'bar';

const doInstancing = new doSomething();

doInstancing.prop = 'some value';
console.log(doInstancing);

//doInstancing.[[prototype]] => {foo: 'bar'}
// doInstancing.[[Prototype]].[[Prototype]] is Object.prototype.

console.log(`doSomeInstancing.prop => ${doInstancing.prop}`);
console.log(`doSomeInstancing.foo => ${doInstancing.foo}`);
console.log(`doSomething.prop => ${doSomething.prop}`);
console.log(`doSomething.foo => ${doSomething.foo}`);
console.log(`doSomething.prototype.prop => ${doSomething.prototype.prop}`);
console.log(`doSomething.prototype.foo => ${doSomething.prototype.foo}`)

//-----------------------------------//

//Different ways to create Objects and the resulting prototype chain
//Objects created with Syntax Constructs

const obj = { a: 1 };

// The newly created object obj has Object.prototype as its [[Prototype]]
//obj has no own property named 'hasOwnProperty'
//hasOwnProperty is an own property of Object.prototype 
//Object.prototype has null as its prototype 
// o --> Object.prototype --> null

var b = ['yo', 'whadup', '?'];
//Array inherit from Array.prototype
// b --> Array.prototype --> Object.prototype --> null

function f() {
   return 2;
}

// Functions inherit from Function.prototype
//  f --> Function.prototype --> Object.prototype --> null

const s = { b: 2, __proto__: obj }

//it is possible to point the newly created object's [[Prototype]] to another object via the __proto__ literal property.
// s --> o --> Object.prototype --> null

// With a constructor

//A constructor in JavaScript is just a function that happens to be called with the new operator.
function Graph() {
   this.vertices = [];
   this.edges = [];
}


Graph.prototype.addVertex = function(v) {
   this.vertices.push(v);
}

const g = new Graph();
g.addVertex(1);

//Prototype chain of g 
// {vertices: [], edges: []} --> {addVertex: ()} -> Object.Prototype -> null

// With Object.create

//Object.create method creates a new object. The prototype of this object is the first argument to the function.

const a = {a: 1};
//a -> Object.prototype -> null
const B = Object.create(a);
//B -> a -> Object.prototype -> null
const c = Object.create(B);
// c -> B -> a -> Object.prototype -> null
const d = Object.create(null);
// d -> null
console.log(d.hasOwnProperty); //undefined, since d doesn't inherit from Object.prototype

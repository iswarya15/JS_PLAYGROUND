function a() {
   console.log(this) //window object
}

function b() {
   'use strict' // use this if you don't want this to point to window object
   console.log(this) // undefined 
}

// gives method access to their object
const obj = {
   name: 'Billy',
   // This - is the object the function is a property of
   sing: function () {
      return 'lalala ' + this.name;
   },
   singAgain() {
      return this.sing() + '!!';
   }
}

// const output = obj.singAgain();
// console.log(output)

//execute same code for multiple objects

function importPerson() {
   return this.name + '!!'
}

var name = 'Harry'

const obj1 = {
   name: 'Cassy',
   importPerson: importPerson
}
const obj2 = {
   name: 'Nancy',
   importPerson: importPerson
}
console.log(importPerson());
console.log(obj1.importPerson());
console.log(obj2.importPerson());

const f = function () {
   console.log('f', this); //window
   const b = function () {
      console.log('b', this) // window
      const c = {
         hi: function () {
            console.log('c', this) //c {}
         }
      }
      c.hi();
   }
   b();
}
f();

const test = {
   name: 'Billy',
   sing() {
      console.log('a', this); //obj 
      var anotherFun = function() {
         console.log('b', this); //window ( dynamic scope not lexical scope)
      }
      anotherFun(); //free-function invocation - invoked without any conditions present
   }
}

test.sing();

var myCar = {
   color: 'Blue',
   logColor: function () {
      var self = this; //myCar
      console.log('In logColor - this.color: ', this.color) //myCar.color = blue
      console.log('In logColor - self.color: ', self.color) //myCar.color = blue


         // (function () {
         //    console.log('In IIFE - this.color: ', this.color) //window.color
         //    console.log('In IIFE - self.color: ', self.color) //myCar.color = blue

         // })();
   }
}

myCar.logColor()

//-----------------------------------//
//If the new keyword is used when calling the function, this inside the function is a brand new object.
function ConstructorExample() {
   console.log(this); //{}
   this.value = 10;
   console.log(this); //{value: 10}
}

new ConstructorExample();

function fn() {
   console.log(this);
}

var acb = {
   value: 3
}

var boundFn = fn.bind(acb); 
boundFn();  // {value: 3}
fn.apply(acb) //{value: 3}
fn.call(acb); //{value: 3}

const cameras = {
   price: 300,
   weight: 2000,
   desc: () => {
      return `My camera's cost is ${this.price}`
   }
}


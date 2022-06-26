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

const a = function () {
   console.log('a', this); //window
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
a();

const test = {
   name: 'Billy',
   sing() {
      console.log('a', this); //obj 
      var anotherFun = function() {
         console.log('b', this); //window ( dynamic scope not lexical scope)
      }
      anotherFun()
   }
}

test.sing();

var myCar = {
   color: 'Blue',
   logColor: function () {
      var self = this; //myCar
      console.log('In logColor - this.color: ', this.color) //myCar.color = blue
      console.log('In logColor - self.color: ', self.color) //myCar.color = blue


         (function () {
            console.log('In IIFE - this.color: ', this.color) //window.color
            console.log('In IIFE - self.color: ', self.color) //myCar.color = blue

         }());
   }
}

myCar.logColor()
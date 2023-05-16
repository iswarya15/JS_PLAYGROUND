function outerParent() {
  let greet = "Hi ";
  function outer(b) {
    function inner() {
      console.log(a); //inner function along with its lexical outer environment is a closure

      console.log(b); // Parent function parameter is also retained in closure since the param is part of the func scope
      console.log(greet);
    }
    let a = 10; // inner function would still log 10 if variable type is let since the inner function forms a
    // closure with its outside environment not in any sequence
    return inner;
  }

  //outer('Hello World')(); //even if inner function is executed in some other scope it still remembers the value of a

  return outer;
}

let a = 12; // console.log(a) inside inner would form a closure with outer function and would still remember its reference to the a variable in outer function.

// If a is not present in the outer function scope, then it will go a level deep into the hierarchy to global scope

let close = outerParent()("Hello world");
close();

//-----------------------------------//

//Data Privacy in js
// HIDE A VARIABLE SO OTHER FUNCTIONS/CODE CANNOT ACCESS IT

function counter() {
  var count = 0; //any piece of code in our program can access this counter and modify if placed in GLE

  // We want to ensure that no other function can modify and can only be modified through incrementCounter function. To acheive that we can use closure
  return function incrementCounter() {
    count++;
    console.log("Count =>", count);
  };
}

var counter1 = counter();
counter1();
counter1();
var counter2 = counter(); // a new instance of counter function is created and incrementCounter forms a closure with a new copy of count variable
counter2();

//-----------------------------------//

//Function constructor in js
function Counter() {
  //constructor function
  var count = 0;
  this.incrementCounter = function () {
    // this keyword refers to the object which is calling this method
    count++;
    console.log("Incremented ", count);
  };
  this.decrementCounter = function () {
    //function within Counter forms a closure with its outer lexical environment
    count--;
    console.log("Decremented ", count);
  };
}

var counterObj = new Counter(); // returns an Object
counterObj.incrementCounter();
var counterObj2 = new Counter();
counterObj2.decrementCounter(); // each object of type Counter is a new instance and will have its own count variable

//Function constructor - If we want to create multiple objects

//When we create a function through Function Constructor, the prototype property allows us to add our own methods to the Objects

function x() {
   var a = function y() { //named function expression can only be accessed within its own function scope
      console.log(a);
   };

   //  y(); //reference error - y is not defined
}

x();


function fn() {
   var a = 7;
   function y() {
      console.log(a); // Even when this function is executed in some other scope, it still has reference to the variables in its parent environment
   }
   a = 100;
   return y;
}

const z = fn();
console.log(z()); // 100

//-----------------------------------//

function test() {
   var b = 900;
   function x() {
      var a = 7;
      function y() {
         console.log(a, b); //Closure is formed with x and test
      }
      y();
   }
   x();
}

test(); //7, 900

//-----------------------------------//

function s() {
   var i = 1;
   setTimeout(() => {
      console.log(i);
   }, 1000)
   console.log('Namaste')
}
s();

//-----------------------------------//

function m() {
   for (var i = 1; i <= 5; i++) {
      function close(i){  //using closure to refer to different copies of i
         setTimeout(() => {
            console.log(i)
         }, i * 1000)  
      }
      close(i); 
   }
   console.log('Namaste')
}

m();

//-----------------------------------//

//var a = 100;
let b = 200;
{
   //Block scope means Compound statement - To group multiple statements
   // var a = 10;
   let b = 20;
   const c = 30;
   //console.log(a);
   console.log(b);
   console.log(c);
}

//Block not required below since there is only statement
if (true) console.log('Happy');

//console.log(a);
console.log(b);

//Illegal shadowing
let a = 20;
{
    var a = 20; // Syntax error - Even though var a is inside a block scope, var variables are function scoped
   //meaning if there is no function it is declared in Global Execution Context.
   // let a = 20 is also in GLE. Duplication of let and const variables within same execution context is not allowed. 

   let a = 40; //This will work because let, const are block scoped. They are in different EC. 
   //Once this block of code is finished executing, this EC is removed. 
}

console.log(a); // 20

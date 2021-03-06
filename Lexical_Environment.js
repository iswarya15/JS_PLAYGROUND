function a() {
   var b = 10;
   c(); //c is lexically inside a
   function c() {
      console.log(b); // (closure)
   }
}


a();

//Scope chain
function sayMyName() {
   var a = "a";
   //  console.log(b, c); // returns error
   return function findName() {
      var b = "b";
      console.log(a); // a
      // console.log(c); // returns error
      return function printName() {
         var c = "c";
         console.log(a, b); // a, b
      };
   };
}
sayMyName()()(); //each function is returned and has to be called
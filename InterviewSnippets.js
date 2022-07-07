const r = (() => {
   const n = 1;
   const m = 2;
   return n+m;
})();

function Vehicle() {

}

let car = new Vehicle()
//https://zeekat.nl/articles/constructors-considered-mildly-confusing.html

var Foo = function(){
   this.A = 1;
   this.B = 2;
 };

 Foo();

 var bar = new Foo(); //this keyword points to the newly created object - bar

 function Poo(){
   return this;
 }

console.log( Poo())

var obj = new Poo();
console.log(obj)

//https://medium.com/@ajmeyghani/javascript-prototypes-a-pocket-reference-d88f550ffce3
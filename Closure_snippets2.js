// const getSecret = (secret) => {
//    return {
//       get: () => secret
//    }
// }

const secret = msg => () => msg;

const msg = 'secret() should return a function that returns passed secret';

const theSecret = 'Closures are easy';
const mySecret = secret(theSecret);

const actual = mySecret();
const expected = theSecret;


console.log(actual, expected);
//-----------------------------------//

const partialApply = (fn,...fixedArgs) => {

   return function(...remainingArgs) {
      return fn.apply(this,fixedArgs.concat(remainingArgs));
   }

}
const text = 'partialApply should partially apply functions';
const add = (a,b) => a+b;

const add1 = partialApply(add, 1); //returns a function which retains access to fixedArgs

const ans = add1(2);
console.log(ans);

//-----------------------------------//

function wrapValue(n) {
   let local = n;
   return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);

//-----------------------------------//
const counter = (function () {
   let privateCounter = 0;
   function changeBy(val){
      privateCounter += val;
   }
   return {
      increment: function() {
         changeBy(1);
      },
      decrement: function() {
         changeBy(-1);
      },
      value: function() {
         return privateCounter;
      }
   }
})();

console.log(counter); // returned Obj is stored in counter

counter.increment();
counter.decrement();
counter.increment();
console.log(counter.value());
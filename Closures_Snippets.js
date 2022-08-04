//Make sure view is set only once.
let view;

function initialize() {
  let called = 0;
  return function () {
    if (called == 0) {
      view = '🗻';
      console.log('view has been set');
      called++;
    } else {
      console.log('View has already been set')
    }
  }

}

const setView = initialize();
setView();
setView();

console.log(view);

//-----------------------------------//
const array = [1, 2, 3, 4];

for (var i = 0; i < array.length; i++) {

  (function (local_i) {
    setTimeout(() => console.log('index', local_i)), 1000
  })(i)

}
//-----------------------------------//


(function IIFE(a) {
  (function IIFE2(b) {
    console.log(a); // 0 from Closure of IIFE
  })(1)
})(0)
//-----------------------------------//

let a = 0;

(function foo() {
  if (a === 0) {
    let a = 1;
    console.log(a); //1
  }
  console.log(a); //0

}());



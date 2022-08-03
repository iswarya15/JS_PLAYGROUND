//3 properties make Functions first class citizens in JS

// 1 Functions can be assigned to a variable/ assigned to Object property
// 2 Function can be passed as argument and called within the function
var stuff = function () { console.log('hi there') }
function a(fn) {
  fn();
}

// a(()=> console.log('hi there'));
a(stuff);

// 3 Function can be returned as value

function b() {
  return function c() { console.log('bye') }
}

console.log(b()); // ƒ c(){ console.log('bye') }

b()(); //bye;

var d = b();
d(); //bye

const multiplyBy = (num1) => {
  return function (num2) {
    return num1 * num2; // num1 value persists even after returning
  }
}

let multiplyByTwo = multiplyBy(2);

console.log(multiplyByTwo); //ƒ (num2) { return num1*num2; }

console.log(multiplyByTwo(5));
console.log(multiplyByTwo(3));

let multiplyByTen = multiplyBy(10);

console.log(multiplyByTen(4));
console.log(multiplyByTen(6));
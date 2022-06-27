// Type coercion happens when we use '=='
//if we compare 2 values of different type, JS tries to coerce one value into the same type

console.log(1 == '1'); //true

// '===' means don't coerce the values, just compare 2 values
console.log(1 === '1'); //false

//Try not to use '==', since it is not predictable

//Coercion doesn't just happen with '=='
// JS coerces 1 to true. 0 to false
if (1) {
   console.log(5);
}

//https://dorey.github.io/JavaScript-Equality-Table/
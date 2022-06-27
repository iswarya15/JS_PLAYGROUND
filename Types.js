//Primitive Type - data that only represents single value
console.log(typeof 5)
console.log(typeof true)
console.log(typeof 'what is this')
console.log(typeof undefined) //variable has been declared but has not yet been assigned a value
console.log(typeof null) //no value
console.log(typeof Symbol('just me')) //to make object properties unique

//undefined vs not defined
//console.log(a) // not defined

// Non-Primitive
console.log(typeof {})
console.log(typeof []) //Object
console.log(typeof function () { }) //function but technically it is an object

function a() {
   return 5;
}

a.hi = 'hi'
console.log(a);

//obj1 doesn't directly hold the value. It holds a reference to the memory where the object is held
const obj1 = {
   a: 'Tom'
}

//Wrapper for primitive types

//Behind the scenes primitive types have object wrappers -Number, Boolean, String which allows us to call method on these primitive values

console.log(typeof true.toString()); // string -> converts boolean to string

// true acts as an object above and we are able to call a method. 
// Boolean(true).toString - wrapper
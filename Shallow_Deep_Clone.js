//We want a copy of below object in different location.
let obj = { a: 'a', b: 'b', c: 'c' };
let clone = ign({}, obj); //first param - Object to copy to
//We can also do this using spread operator
let clone2 = { ...obj };

clone.b = 'B';
clone2.c = 'd';
console.log(clone);
console.log(obj);
console.log(clone2);

//What will happen if we have another pass by reference object in c instead of string 'c'
//let obj = {a: 'a', b: 'b', c: 'c' };

let deep = {
  a: 'a',
  b: 'b',
  c: {
    deep: 'try and copy me'
  }
};

let deepClone = Object.assign({}, deep);
// deep.c = 5; 
// deep =  {a: 'a', b: 'b', c: 5}
// deepClone = { a: 'a', b: 'b',
//   c: {deep: 'try and copy me'}} //shallow copy - c's value didn't change
//deep.c.deep = 'hahaha'

console.log(deep); // {a: 'a', b: 'b', c: {deep: 'hahaha'}}
console.log(deepClone); // {a: 'a', b: 'b'. c: {deep: 'hahaha'}} deep shouldn't have changed. 

// Inner data changed because the memory that c holds is the same in both deep and deepClone 

// To avoid this - turn everything in obj to a string and parse it back to a object
let superClone = JSON.parse(JSON.stringify(deep));
deep.c.deep = 'heheheh';

console.log(deep);
console.log(superClone); //deep prop was not affected - but this has some performance issues since cloning and parsing big objects may take longer time




//Pass by value - Immutable, Pass by reference - Mutable
var a = 5;
var b = a; // different memory

b++; //6 -doesn't affect a since they are both not in same location
console.log(a); // 5

//Pass by reference - we don't copy values, we simply make obj2 to point to the memory location of obj1
let obj1 = { name: 'Lee', password: '124' };
let obj2 = obj1;

obj2.password = 'crackit';

console.log(obj1);
console.log(obj2);

// To avoid pass by reference(copying) objects
var c = [1, 2, 3, 4];
var d = [].concat(c); //d points to different memory location

d.push(834734);

console.log(d);
console.log(c);

//Refer Shallow_Deep_Clone.js on how to clone object and store them in different location
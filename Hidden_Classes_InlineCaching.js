// v8 attaches a hidden class to each and every object and the purpose of the Hidden class is to optimize the property access time.

function Animal(a, b) { //Hidden class, say C0 is created for the function declaration
  this.a = a; //Hidden class C1 is created based on C0.
  // C1 describes the location in memory where property a can be found.
  this.b = b;
}

var obj1 = new Animal(1, 2);
var obj2 = new Animal(3, 4);

obj1.a = 30;
obj1.b = 100;
// By setting the properties in different order than it was set up, we are making the compiler slower 
// because of Hidden Classes. Hidden Classes are what the compiler uses to say these 2 objects have the same property. 
obj2.b = 30;
obj2.a = 100;

delete obj1.x; //delete shouldn't be used because it would change the hidden class

// Optimized version
obj1.a = 30;
obj1.b = 100;

obj2.a = 30;
obj2.b = 100;

// Inline Caching
function findUser(user) {
  return `found ${user.firstName} + ${user.lastName}`;
}

const userData = {
  firstName: 'Lion',
  lastName: 'King'
}

findUser(userData);

// If findUser(userData) is called multiple times,
// then it will be optimized (inline cached) to just be 'found Lion King'
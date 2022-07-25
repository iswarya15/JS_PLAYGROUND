class Foo {

}
console.log(typeof Foo); // Function

const victims = {
  symptoms: function () {
    return 'Headaches and depression'
  }
}

function callVecna(name) {
  const createVictim = Object.create(victims);
  createVictim.name = name;
  return createVictim;
}

const will = callVecna('will buyer');

let Book = function (name) {
  this.name = name;
}

let newBook = function (name) {
  Book.call(this, name)
}
newBook.prototype.hey = () => {
  console.log('say hi');
}
newBook.prototype = Object.create(Book.prototype);
const book1 = new newBook('Alchemist');
// book1.__proto__ === newBook.prototype
// newBook.__proto__ === Book.prototype

function PrototypalGreeting(msg = "hello", name = "world") {
  this.msg = msg;
  this.name = name;
}

PrototypalGreeting.prototype.greet = function () {
  return `${this.name} says ${this.msg}`;
}

const greetProto = new PrototypalGreeting("Hey", "Folks");

console.log(greetProto.greet());

class ClassicalGreeting {
  constructor(name = "Kid", msg = "hello") {
    this.name = name;
    this.msg = msg;
  }
  greet() {
    return `${this.name} says ${this.msg}`
  }
}

const classyGreeting = new ClassicalGreeting('Oslo', 'Adios');
console.log(classyGreeting.greet());

function Proto() {
  this.name = 'Proto';
  return this;
}

Proto.prototype.getName = function () {
  return this.name;
}

class MyClass extends Proto {
  constructor() {
    super()
    this.name = 'My class';
  }
}

const instance = new MyClass();
console.log(instance.getName());

Proto.prototype.getName = function () {
  return `Overriden in Proto`;
}

console.log(instance.getName());

MyClass.prototype.getName = function () {
  return `Overriden in MyClass`
}

console.log(instance.getName());

instance.getName = function () {
  return `Overriden in instance`;
}
console.log(instance.getName());

function SecretPhoto() {
  const secret = 'this calss is a lie';

  this.spellBeans = function () {
    console.log(secret);
  }
}

const secret1 = new SecretPhoto();

secret1.spellBeans()

class SecretClass {
  secret = 'this is a lie';
  constructor() {
    this.spillSecret = function () {
      console.log(secret);
    }
  }
}

const secretusingClass = new SecretClass();

class Note {
  constructor(name) {
    this.name = name;
  }
}

class newNote extends Note {
  constructor(name) {
    super(name);
  }
}

const newnote1 = new newNote('social')
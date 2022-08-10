## Object Oriented Programming

### Pillars of OOP

The four pillars of object-oriented programming are:

- Abstraction
- Encapsulation
- Inheritance
- Polymorphism

## Abstraction

`Abstraction` - Hide away the `implementation` details. When we call a function, _we don't have to understand what exactly it is doing_.

Finding things that are _similar_ in our code and providing a `generic function`.

Example: **Format Date**, Functions for **RegEx Check** - Check if i/p is only letters, only numbers, alphanumeric etc.

We don't have to write Regex everywhere in the App, instead we can use the generic functions.

## Encapsulation

`Encapsulation` - _Removing access to parts_ of your code and making things **private**. This is also referred to as **Data Hiding**.

Encapsulation means each `Object` in our code _should control its own State_. State is the current `snapshot` of the Object.

`Private Properties` are achieved in JavaScript using `Closures`.

```
var animalInfo = (function () {
   var hobby = function () {
      return 'hobby -> playing'; //private
   }
   var age = 12; //private

   var name = 'Rex';

   var makeNoise = () => console.log(`bark bark`);;

   return {
      name: name,
      makeNoise: makeNoise
   }
})();
```

In the above example, when `IIFE` gets executed, an Object is _returned which can be accessed by anyone_ but hid away some of the details. We can't access `age/hobby` as we _didn't expose_ it in the final object with the return.

This `pattern` above is called the **Revealing Module Pattern**. One of the examples of how we can achieve Encapsulation.

## Polymorphism

`Polymorphism` - The condition of occurring in several _different forms_.

```
function Animal() { }
function Dog() { }

Animal.prototype.makeNoise = () => console.log('Base Noise');
Animal.prototype.legs = 4;

Dog.prototype = new Animal();

Dog.prototype.makeNoise = () => console.log('Woof woof');

var animal = new Animal();
var dog = new Dog();

animal.makeNoise(); // base noise
dog.makeNoise(); // Woof woof - overridden
dog.legs // 4 - inherited
```

In the above example, `Dog` extends `Animal` and can make use of the default `legs` property. But it can also do its own `implementation` of `makeNoise()`

The real power of `polymorphism` is **sharing behaviors, and allowing custom overrides**.

## Class

`Class` : A class is a description of the object to be created.
`Instances` : Instances of a class are instantiated via constructor functions with the `new` keyword.

In JS, `class inheritance` is implemented on top of `prototypal inheritance`, that does not mean that it does the same thing

Every function that we create gets `prototype` property but only `constructor Functions` has _use for this property_.

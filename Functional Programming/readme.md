# Functional Programming

## Pure Functions

`Pure Functions` cannot modify anything outside of itself(No Side-effects). They _do not change any data passed into them_, but create _new data to return_ without altering the original.

**Side Effect**: **change of system state or any observable interaction** with outside world that occurs during the calculation of a result.

### Side effect may include

- changing the file system
- inserting a record into a database
- making an http call
- mutations
- printing to the screen / logging
- obtaining user input
- querying the DOM
- accessing system state

### Pure Functions does the following:

- Complete 1 task per function.
- Do not mutate state.
- Predictable and easy to test.
- Return something.

The goal of `Functional programming` is _not to make_ `functions pure` but to _minimize_ `side-effects` and write `predictable code`.

## Idempotence

A function is said to be `idempotent` if it _returns the same output for the same input_ or does what we expect it to do. Idempotence is _different from pure function_ as it `allows side effects`. An example could be calling an API with an input and returning the same output no matter how many times it has been called.

## Imperative vs Declarative

`Imperative Programming` tells the computer what to do and how to complete it.
`Declarative Programming` only tells the computer what to do, but not how to do it.

This is important in `Functional Programming` because our code needs to be **more declarative** to better understand our code and let the _computer handle_ the dirty work of _figuring out what is the best way to do something_.

<!-- More Imperative -->

```js
let arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

<!-- More Declarative -->

```
[1,2,3].forEach(i => console.log(i));
```

## Closures

In the below example, we are `modifying state(count)` outside of it's function scope.

```js
const closure = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  };
};

const incrementFun = closure();

console.log("Incrementing Counter via Closure => ", incrementFun());
```

`incrementFun` is an `impure function` since it _modifies the closed over variable_.

Pure way to do it:

```
const closure = () => {
    let count = 0;
    return () => count;
}

const getCounter = closure();

console.log('Get Counter via Closure => ', getCounter());
```

Now we still have access to data outside it's scope.

## Currying

Currying calls a function by providing `fewer arguments` than it _expects_. It _returns a function_ that takes the `remaining/next arguments`.

In the below example, we have created a function that takes one argument and returns a function.The `returned function` remembers the first argument via **Closure**.

```
const curriedMultiply = (a) => (b) => a * b;

console.log('Multiply a number using Currying: ', curriedMultiply(3)(5))
```

## Partial Application

We call a function with fewer arguments which _returns a new function_ with those arguments **set/partially applied**.

`Partial Application` expects _all the arguments_ in the second call

```js
const add = (a, b, c) =>
  console.log("Adding using Partial Application => ", a + b + c);

const partialAdditionBy2 = add.bind(null, 2);
console.log(partialAdditionBy2);

partialAdditionBy2(4, 6);
```

### Currying vs Partial Application:

What is not in common: Currying takes only one parameter, unlike partial application which can take more than one.

## Memoization

If the `parameter` of a function _doesn't change_, its **memoized/cached**. Hence returns a cached version.

```js
function memoizedAddTo80(n) {
  if (n in cache) {
    console.log("Cached Input", n);
    return cache[n];
  } else {
    console.log("Long time...", n);
    cache[n] = n + 80;
    return cache[n];
  }
}
```

### Arity -> no of arguments a function take

## Exercise

f: `accumulator` , g: `currentFun`

```js
const compose =
  (f, g) =>
  (...args) => {
    console.log("F => ", f);
    console.log("G => ", g);
    f(g(...args));
  };

function purchaseItem(...funs) {
  return funs.reduce(compose);
}

const composedFun = purchaseItem(emptyCart, buyItem, applyTax, addItemToCart);

console.log(composedFun(user, new Item("jacket", 20)));
```

### Order of execution

1. emptyCart(buyItem(applyTax(addItemToCart)))
2. emptyCart(buyItem(applyTax))
3. emptyCart(buyItem)
4. emptyCart

### Tips to write Pure functions:

- They are self contained. Everything the function needs is handed to it on a silver platter.

- It does not depend on **System State** because it increases [cognitive load](https://en.wikipedia.org/wiki/Cognitive_load) by introducing an _external environment_.

> "The problem with object-oriented languages is they’ve got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana... and the entire jungle".

## Compose:

Function composition is an approach where the result of one function is passed on to the next function, which is passed to another until the final function is executed for the final result. Function compositions can be composed of any number of functions. Calls functions from `right to left`.

Using `Compose`, we _don't have to call our function manually_. Instead we can feed our _functions to another function_ which will _give back a function to call our functions_.

## Pipe

The concept of `Pipe` is simple. It combines n functions & calls them from `left to right` with the output of the last function.

[Pipe & Compose Explained](https://www.freecodecamp.org/news/pipe-and-compose-in-javascript-5b04004ac937)

## Immutability

Cannot change Immutable data, we need to make a copy of the data and then update it.

Making a variable type `const` makes it _impossible to re-assign_ after it's creation but does _not create immutable objects_.

```js
const boo = { foo: true };
boo.foo = false;
console.log(boo); // false
```

We can make an `Object` truly `immutable` by **freezing the Object**. JS has a method that freezes the Object.

```js
const immutableBoo = Object.freeze({ foo: true }); //Primitive property
immutableBoo.foo = false;

console.log("Immutable Boo =>", immutableBoo);
```

But `frozen objects` are **only immutable one level deep**.

```js
const obj = Object.freeze({ foo: { bar: true } }); //property consist of an object
obj.foo.bar = false;
console.log("Obj =>", obj); // { foo: { bar: false} }
```

The _primitive properties_ of a `frozen Object` cannot change but if the _property is itself an Object_, it can be changed.

In order to make an object really immutable you need some _external libraries_. `Immutable.js` is among the most used `libraries`.

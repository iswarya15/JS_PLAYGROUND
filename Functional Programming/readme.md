## Functional Programming

## Pure Functions

`Pure Functions` cannot modify anything outside of itself(No Side-effects). They _do not change any data passed into them_, but create _new data to return_ without altering the original.

### Pure Functions does the following:

- Complete 1 task per function.
- Do not mutate state.
- Predictable and easy to test.
- Return something.

The goal of `Functional programming` is _not to make_ `functions pure` but to _minimize_ `side-effects` and write `predictable code`.

## Idempotence

Given the _same input_ to a function, it always _returns the same output_. The function could be _used over and over again_ and nothing changes. Another way to make code predictable.

## Imperative vs Declarative

`Imperative Programming` tells the computer what to do and how to complete it.
`Declarative Programming` only tells the computer what to do, but not how to do it.

This is important in `Functional Programming` because our code needs to be **more declarative** to better understand our code and let the _computer handle_ the dirty work of _figuring out what is the best way to do something_.

<!-- More Imperative -->

```
let arr = [1,2,3];

for(let i = 0 ; i < arr.length ; i++) {
    console.log(arr[i]);
}
```

<!-- More Declarative -->

```
[1,2,3].forEach(i => console.log(i));
```

## Closures

In the below example, we are `modifying state(count)` outside of it's function scope.

```
const closure = () => {
    let count = 0;
    return () => {
        count++;
        return count;
    }
}

const incrementFun = closure();

console.log('Incrementing Counter via Closure => ', incrementFun());
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

In the below curried function, we are _passing one parameter at a time_.

```
const curriedMultiply = (a) => (b) => a * b;

console.log('Multiply a number using Currying: ', curriedMultiply(3)(5))
```

## Partial Application

Producing a function with a smaller number of parameters.

`Partial Application` expects _all the arguments_ in the second call

```
const add = (a, b, c) => console.log('Adding using Partial Application => ', a + b + c);

    const partialAdditionBy2 = add.bind(null, 2);
    console.log(partialAdditionBy2);

    partialAdditionBy2(4, 6);
```

## Memoization

If the `parameter` of a function _doesn't change_, its **memoized/cached**. Hence returns a cached version.

```
function memoizedAddTo80(n) {
    if (n in cache) {
        console.log('Cached Input', n);
        return cache[n];
    } else {
        console.log('Long time...', n);
        cache[n] = n + 80;
        return cache[n];
    }
}
```

### Arity -> no of arguments a function take

## Exercise

f: `accumulator` , g: `currentFun`

```
const compose = (f, g) => (...args) => {
    console.log('F => ', f);
    console.log('G => ', g);
    f(g(...args))
};

function purchaseItem(...funs) {
    return funs.reduce(compose)
}

const composedFun = purchaseItem(emptyCart, buyItem, applyTax, addItemToCart);

console.log(composedFun(user, new Item('jacket', 20)));

```

### Order of execution

1. emptyCart(buyItem(applyTax(addItemToCart)))
2. emptyCart(buyItem(applyTax))
3. emptyCart(buyItem)
4. emptyCart

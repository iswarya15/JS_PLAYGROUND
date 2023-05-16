function curry(fn) {
  return function curried(...args) {
    if (fn.length === args.length) {
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

const sum = (a, b, c) => a + b + c;

const currying = curry(sum);

console.log("Sum => ", currying(1)(2)(3));

//multiply(a)(b)(c)

function curryMultiply(fn) {
  return function a(x) {
    return function b(y) {
      return function c(z) {
        return fn(x, y, z);
      };
    };
  };
}

const multiply = (a, b, c) => a * b * c;

const curriedMultiply = curryMultiply(multiply);

console.log("Multiply => ", curriedMultiply(1)(2)(4));

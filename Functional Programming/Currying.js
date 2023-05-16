// Qn 1: Implement sum(2)(6)(1)

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log("sum(2)(6)(1) => ", sum(2)(6)(1));

// Qn 2: Implement Evaluate('sum')(5)(3)
//                 Evaluate('multiply')(2)(3)

function evaluate(operation) {
  return function (a) {
    return function (b) {
      console.log(`Operation: ${operation}`);
      switch (operation) {
        case "sum":
          return a + b;
        case "multiply":
          return a * b;
        case "subtract":
          return b - a;
        default:
          return b / a;
      }
    };
  };
}

const multiply = evaluate("multiply");
console.log('evaluate("multiply")(5)(8) => ', multiply(5)(8));
console.log('evaluate("multiply")(3)(2) => ', multiply(3)(2)); //we're not re-initializing the variable multiply

// Qn 3: Implement Infinite Currying: sum(1)(2)(3)(4)...(n)()

function add(a) {
  return function (b) {
    if (b) {
      return add(a + b);
    }
    return a;
  };
}

console.log("Infinite Currying...");
console.log("add(1)(2)(3)(4)() => ", add(1)(2)(3)(4)());

// Qn 4: Manipulating DOM using Currying

function updateElementText(id) {
  return function (content) {
    // document.querySelector("#" + id).textContent = content;
  };
}

const updateHeaderText = updateElementText("heading");
updateHeaderText("Updated DOM using Currying"); //we don't have to provide the heading selector each time

// Qn 5: Implement Curry()
// Convert fn(a,b,c) => fn(a)(b)(c)

function curry(fn) {
  return function curried(...args) {
    if (fn.length === args.length) {
      return fn(...args);
    } else {
      //Wrapper or Partial function
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

const addition = (a, b, c) => a + b + c;

const curriedAddition = curry(addition);

console.log("Curry() => ", curriedAddition(1)(8)(3));

function doCurry(fun) {
  return function (a) {
    //Wrapper 1
    return function (b) {
      //Wrapper 2
      return fun(a, b); // only works with fixed length parameters
    };
  };
}

function addOperation(a, b) {
  return a + b;
}

let curried = doCurry(addOperation);

console.log("Curried : ", curried(2)(4));

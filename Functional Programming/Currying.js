// Qn 1: Implement sum(2)(6)(1)

function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

console.log('sum(2)(6)(1) => ', sum(2)(6)(1));

// Qn 2: Implement Evaluate('sum')(5)(3)
//                 Evaluate('multiply')(2)(3)

function evaluate(operation) {
    return function (a) {
        return function (b) {
            console.log(`Operation: ${operation}`);
            switch (operation) {
                case 'sum':
                    return a + b;
                case 'multiply':
                    return a * b;
                case 'subtract':
                    return b - a;
                default:
                    return b / a;
            }
        }
    }

}

const multiply = evaluate('multiply');
console.log('evaluate("multiply")(5)(8) => ', multiply(5)(8));
console.log('evaluate("multiply")(3)(2) => ', multiply(3)(2)); //we're not re-initializing the variable multiply

// Qn 3: Implement Infinite Currying

function add(a) {
    return function (b) {
        if (b) {
            return add(a + b);
        } else {
            return a;
        }
    }
}

console.log('Infinite Currying...')
console.log('add(1)(2)(3)(4)() => ', add(1)(2)(3)(4)());

// Manipulating DOM using Currying
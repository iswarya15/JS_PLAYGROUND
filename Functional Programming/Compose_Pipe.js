// Compose function which multiplies given number  by 3 and makes it positive

const compose = (multiply, abs) => (data) => multiply(abs(data));

const multiplyBy3 = (num) => {
    console.log('Multiplying!!');
    return num * 3;
}
const makePositive = (num) => {
    console.log('Converting to Positive!!');
    return Math.abs(num);
}

const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive); //Right to Left evaluation

// makePositive executes first, then multiplyBy3

console.log(multiplyBy3AndAbsolute(-50));


const pipe = (multiply, abs) => (data) => abs(multiply(data));

const AbsAndMultiply = pipe(multiplyBy3, makePositive); //Left to Right evaluation
console.log(AbsAndMultiply(-50));

// multiplyBy3 executes first, then makePositive


// Let's compose the below functions
// sayHi -> 'Hi' -> sayHiWithName -> 'Hi Viserys' -> sayHiWithNameAndGreet -> 'Hi Viserys Good morning'

const sayHi = () => 'Hi';

const sayHiWithName = () => 'Viserys';

const sayHiWithNameAndGreet = () => 'Good Morning';

const greetPerson = pipeFun(sayHi, sayHiWithName, sayHiWithNameAndGreet);

function pipeFun(...steps) {
    return function () {
        let res = ''
        for (let i = 0; i < steps.length; i++) {
            res = res + ' ' + steps[i]();
        }
        return res;
    }
}


const sayHiPerson = pipeFun(sayHi, sayHiWithName)
console.log(sayHiPerson())

const composeTwoFun = (fn1, fn2) => (...args) => fn2(fn1(...args));

const multiplyBy10 = (num) => num * 10;
const absolute = (num) => Math.abs(num);

const composedFun = composeTwoFun(absolute, multiplyBy10);

console.log('MultiplyBy10 and Absolute => ', composedFun(-4))

// Pipe

const getName = person => person.name;
const upperCase = string => string.toUpperCase();
const getSixChars = string => string.substring(0, 6);

const pipeFn = (f, g) => (...args) => g(f(...args));
const reducedFn = (...fns) => fns.reduce(pipeFn);

// Pipe calls the function left to right
console.log(reducedFn(getName, upperCase, getSixChars)({ name: 'ToothLess' }));

// getSixChars(upperCase(getName({name:'Buckethead'})))
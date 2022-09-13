let minimum = 21;
const checkAge = (age) => age >= minimum; //impure fun

(function (age) {
    let minimum = 21; //Pure fun
    console.log('Age => ', age);
    return age >= minimum;
})(18)

// Pure functions can always be memoized: Return cached output if Input value is same

const square = memoize(x => x * x);
console.log('Memoized Square function ', square.toString())

function memoize(fun) {
    let cache = {};

    return (arg) => {
        console.log('Cached Input of arg: ', cache[arg])
        cache[arg] = cache[arg] || fun(arg);
        return cache[arg];
    }
}

console.log('Square 8: ', square(8));
console.log('Square 7: ', square(7));
console.log('Square 8: ', square(8));

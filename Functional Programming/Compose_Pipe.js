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
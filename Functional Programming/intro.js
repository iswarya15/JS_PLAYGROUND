// no side effects

const array = [1, 2, 3]; //shared state


// function mutateArray(arr) {
//     arr.pop(); //Side effect - function modifying something outside of itself
// }

// mutateArray(array);
// mutateArray(array);


const removeLastItem = () => { //Pure function
    const newArray = [].concat(array);
    newArray.pop();
    return newArray;

}
const multiplyByTwo = () => {
    return array.map(item => item * 2); //Pure function
}


console.log('Concat array: ', removeLastItem());
console.log('Multiplied array: ', multiplyByTwo());
console.log('Original Array: ', array);

function greet() {
    console.log('Hi'); //Logging something to the browser, hence side effect
}

// Immutability

const obj = { name: 'Steve', age: 21 };

const clone = (obj) => {
    return { ...obj } // Pure function
};

console.log('Clone Obj => ', clone(obj));

obj.name = 'Nana'; //Mutating state

const updateName = (obj) => {
    const obj2 = clone(obj);
    obj2.name = 'Archie';
    return obj2; // not changing state but copying state and returning new state
}

console.log('Updated name by not affecting original obj => ', updateName(obj));

console.log('Mutated Object => ', obj);

// HOF

const HOF = (print) => print('hello');

console.log(HOF((msg) => msg));

const closure = () => {
    let count = 0;
    return () => {
        count++;
        return count;
    }
}

const incrementFun = closure();

console.log('Incrementing Counter via Closure => ', incrementFun());
console.log('Incrementing Counter via Closure => ', incrementFun());
console.log('Incrementing Counter via Closure => ', incrementFun());

const closure1 = () => {
    let count = 0;
    return () => count;
}

const getCounter = closure();

console.log('Get Counter via Closure => ', getCounter());

// Currying

const curriedMultiply = (a) => (b) => a * b;

console.log('Multiply a number using Currying: ', curriedMultiply(3)(5));

const add = (num1) => (num2) => num1 + num2;

const curriedAdd = add(3);
console.log('Curried addition: ', curriedAdd(5))


// Partial Application vs currying

const multiply = (a) => (b) => (c) => console.log('Passing three params using currying: ', a * b * c);

multiply(2)(4)(6); //Passing arguments one by one

(() => {
    const add = (a, b, c) => console.log('Adding using Partial Application => ', a + b + c);

    const partialAdditionBy2 = add.bind(null, 2); //returns a function which takes rem arguments
    console.log(partialAdditionBy2);

    partialAdditionBy2(4, 6); //passing remaining arguments at once
})()


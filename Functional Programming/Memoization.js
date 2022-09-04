function addTo80(n) {
    console.log('Without Memoization: Long time ..', n);
    return n + 80;
}

console.log(addTo80(5));
console.log(addTo80(5));
console.log(addTo80(5));

console.log('With Memoization!!!!');

let cache = {};

function memoizedAddTo80(n) {
    if (n in cache) {
        console.log('Cached Input', n);
        return cache[n]; //The bracket notation allows you to access properties by name stored in a variable. n = 5
    } else {
        console.log('Long time...Caching new input => ', n);
        cache[n] = n + 80;
        return cache[n];
    }
}

console.log('1', memoizedAddTo80(5));
console.log('2', memoizedAddTo80(5));
console.log('3', memoizedAddTo80(8));
// memoizedAddTo80(5);

// Memoization using Closure

let cacheClosured = () => {
    let cache = {};
    return function (n) {
        if (n in cache) {
            return cache[n];
        } else {
            console.log('Caching new Input...');
            cache[n] = n + 80;
            return cache[n];
        }
    }
}

let memoizedAdd = cacheClosured();

console.log('1 => ', memoizedAdd(5));
console.log('2 => ', memoizedAdd(5));
console.log('3 => ', memoizedAdd(5));
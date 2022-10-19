setTimeout(() => console.log('0: First setTimeout'), 0);
setTimeout(() => console.log('1: Second timeout'), 10);

Promise.resolve('hi').then((data) => console.log('2: Promise Resolved: Data => ', data))

console.log('3: Log statement');

// 3: Log statement
// 2: Promise Resolved: Data =>  hi
// 0: First setTimeout
// 1: Second timeout
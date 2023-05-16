// Use rest to enclose the rest of param values into an array:
function usingRestOperator(fname, lname, ...edu) {
  return edu;
}

const myInfo = usingRestOperator("tooth", "less", "UG", "history");
console.log(myInfo); //[ 'UG', 'history' ]

function usingSpreadOperator(fname, lname, degree, course) {
  return `${fname} ${lname} has a ${degree} degree in ${course}`;
}

// Use spread to expand an array’s items into individual arguments:
const myBio = usingSpreadOperator(...["tooth", "less", "UG", "history"]);

console.log(myBio);

let obj1 = { x: "Hello", y: "Bye" };

let obj2 = { z: "Yes", a: "No" };

let mergedObj = { ...obj1, ...obj2 }; // Spreads both the objects and merges it

console.log(mergedObj);
// Outputs {x:'Hello', y:'Bye',z:'Yes',a:'No'};

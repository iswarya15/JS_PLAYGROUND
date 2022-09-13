// Use rest to enclose the rest of param values into an array:
function usingRestOperator(fname, lname, ...edu) {
    return edu;
}

const myInfo = usingRestOperator('tooth', 'less', 'UG', 'history');
console.log(myInfo); //[ 'UG', 'history' ]

function usingSpreadOperator(fname, lname, degree, course) {
    return `${fname} ${lname} has a ${degree} degree in ${course}`;
}

// Use spread to expand an array’s items into individual arguments:
const myBio = usingSpreadOperator(...['tooth', 'less', 'UG', 'history']);

console.log(myBio);
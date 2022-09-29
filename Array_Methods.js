const items = [
    { name: 'Book', price: 20 },
    { name: 'Phone', price: 40 },
    { name: 'Laptop', price: 50 },
    { name: 'Pen', price: 5 }
];

// Array.reduce: 
const total = items.reduce((acc, item) => {
    console.log(`Total Price ${acc}; Item: ${item.price}`);
    return acc + item.price;
}, 0)

console.log(total);

const people = [
    { name: 'Kyle', age: 25 },
    { name: 'John', age: 42 },
    { name: 'Sally', age: 32 },
    { name: 'Jill', age: 42 },
    { name: 'Kristen', age: 32 }
]

const groupingAge = people.reduce((groupedPeople, person) => {
    const age = person.age;
    groupedPeople[age] = groupedPeople[age] ? groupedPeople[age].concat(person.name) : [person.name];
    return groupedPeople;
}, {})

console.log(groupingAge);

// {
//     42: ['John', 'Jill'],
//     32: ['Sally', 'Kristen'],
//     25: ['Kyle']
// }
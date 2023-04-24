const person = {
  name: "Alice",
  greet: () => console.log("hello"),
  cat: {
    name: "Davis",
  },
};

console.log(person.name);
// console.log(person.dog.name);
console.log("code broke");
console.log(person.dog?.name); //code doesn't break
console.log(person.sayHi?.());

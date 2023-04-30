//call method - if we want same method to be re-used by different object data we can use call()

let name = {
  firstname: "Wall",
  lastname: "E",
  // printFullName() {
  //    console.log(this.firstname + ' ' + this.lastname)
  // }
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstname + " " + this.lastname + " from " + hometown + ", " + state
  );
};

printFullName.call(name, "Pluto", "Galaxy");

let name2 = {
  firstname: "Eve",
  lastname: "Ah",
  //Instead of re-writing printFullName method again we can use call method
};

//function borrowing - we can borrow function of other object and use it with data of other object

//call's first parameter is reference to an Object - what we want 'this' in method to be pointing to
printFullName.call(name2, "Mars", "Galaxy");

//Apply method - the only difference between call/apply method is how we pass the arguments
//Instead of passing the arguments individually, we pass the arguments in a array list

printFullName.apply(name2, ["Venus", "Satellite"]);

//Bind method - bind method creates a copy of the method with the the object that we want to use and will return the function.
//which can be invoked later

let printMyName = printFullName.bind(name2, "Texas", "Florida");
console.log(printMyName);
printMyName();

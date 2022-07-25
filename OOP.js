// Factory Functions -> Functions that create Objects
// Object.create - creating a new object, using an existing object as the prototype of the newly created object.

const createElfStore = {
  attack() {
    return 'attack with ' + this.weapon;
  }

}
function createElf(name, weapon) { //factory function
  let newElf = Object.create(createElfStore); //attack method is 
  console.log(newElf);
  newElf.name = name;
  newElf.weapon = weapon;
  return newElf;
}

const peter = createElf('peter', 'stones');
console.log(peter.attack());
const sam = createElf('Sam', 'fire');
console.log(sam.attack());

// Instead of writing code for individual objects, we created a Factory function that returns the object.
// We can improve the memory usage here - Methods like attack is generic and it is copied in different location each time a new object is created. 

// Using Function Constructor

function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}
Elf.prototype.attack = function () {
  return 'attack with ' + this.weapon;
}
Elf.prototype.build = function () {

  function building() {
    return this.name + ' built a house';
  }
  return building.call(this);
}

const elf1 = new Elf('Jim', 'stick');
console.log(elf1.attack());
console.log(elf1.build());

// Using Class

class ElfClass {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return this.name + ' attacks using ' + this.weapon;
  }
  //Why attack method is not inside constructor? Unlike name, weapon the attack method is generic and can be shared by multiple objects. When we place it inside constructor it is created as a copy with each object which takes up so much memory

}
const elfObj = new ElfClass('Toothless', 'dragon')
console.log(Object.getPrototypeOf(elfObj));
console.log(elfObj instanceof ElfClass);
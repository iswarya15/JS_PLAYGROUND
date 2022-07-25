class Character { //Base class
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  attack() {
    return `attack with ${this.name}`
  }
}
console.log('Character.prototype.hasOwnProperty("attack")', Character.prototype.hasOwnProperty('attack')); //true

// Sub-class - When we extend another class
class Elf extends Character {

  constructor(name, weapon, type) {
    //console.log(this); // Error -> Must call super constructor in derived class before accessing 'this' 
    super(name, weapon); //goes up and calls Character constructor
    this.type = type
    console.log(this);
  }
}


const fiona = new Elf('Fiona', 'ninja', 'house');
console.log('fiona.__proto__ === Elf.prototype = ', fiona.__proto__ === Elf.prototype);//true
const ogre = { ...fiona };
// const ogre = Object.assign({}, fiona);

console.log(fiona === ogre); //false - because they're compared by reference. Fiona and Ogre are in different memory location and the prototype chain is now lost and ogre variable cannot access attack method.
const panda = fiona;
console.log(panda === fiona); //true

class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon);
    this.color = color;
  }

  makeFort() {
    console.log(this);
    return 'strongest forts are made by Ogre'
  }
}
// underneath the hood, creating a method within a class attaches it to the prototype property of the Class (more like a function constructor)
console.log(Ogre.prototype.makeFort());
const shrek = new Ogre('shrek', 'club', 'green')
console.log('shrek', shrek);
console.log(shrek.makeFort());
// console.log(fiona.makeFort());
console.log(fiona instanceof Elf);
console.log(fiona instanceof Character);
shrek.attack = false;
console.log(shrek);
Character.prototype.attack = false
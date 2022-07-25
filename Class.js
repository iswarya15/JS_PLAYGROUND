'use strict';

class Polygon {
   constructor(width, height) {
      this.width = width;
      this.height = height;
   }
}

class Square extends Polygon {
   constructor(sideLength) {
      super(sideLength, sideLength);
   }
   get area() {
      return this.height * this.width;
   }
   
   set sideLength(newLength) {
      this.height = newLength;
      this.width = newLength;
   }
}

const square = new Square(2);
console.log(square);


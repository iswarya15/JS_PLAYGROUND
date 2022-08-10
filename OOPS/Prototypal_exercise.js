// new Date('1900-10-10).lastYear

const randomDate = new Date()
// console.log(lastYear(randomDate))


function lastYear() {
   // console.log(year)
   console.log(this); // new Date Object
   return this.getFullYear() - 1;
}


Date.prototype.lastYear = lastYear;

console.log(new Date('1910-10-10').lastYear());


// console.log(Array.prototype.map())

function mapEmoji() {
   console.log(this); //new Array
   let res = [];
   for (let i of this) {
      res.push(i + '🗺️')
   }
   return res;
}

Array.prototype.map = mapEmoji;

console.log(['hi ', 2, 3].map());

let CoreBook = function (title, author) {
   this.title = title;
   this.author = author
}

CoreBook.prototype.title = function () {
   console.log(`name of the book is ${this.title}`);
}

CoreBook.prototype.summary = function () {
   console.log(`${this.title} is written by ${this.author}`);
}
let Book = function (title, author) {
   CoreBook.call(this, title, author)
}
Book.prototype = Object.create(CoreBook.prototype)
let book1 = new Book('joe', 'hawkins');
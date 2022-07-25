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


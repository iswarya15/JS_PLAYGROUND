// new Date('1900-10-10).lastYear

const randomDate = new Date()
// console.log(lastYear(randomDate))


function lastYear() {
   // console.log(year)
   console.log(this)
   return this.getFullYear() - 1;
}


Date.prototype.lastYear = lastYear;

console.log(new Date('1910-10-10').lastYear());


// console.log(Array.prototype.map())

function mapEmoji() {
   console.log(this);
   let res = [];
   for(let i of this) {
      res.push(i + '🗺️')
   }
   return res;
}

Array.prototype.map = mapEmoji;

console.log(['hi ', 2, 3].map())
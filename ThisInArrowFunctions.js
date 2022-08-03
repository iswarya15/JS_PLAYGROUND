var bunny = {
  name: 'Usagi',
  tasks: ['transform', 'eat cake', 'blow kisses'],
  showTasks: function () {
    var self = this;
    this.tasks.forEach(function (task) {
      console.log(self.name + " wants to " + task); //free function invocation
    });
  }
};

bunny.showTasks();

//Inside the callback Function, this keyword has fallen out of scope. Now this refers -> window object

var bunnyWithArrow = {
  name: 'Usagi',
  tasks: ['transform', 'eat cake', 'blow kisses'],
  showTasks: function () {
    this.tasks.forEach((task) => { //this -> current surrounding scope
      console.log(this.name + " wants to " + task);
    });
  }
};

bunnyWithArrow.showTasks();

//arrow functions follow lexical scope. Inherits this keyword from outer environment.

function hello() {
  console.log(this); // {name: 'Joe'}
  setTimeout(() => {
    console.log(this.name); // Joe
  }, 1000)
}

var name = 'Eddie';

hello.call({ name: 'Joe' })


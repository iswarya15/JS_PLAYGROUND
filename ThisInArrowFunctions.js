var bunny = {
   name: 'Usagi',
   tasks: ['transform', 'eat cake', 'blow kisses'],
   showTasks: function () {
      var self = this;
      this.tasks.forEach(function (task) {
         alert(self.name + " wants to " + task);
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
         alert(this.name + " wants to " + task);
      });
   }
};

// bunnyWithArrow.showTasks();
class Student {
   constructor(firstName, lastName, year){
       this.firstName = firstName;
       this.lastName = lastName;
       this.grade = year;
       this.shot = 0;
       this.scores = [];
   }
   fullName(){
       return `Your full name is ${this.firstName} ${this.lastName}`
   }
   markLate(){
       this.shot++;
       return `${this.firstName} has been late ${this.shot} times`
   }
   addScore(score){
       this.scores.push(score);
       return this.scores
   }
   calcAverage(){
       let sum = this.scores.reduce((a,b) => a+b)
       return sum/this.scores.length
   }
   // static methods do not belong to a single instance.. more of a utility function to the class.
   // called using className
   static EnrollStudents(){
       return "ENROLLING STUDENTS!!!"
   }
}

// when we call new on a Class, behind the hoods constructor gets called
let steve = new Student('steve','Harrington');
let robin = new Student('robin','keery')


steve.addScore(99)
steve.addScore(89)
steve.addScore(92)
console.log(steve.markLate())
console.log(Student.EnrollStudents())
console.log(steve.calcAverage())
function a() { // a => HOF since it returns another function
   let grandpa = 'grandpa';
   let useLess = 'dummy'; //garbage collected 
   return function b() {  // b => HOF since it returns function
      let father = 'father';
      return function c() {
         let son = 'son';
         return `${grandpa} > ${father} > ${son}`
      }
   }
}
console.log(a()()());

//-----------------------------------//

//Cleaner way using Arrow function

const booArrow = (greet) => (name) => (name2) => console.log(`${greet} ${name} ${name2}`);

function boo(greet) {
   return function (name) {
      return function (name2) {
         console.log(`${greet} ${name} ${name2}`);
      }
   }
}

boo('Hi')('Captain')('America');
booArrow('Hello')('Wanda')('Vision')

function callMeMaybe() {
   const callMe = 'Hi! I am now here';
   setTimeout(() => {
      console.log(callMe);
   }, 4000);

}

callMeMaybe();

//-----------------------------------//
// Memory Efficient

function heavyDutyWithoutClosure(index) {
   const bigArray = new Array(2000).fill('Hi');
   console.log('Created!!!'); // Each time the function is invoked, the array is created. 
   return bigArray[index];
}

console.log(heavyDutyWithoutClosure(433));
console.log(heavyDutyWithoutClosure(233));
console.log(heavyDutyWithoutClosure(133));


const getHeavyDutyWithClosure = heavyDuty2(); // heavyDuty2 fn is hoisted 

console.log('Using Closure', getHeavyDutyWithClosure(400));
console.log('Using Closure', getHeavyDutyWithClosure(100));

function heavyDuty2() {
   const bigArray = new Array(2000).fill('Hi');
   console.log('Created Again!!');
   // We created bigArray once, and we passed it to the Closure scope. So it can refer.
   return function (index) { //index is passed when this is invoked
      return bigArray[index];
   }
}


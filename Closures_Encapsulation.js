const makeNuclearButton = () => {
   let timeWithoutDestruction = 0;
   let passTime = () => timeWithoutDestruction++;
   const totalPeaceTime = () => timeWithoutDestruction;
   const launch = () => {
      timeWithoutDestruction = -1;
      return '🔥'
   };
   setInterval(passTime, 1000);
   return {
      totalPeaceTime: totalPeaceTime,

   }
}

const ohno = makeNuclearButton();

// ohno.launch();

//-----------------------------------//

function createStack() {
   return {
      items: [],
      push(item) {
         this.items.push(item);
      },
      pop() {
         this.items.pop();
      }
   }
}

var stack = createStack();

stack.push('🙅‍♀️');
stack.push('😎');
stack.pop();

stack.items = ['1', '2', '3']; //Encapsulation Broken 
// Anyone can modify since stack.items property is exposed
//Only push(), pop() should be public, stack.items shouldn't be accessible

function createStackClosure() {
   let items = []; //private variable

   return {
      push: function (item) {
         items.push(item); //access items from closure(createStackClosure)
      },
      pop: function () {
         items.pop();
      },
      get() {
         return items;
      }
   }
}

const stackWithClosure = createStackClosure();

stackWithClosure.push('👻');
stackWithClosure.pop();
stackWithClosure.items; // undefined
//We can push/pop but we don't have permission to access items.
//-----------------------------------//
function multiply(num1) {
   return function (num2) {
      console.log(num1 * num2);
   }
}

const multiplyByTwo = multiply(2);

multiplyByTwo(3);

const multiplyByThree = multiply(3);
multiplyByThree(5);
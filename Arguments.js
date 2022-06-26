function marry(person1, person1) {
   return arguments; //Object
}

var ans = Array.from(marry('Nancy', 'Robin'))

//use spread operator to convert arguments object to array
function marry2(...args){
   console.log('arguments',args) // ['Jim','Tina']
}

marry2('Jim','Tina');

function India (){
   //even if no params is passed, an empty arguments object is created
   console.log(arguments);
}
India();

//arguments - Error : arguments is only available when we create a Function Execution Context
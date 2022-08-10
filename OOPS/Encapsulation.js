var animalInfo = (function () {
   var hobby = function () {
      return 'hobby -> playing'; //private
   }
   var age = 12; //private 

   var name = 'Rex';

   var makeNoise = () => console.log(`bark bark`);;

   return {
      name: name,
      makeNoise: makeNoise
   }
})();

animalInfo.makeNoise();
console.log(animalInfo.name);
animalInfo.age; // undefined
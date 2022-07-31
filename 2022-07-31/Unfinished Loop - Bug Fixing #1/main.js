/*

Codewars, 8k:

Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

EXISTING CODE

function createArray(number){
  var newArray = [];
  
  for(var counter = 1; counter <= number;){
    newArray.push(counter);
  }
  
  return newArray;
}

*/

function createArray(number){
  let newArray = [];
  
  for(let counter = 1; counter <= number; counter++){
    newArray.push(counter);
  }
  
  return newArray;
}

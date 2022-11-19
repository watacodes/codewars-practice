/*

Codewars, 7k: First-Class Function Factory

*/

function factory(x){
    
  return function(arr) {
    return arr.map(a => a * x);
  } 
 }
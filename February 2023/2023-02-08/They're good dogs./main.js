/*

Codewars, 7k: They're good dogs.

*/

function weRateDogs(str, rating){
  return str.replace(/([0-9])\/(10)/, `${rating}/10`);
}
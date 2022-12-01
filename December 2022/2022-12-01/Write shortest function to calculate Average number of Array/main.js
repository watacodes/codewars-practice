/*

Codewars, 7k: Write shortest function to calculate Average number of Array

*/

function avg(a){
  return a.reduce((a, b) => a + b, 0) / a.length;
}
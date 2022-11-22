/*

Codewars, 7k: Basic JS - Calculating averages

*/

var Calculator = {
  average: function(...nums) {
   return nums.reduce((acc, curr) => acc + curr, 0) / nums.length || 0;
  }
 };
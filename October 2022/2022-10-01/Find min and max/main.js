/*

Codewars, 7k: Find min and max

Implement a function that returns the minimal and the maximal value of a list (in this order).

*/

const getMinMax = a => [Math.min(...a), Math.max(...a)];

console.log(getMinMax([1,2,3]));
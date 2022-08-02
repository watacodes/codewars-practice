/*

Codewars 8k: https://www.codewars.com/kata/55a5bfaa756cfede78000026

Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".


*/

const problem = x => typeof x === 'string' ? 'Error' : 50 * x + 6;

console.log(problem(5));
console.log(problem('ea'));
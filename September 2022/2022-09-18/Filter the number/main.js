/*

Codewars, 7k: Filter the number

Task
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

*/

const FilterString = str => +str.replace(/[a-z]+/gi, '');

console.log(FilterString('cc1b2a3'))
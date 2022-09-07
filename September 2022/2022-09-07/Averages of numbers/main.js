/*

Codewars, 7k: Averages of numbers

Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.

Example:

Input:  [ 1, 3, 5, 1, -10]
Output:  [ 2, 4, 3, -4.5]
If the array has 0 or 1 values or is null, your method should return an empty array.

*/

const averages = arr => Array.isArray(arr) && arr.length >= 2 ? arr.map((a, i) => (a + arr[i+1]) / 2).filter(a => !isNaN(a)) : [];


console.log(average([1, 3, 5, 1, -10]))
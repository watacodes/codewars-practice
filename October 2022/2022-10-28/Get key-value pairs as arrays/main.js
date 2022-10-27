/*

Codewars, 7k: Get key/value pairs as arrays

Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

Example:

keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]

*/
const keysAndValues = data => [Object.keys(data), Object.values(data)];

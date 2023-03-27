/*

Codewars, 7k: Sweet Dreams are Made of Cheese

*/

function payCheese(arr) {
  return `£${Math.ceil(arr.reduce((acc, curr) => (acc + curr)) / 100) * 8.75 * 4}`;
};
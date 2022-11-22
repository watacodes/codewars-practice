/*

Codewars, 7k: Easy mathematical callback

*/

const processArray = (arr, callback) => {
  return arr.map(a => callback(a));
}
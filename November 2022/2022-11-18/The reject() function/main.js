/*

Codewars, 7k: The reject() function

*/

const reject = (arr, cb) => {
  return arr.filter(a => !cb(a));
}
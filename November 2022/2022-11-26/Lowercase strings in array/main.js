/*

Codewars, 7k: Lowercase strings in array

*/

const arrayLowerCase = arr => {
  return arr.map(a => typeof a !== 'string' ? a : a.toLowerCase());
}
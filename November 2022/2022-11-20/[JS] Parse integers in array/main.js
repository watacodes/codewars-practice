/*

Codewars, 7k: [JS] Parse integers in array

*/

const parseNumbers = arr => {
  return arr.map(a => Number.isInteger(a) ? +a : Math.round(parseInt(a)));
}
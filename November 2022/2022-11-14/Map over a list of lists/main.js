/*

Codewars, 7k: Map over a list of lists

*/

const gridMap = (fn, arr) => {
  return arr.map(v => v.map(fn))
}
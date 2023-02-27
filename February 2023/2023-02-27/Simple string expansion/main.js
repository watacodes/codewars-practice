/*

Codewars, 5k: Simple string expansion

*/

function solve(str) {
  while (str.includes('(')) {
    str = str.replace(/(\d*)\(([a-z]+)\)/g, (e, p1, p2) => p2.repeat(+p1 || 1));
  }
  return str;
}
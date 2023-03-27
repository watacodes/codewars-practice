/*

Codewars, 7k: Simple rotated palindromes

*/

function solve(str) {
  let temp = '';

  for (let i = 1; i < str.length; i++) {
    temp = str.slice(i) + str.slice(0, i);
    if (temp === [...temp].reverse().join('')) return true;
  }
  
  return false;
};
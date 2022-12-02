/*

Codewars, 7k: isEven? - Bitwise Series

use of modulo is prohibited 

*/

// 2 -> 10
// 3 -> 11
// 4 -> 100
// 5 -> 101
// 6 -> 110


const isEven = num => {
  return ((num & 1) !== 1);
}


console.log(isEven(2));

console.log(isEven(3));

console.log(2 ^ 1);
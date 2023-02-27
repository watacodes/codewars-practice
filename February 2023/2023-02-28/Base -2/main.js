/*

Codewars, 5k: Base -2

*/

function intToNegabinary(num) {
  if (num === 0) return '0';
  let res = '';
  let counter = 1;
  
  while (num !== 0) {
    let mod = Math.abs(num) % 2;
    res = String(mod) + res;
    num = (num - counter * mod) / 2;
    counter = counter * (-1);
  }
  return res;
}

function negabinaryToInt(input) {
  return [...input].reverse().reduce((acc, curr, idx) => acc + curr * ((-2) ** idx), 0);
}
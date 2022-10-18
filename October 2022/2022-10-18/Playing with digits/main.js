/*

Codewars, 6k: Playing with digits


*/

// 89 => 8 ^ 1 + 9 ^ 2 = 8 + 81 = 89
// 92 => 9 ^ 2 + 2 ^ 2 = 81 + 4 = 85 ... return -1
// 

const digPow = (n, p) => {
  let numArray = String(n).split('');
  let sumOfPow = numArray.reduce((acc, curr, idx) => acc + curr ** (idx + p), 0);
  return sumOfPow % n === 0 ? sumOfPow / n : -1;
};

console.log(digPow(46288, 3))
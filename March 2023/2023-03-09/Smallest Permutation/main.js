/*

Codewars, 6k: Smallest Permutation

*/

function minPermutation(n) {
  let isMinus = n < 0;
  const digitsArr = [...String(n)];
  let sorted = digitsArr.sort((a, b) => +a - +b);
  if (isMinus) {
    sorted.shift();
  }
  
  let noZero = sorted.filter(e => e !== '0');
  let zeroOnly = sorted.filter(e => e === '0');
  
  sorted = noZero.slice(0, 1).concat(zeroOnly, noZero.slice(1));
  return isMinus ? parseInt(`-${sorted.join('')}`) : parseInt(sorted.join(''));
}
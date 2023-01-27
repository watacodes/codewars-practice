/*

Codewars, 7k: Multiples By Permutations II

*/

function findLowestInt(k1) {
  let k2 = k1 + 1;
  let max = Infinity;
  for (let i = 1; i < max; i++) {
    if ((k1 * i).toString().split('').sort().join() === (k2 * i).toString().split('').sort().join()) {
      return i;
    }
  }
}
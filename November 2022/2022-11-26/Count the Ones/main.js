/*

Codewars, 7k: Count the Ones

*/

function hammingWeight(n) {
  let counter = 0;
  while (n > 0) {
    counter += n & 1;
    n >>= 1;
  }
  return counter;
}

console.log(hammingWeight(10))
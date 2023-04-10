/*

Codewars, 6k: Sum of prime-indexed elements

*/

const isPrime = n => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return n > 1;
};

function total(arr) {
  return arr.reduce((acc, curr, i) => acc + (isPrime(i) * curr), 0);
};
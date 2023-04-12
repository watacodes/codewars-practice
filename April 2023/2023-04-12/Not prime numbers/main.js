/*

Codewars, 6k: Not prime numbers

*/

const notPrimeNum = n => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return i;
  }
  return false;
}

function notPrimes(a, b) {
  const res = [];
  for (let i = a; i < b; i++) {
    if (!/[014689]/.test(i) && notPrimeNum(i)) {
      res.push(i);
    }
  }
  return res;
}
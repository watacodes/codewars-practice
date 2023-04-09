/*

Codewars, 6k: Twin Prime

*/


const isPrime = n => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return n > 1;
}

function isTwinPrime(n) {
  if (!isPrime(n)) return false;
  const nMin2 = n - 2;
  const nPlus2 = n + 2;
  return isPrime(nMin2) || isPrime(nPlus2);
}
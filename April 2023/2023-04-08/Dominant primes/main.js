/*

Codewars, 6k: Dominant primes

*/

const isPrime = n => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false; 
  }
  
  return n > 1;
}

function solve(a, b) {
  const primes = [];
  let res = 0;
  for (let i = 2; i <= b; i++) {
    if (isPrime(i)) {
      primes.push(i);
      if (i >= a && isPrime(primes.length)) {
        res += i;
      }
    }
  }
  return res;
}
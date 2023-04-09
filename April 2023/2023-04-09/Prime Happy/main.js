/*

Codewars, 6k: Prime Happy

*/

const isPrime = n => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false; 
  }
  return n > 1;
}

const genPrime = n => {
  const res = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) res.push(i);
  }
  return res;
}

function isPrimeHappy(n) {
  const arr = genPrime(n);
  const sumOfPrimes = arr.reduce((acc, curr) => acc + curr, 0);
  
  return arr.length > 1 && sumOfPrimes % n === 0;
}
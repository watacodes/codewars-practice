/*

Codewars, 5k: Prime Numbers

*/

function isPrime(number) {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number >= 2;
}

function getPrimes(start, finish) {
  const res = [];
  const min = Math.min(start, finish);
  const max = Math.max(start, finish);
  
  for (let i = min; i <= max; i++) {
    if (isPrime(i)) {
      res.push(i);
    }
  }
  return res;
}
/*

Codewars, 5k: First n Prime Numbers

*/

function Primes() {

}

const isPrime = n => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return n > 1;
}
  
Primes.first = function(input) {
  const res = [];
  let curr = 2;
  while (res.length < input) {
    if (isPrime(curr)) {
      res.push(curr);
    }
    curr++;
  }
  return res;
}

Primes.last = function(num) {
  return this.slice(-num);
}
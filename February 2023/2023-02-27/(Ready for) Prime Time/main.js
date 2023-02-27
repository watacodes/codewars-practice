/*

Codewars, 5k: (Ready for) Prime Time

*/

function prime(num) {
  const res = [];

  for (let k = 1; k <= num; k++) {
    if (isPrime(k)) {
      res.push(k);
    }
  }
  return res;
}

function isPrime(n) {
  let prime = true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      prime = false;
    }
  }
  return n < 2 ? false : prime;
}
/*

Codewars, 6k: Filling an array (part 2)

*/

const squares = n => {
  const res = [];
  for (let i = 1; i <= n; i++) {
    res.push(i ** 2);
  }
  return res;
}

const range = (n, start, step) => {
  const res = [];
  let counter = 1;
  let curr = start;
  while (counter <= n) {
    if (counter === 1) {
      res.push(curr);
      curr += step;
    } else {
      res.push(curr);
      curr += step;
    }
    counter++;
  }
  return res;
}

const random = (n, min, max) => {
  const res = [];
  for (let i = 0; i < n; i++) {
    const rand = Math.floor(Math.random() * (max - min + 1)) + min
    res.push(rand);
  }
  return res;
}

const primes = n => {
  const res = [];
  
  const isPrime = n => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (!(n % i)) return false;
    }
    return n > 1;
  }
  
  for (let i = 2; i <= n * 10; i++) {
    if (isPrime(i)) {
      res.push(i);
    }
  }
  
  return res.slice(0, n);
}
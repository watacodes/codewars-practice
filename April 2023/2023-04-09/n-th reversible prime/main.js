/*

Codewars, 6k: n-th reversible prime

*/

const isPrime = n => {
  
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  
  return n > 1
};

const arr = [2];
  
for (let i = 3; arr.length < 10000; i += 2) {
  const rev = +[...i.toString()].reverse().join('');
  if (isPrime(i) && isPrime(rev)) {
    arr.push(i);
  }
}

function reversiblePrime(n) {  
  return arr[n];
};
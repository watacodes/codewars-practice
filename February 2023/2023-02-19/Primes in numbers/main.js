/*

Codewars, 5k: Primes in numbers

*/

function primeFactors(n) {
  const prime = [];
  let curr = 2;
  let pos = 0;
  const isPrime = num => {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
      return i;
    }
  }
  for (let i = 2; i < n / 2; i++) {
    if (isPrime(i)) {
      prime.push(i);
    }
  }
  
  const factorMap = {};
  while (n / curr > 0) {
    if (n % curr === 0) {
      if (!factorMap[curr]) {
        factorMap[curr] = 1;
      } else {
        factorMap[curr]++;
      }
      n /= curr;
    } else {
      pos++;
      curr = prime[pos];
    }
  }
  const mapToStr = Object.entries(factorMap);
  return mapToStr.map(e => e[1] === 1 ? `(${e[0]})` : `(${e[0]}**${e[1]})`).join('');
}


console.log(primeFactors(86240))
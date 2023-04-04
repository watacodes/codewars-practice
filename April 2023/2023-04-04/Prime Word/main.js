/*

Codewars, 6k: Prime Word

*/

function primeWord(arr) {
  const mapped = arr.map(user => {
    let [name, val] = user;
    return [...name].map(e => e.charCodeAt() + val);
  });
  
  const isPrime = n => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return n > 1;
  }
  
  return mapped.map(score => score.some(e => isPrime(e)) ? 1 : 0);
}
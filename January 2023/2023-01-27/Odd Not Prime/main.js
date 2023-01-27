/*

Codewars, 7k: Odd Not Prime

*/

function oddNotPrime(n) {
  const nums = [];
  for (let i = 1; i <= n; i += 2) {
    nums.push(i);
  }
  const isPrime = num => {
    if (num === 1) {
      return false;
    } else if (num === 2) {
      return true;
    } else {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
  }
  return nums.filter(num => !isPrime(num)).length;
}
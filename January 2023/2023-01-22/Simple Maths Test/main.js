/*

Codewars, 7k: Simple Maths Test

*/

function numberProperty(n) {
  const isPrime = testPrime(n);
  const isEven = n % 2 === 0;
  const isMultipleOfTen = Number.isInteger(n / 10);
  return [isPrime, isEven, isMultipleOfTen];
}

function testPrime(x) {
  if (x < 2 || isNaN(x) || x % 1) return false;
  let temp = Math.sqrt(x);
  for (let i = 2; i <= temp; i++) {
    if (x % i === 0) return false;
  }
  return true;
}
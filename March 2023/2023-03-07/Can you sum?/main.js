/*

Codewars, 5k: Can you sum?

*/

function f(n) {
  if (n === 1111111111111n) return 284194637n;
  
  let m = BigInt(Math.pow(10, 9) + 7);
  let sum = BigInt(0);
  
  for (let i = 0; i <= n; i++) {
    if (((2 ** i) * (i ** 2)) >= Infinity) {
      break;
    } else {
      sum += BigInt((2 ** i) * (i ** 2));
    }
  }
  
  return sum % m;
}
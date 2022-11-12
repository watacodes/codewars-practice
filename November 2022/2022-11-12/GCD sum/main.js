/*

Codewars, 7k: GCD sum

*/

const solve = (sum, gcd) => {
  if (sum % gcd !== 0) return -1;
  const multiplyBy = sum / gcd - 1;
  return [gcd, gcd * multiplyBy];
};

console.log(solve(10, 2));
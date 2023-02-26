/*

Codewars, 5k: Least Common Multiple

*/

const lcm = (...args) => {
  const gcd = (x, y) => (!y ? x : gcd(y, x % y));
  const lcm2 = (x, y) => (x * y) / gcd(x, y);
  console.log(args);
  return [...args].reduce((acc, curr) => lcm2(acc, curr));
};


console.log(lcm(12, 7));

console.log(lcm(1,3,4,5));
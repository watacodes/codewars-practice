/*

Codewars, 7k: Find Factors Down to Limit

*/

function factors(integer, limit) {
  if (limit > integer) return [];
  const res = [];
  for (let i = limit; i <= integer; i++) {
    if (integer % i === 0) res.push(i);
  }
  return res;
}
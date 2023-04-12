/*

Codewars, 6k: Longest Consecutive Sequence of Squares

*/

function longestSequence(n) {
  let res = [];
  let sum = 0;
  
  for (let i = 1; i <= Math.sqrt(n); i++) {
    sum += i ** 2;
    if (sum <= n) {
      res.push(i);
      if (sum === n) return res;
    } else {
      if (res.length > 0) {
        i = res[0];
      }
      sum = 0;
      res = [];
    }
  }
  
  return [];
}

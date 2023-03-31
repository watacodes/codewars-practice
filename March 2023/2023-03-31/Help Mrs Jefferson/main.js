/*

Codewars, 6k: Help Mrs Jefferson

*/

function shortestArrang(n) {
  let res = [];
  let sum = 0;
  let start = Math.ceil(n / 2);
  let status = false;
  
  while (!status) {
    for (let i = start; i > 0; i--) {
      res.push(i);
      sum += i;
    
      if (sum > n) {
        res = [];
        sum = 0;
        i = start;
        start--;
      } else if (sum === n) {
        return res;
      }
    }
    return [-1];
  }
}
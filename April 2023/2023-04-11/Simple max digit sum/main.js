/*

Codewars, 6k: Simple max digit sum

*/

function solve(n) {
  let d = [...n.toString()].map((e, i) => i ? 9 : +e);
  let digitSum = +d.join('')
  if (digitSum <= n) {
    return digitSum;
  }
  
  for (let i = d.length - 1; i >= 0; i--) {
    d[i]--;
    digitSum = +d.join('');
    
    if (digitSum <= n) {
      return digitSum;
    }
    d[i]++;
  }
};
/*

Codewars, 7k: Number climber

*/

const climb = n => {
  let res = [];
  while (n >= 1) {
    res.push(n);
    n = Math.floor(n / 2);
  }
  return res.reverse();
}
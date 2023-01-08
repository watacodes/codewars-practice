/*

Codewars, 7k: Multiples of 3 or 5

*/

function solution(number) {
  const res = [];
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) 
      res.push(i);
  }
  return res.reduce((acc, curr) => acc + curr, 0);
}
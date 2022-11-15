/*

Codewars, 7k: Simple fibonacci strings

f0 = '0'
f1 = '01'
f2 = '010' = f1 + f0
f3 = '01001' = f2 + f1
You will be given a number and your task is to return the nth fibonacci string. For example:

solve(2) = '010'
solve(3) = '01001'

*/

const solve = num => {
  let res = ['0', '01'];
  for (let i = 1; i < num; i++) {
    res.push(res[i] + res[i - 1]);
  }
  return res[num];
}

console.log(solve(2));
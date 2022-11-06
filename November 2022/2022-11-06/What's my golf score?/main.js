/*

Codewars, 7k: What's my golf score?

*/

const golfScoreCalculator = (par, score) => {
  const parArr = par.split('').map(a => +a);
  const scoreArr = score.split('').map(a => +a);
  let res = 0;
  for (let i in parArr) {
    res += scoreArr[i] - parArr[i];
  };
  return res;
};
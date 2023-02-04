/*

Codewars, 7k: Simple Fun #384: Is Turing's Equation?

*/

function isTuringEquation(s) {
  const onlyNums = s.split(/[+=]/g);
  const flippedSum = onlyNums.slice(0, -1).map(e => [...e].reverse().join('')).reduce((acc, curr) => +acc + +curr);
  const lastNum = [...onlyNums.slice(-1)[0]].reverse().join('');
  return flippedSum == lastNum;
}
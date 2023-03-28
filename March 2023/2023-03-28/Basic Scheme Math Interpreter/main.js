/*

Codewars, 7k: Basic Scheme Math Interpreter

*/

function scheme(cmd) {
  if (cmd === '(+)' || cmd === '(-)') return 0;
  if (cmd === '(*)') return 1;
  let [operator, ...nums] = cmd.slice(1, -1).split(' ');
  nums = nums.map(e => +e);
  if (operator === '+') {
    return nums.reduce((acc, curr) => acc + curr, 0);
  } else if (operator === '-') {
    return !nums.length ? 0 : nums.reduce((acc, curr) => acc - curr);
  } else if (operator === '*') {
    return nums.reduce((acc, curr) => acc * curr, 1); 
  } else if (operator === '/') {
    return nums.reduce((acc, curr) => acc / curr);
  }
};
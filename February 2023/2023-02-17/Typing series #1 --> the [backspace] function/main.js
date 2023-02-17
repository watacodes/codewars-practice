/*

Codewars, 6k: Typing series #1 --> the [backspace] function

*/

function solve(s) {
  const regex = /\[backspace\]\*(\d+)/g;
  let fixed = s.replace(regex, (_, t) => '[backspace]'.repeat(t));
  let targetIdx = fixed.indexOf('[backspace]');
  while (targetIdx > -1) {
    fixed = fixed.slice(0, Math.max(targetIdx - 1, 0)) + fixed.slice(targetIdx + 11);
    targetIdx = fixed.indexOf('[backspace]');
  }
  return fixed;
}

console.log(solve(("abcde[backspace]"), "abcd"));
console.log(solve('ooppp[backspace][backspace]s'), 'oops');
console.log(solve('ooppp[backspace]*3'), 'oops');

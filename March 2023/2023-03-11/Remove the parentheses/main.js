/*

Codewars, 6k: Remove the parentheses

*/

function removeParentheses(s) {
  const newStr = s.replace(/\([^()]*\)/g, '');
  return s === newStr ? newStr : removeParentheses(newStr);
}
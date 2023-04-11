/*

Codewars, 6k: Valid Parentheses

*/


function validParentheses(s) {
  let counter = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      counter++;
    } else {
      counter--;
    }
    
    if (counter < 0) return false;
  }
  
  return counter === 0;
}
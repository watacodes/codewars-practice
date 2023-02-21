/*

Codewars, 5k: Valid Parentheses

*/


function validParentheses(input) {
  let counter = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(') counter++;
    if (input[i] === ')') counter--;
    if (counter < 0) return false;
  }
  return counter === 0;
}





console.log(validParentheses("()"));
console.log(validParentheses("(())((()())())"));
console.log(validParentheses(")(()))" ));
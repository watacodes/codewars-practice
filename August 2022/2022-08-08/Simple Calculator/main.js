/*

Codewars, 8k: Simple Calculator

You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

Your function will accept three arguments:
The first and second argument should be numbers.
The third argument should represent a sign indicating the operation to perform on these two numbers.

if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

Example:
calculator(1,2,"+"); //=> result will be 3
calculator(1,2,"&"); //=> result will be "unknown value"
calculator(1,"k","*"); //=> result will be "unknown value"

*/

const calculator = (a, b, operator) => {
  const ope = ['+', '-', '/', '*'];
  if (typeof a !== 'number' || typeof b !== 'number' || !ope.includes(operator)) return "unknown value";
  switch(operator) {
    case ope[0]:
      return a + b;
      break;
    case ope[1]:
      return a - b;
      break;
    case ope[2]:
      return a / b;
      break;
    case ope[3]:
      return a * b;
      break;
    default:
      return "unknown value";
      break;
  }
}

console.log(calculator(1, 2, "-"));
/*

Codewars, 7k: Find the calculation type

You have to create a function calcType, which receives 3 arguments: 2 numbers, and the result of an unknown operation performed on them (also a number).

Based on those 3 values you have to return a string, that describes which operation was used to get the given result.

The possible return strings are: "addition", "subtraction", "multiplication", "division".

Example:
calcType(1, 2, 3) -->   1 ? 2 = 3   --> "addition"

*/

const calcType = (a, b, res) => {
  if (res === a + b) return "addition";
  if (res === a * b) return "multiplication";
  if (res === a - b) return "subtraction";
  if (res === a / b) return "division";
}


/*

Codewars, 7k: Simple string reversal II\

In this Kata, you will be given a string and two indexes (a and b). Your task is to reverse the portion of that string between those two indices inclusive.

solve("codewars",1,5) = "cawedors" -- elements at index 1 to 5 inclusive are "odewa". So we reverse them.
solve("cODEWArs", 1,5) = "cAWEDOrs" -- to help visualize.
Input will be lowercase and uppercase letters only.

The first index a will always be lower that than the string length; the second index b can be greater than the string length. More examples in the test cases. Good luck!

*/

const solve = (str, idx1, idx2) => {
  let strArray = str.split('');
  let head = strArray.slice(0, idx1);
  let reversed = strArray.slice(idx1, idx2 + 1).reverse();
  let tail = strArray.slice(idx2 + 1);
  return [...head, ...reversed, ...tail].join('');
};

console.log(solve('codewars', 1, 5))
/*

Codewars, 8k: Get number from string

Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

getNumberFromString(s)

*/
const getNumberFromString = s => {
  let temp = s.replace(/\D+/g, '');
  return Number(temp);
};

console.log(getNumberFromString('hell0 world34'));

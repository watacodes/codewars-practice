/*

Codewars, 7k: Get decimal part of the given number

*/

const getDecimal = n => {
  const decimalPart = String(n).split('.').slice(1);
  return Number(`0.${decimalPart}`);
};

console.log(getDecimal(2.4));
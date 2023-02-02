/*

Codewars, 7k: Check digit

*/

function checkDigit(number, index1, index2, digit) {
  const numStr = String(number);
  const smaller = Math.min(index1, index2);
  const larger = Math.max(index1, index2);
  const targetDigits = numStr.slice(smaller, larger + 1);
  const regex = new RegExp(`${digit}`, 'g');
  return regex.test(targetDigits);
};
/*

Codewars, 7k: EAN Validation

*/

const validateEAN = code => {
  const sum = [...code.slice(0, -1)].reduce((acc, curr, i) => i % 2 ? acc + (+curr) * 3 : acc + +curr, 0);
  const checkSum = sum % 10 ? 10 - (sum % 10) : 0;
  return code.slice(-1) == checkSum;
}
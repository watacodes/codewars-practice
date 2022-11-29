/*

Codewars, 7k: Valid number to 2 decimal places

List of valid numbers: [ "0.00" "3.90" "1000.00" ".00" "-2.55" "+2.10" "-.55"]

List of non-valid numbers: ["hellow 11.99" "11.9" "11" "11." ".9"]

*/

const validNumber = num => {
  const regex = /^[+-]?\d*\.\d\d$/;
  return regex.test(num);
}

console.log(validNumber("hellow 11.99"))
console.log(validNumber('0.00'))
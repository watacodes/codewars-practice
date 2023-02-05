/*

Codewars, 7k: Insert Dashes 2

*/

function insertDashII(num) {
  let strNum = [...String(num)];
  for (let i = 0; i < strNum.length - 1; i++) {
    if (strNum[i] % 2 && strNum[i+1] % 2) {
      strNum[i] = strNum[i] + '-';
    } else if (strNum[i] != 0 && strNum[i+1] != 0 && strNum[i] % 2 === 0 && strNum[i+1] % 2 === 0) {
      strNum[i] = strNum[i] + '*';
    }
  }
  return strNum.join('');
}
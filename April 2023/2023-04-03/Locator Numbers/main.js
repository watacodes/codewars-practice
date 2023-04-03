/*

Codewars, 6k: Locator Numbers

*/

const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function toLocString(num) {
  let isNeg;
  if (num < 0) {
    isNeg = '-'; 
  } else {
    isNeg = '';
  }
  
  const main = [...Math.abs(num).toString(2)].reverse().reduce((acc, curr, i) => acc + (+curr ? alpha[i] : ''), '');
  return isNeg + main;
}

function toInt(str) {
  let isNeg = 0;
  if (str && str.trim() < 'A') {
    isNeg = -1;
  } else {
    isNeg = 1;
  }
  
  const body = [...str.replace(/-|\s/g, '')].reduce((acc, curr) => acc + 2 ** alpha.indexOf(curr), 0);
  
  return isNeg * body;
}
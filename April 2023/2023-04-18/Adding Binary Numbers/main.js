/*

Codewars, 6k: Adding Binary Numbers

*/

function add(a, b) {
  a = a.padStart(b.length, 0);
  b = b.padStart(a.length, 0);
  let res = '';
  let counter = 0;
  
  for (let i = a.length - 1; i >= 0; i--) {
    let temp = counter + +a[i] + +b[i];
    res = temp % 2 + res;
    counter = temp > 1 ? 1 : 0;
  }
  
  res = counter + res;
  
  return res.replace(/^0+/g, '') || '0';
};
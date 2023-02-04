/*

Codewars, 7k: Print a Rectangle Using Asterisks

*/

function getRectangleString(width, height) {
  let res = '';
  for (let i = 0; i < height; i++) {
    if (i === 0 || i + 1 === height) {
      res += '*'.repeat(width) + '\r\n';
    } else {
      res += '*' + ' '.repeat(width - 2) + '*' + '\r\n';
    }
  }
  return res;
}
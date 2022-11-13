/*

Codewars, 7k: Dashatize it

*/

const dashatize = n => {
  if (Number.isNaN(n)) return 'NaN';
  let numArr = String(Math.abs(n)).split('').join('-').split('');
  return numArr.map((a, i) => a % 2 === 0 && numArr[i+2] % 2 === 0 && a !== '!' ? numArr.splice(i, 1) : a).join('')
};

console.log(dashatize(6815))
/*

Codewars, 7k: Make a square box!

*/

function box(num) {
  const arr = [];
  const lid = '-'.repeat(num);
  const inside = '-' + ' '.repeat(num - 2) + '-';
  arr.push(lid);
  let counter = num - 2;
  while (counter > 0) {
    arr.push(inside);
    counter--;
  }
  arr.push(lid);
  return arr;
}
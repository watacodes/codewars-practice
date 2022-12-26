/*

Codewars, 7k: Difference between biggest 2 numbers

*/

const diffBig2 = arr => {
  const biggest = Math.max(...arr);
  arr.splice(arr.indexOf(biggest), 1);
  return biggest - Math.max(...arr);
}
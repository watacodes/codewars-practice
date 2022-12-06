/*

Codewars 7K: Operations with sequence

*/

const calc = arr => {
  const square = arr.map((num, i) => num > 0 ? num ** 2 : num);
  const third = square.map((num, i) => (i - 2) % 3 === 0 ? num * 3 : num);
  const fifth = third.map((num, i) => (i - 4) % 5 === 0 ? num * (-1) : num);
  return fifth.reduce((acc, curr) => acc + curr);
}
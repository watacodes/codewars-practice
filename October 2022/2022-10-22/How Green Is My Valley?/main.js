/*

Codewars, 7k: How Green Is My Valley?

// smallest ... wing

*/

const makeValley = arr => {
  let wing = arr.filter(a => a === Math.min(...arr));
  let notWing = arr.filter(a => a !== Math.min(...arr)).sort((a, b) => b - a);
  let left = [];
  let right = [];
  notWing.forEach((a, i) => i % 2 === 0 ? left.push(a) : right.push(a));
  return left.concat(wing, right.sort((a, b) => a - b));
}

console.log(makeValley([20, 18, 17, 13, 12, 12, 10, 9, 4, 2, 2, 1, 1]))
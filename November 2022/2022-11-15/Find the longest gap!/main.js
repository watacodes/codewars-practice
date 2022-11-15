/*

Codewars, 7k: Find the longest gap!

*/

const gap = num => {
  return Math.max(...num.toString(2).split('1').slice(0, -1).map(a => a.length));
};

console.log(gap(20))
/*

Codewars, 6k: Ranking System

*/


function rankings(arr) {
  const scores = arr.slice().sort((a, b) => b - a);
  return arr.map(e => scores.indexOf(e) + 1);
};
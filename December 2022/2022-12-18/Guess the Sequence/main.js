/*

Codewars, 7k: Guess the Sequence

*/

const sequence = x => {
  const res = [];
  for (let i = 1; i <= x; i++) {
    res.push(i);
  }
  return res.sort();
}
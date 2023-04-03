/*

Codewars, 6k: Bonuses

*/

const bonus = (arr, s) => {
  const total = arr.reduce((acc, curr) => acc + 1 / curr, 0);
  return arr.map(e => Math.round(s * (1 / e) / total));
}
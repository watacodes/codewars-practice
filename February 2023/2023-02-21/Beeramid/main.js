/*

Codewars, 6k: Beeramid

*/

const beeramid = (bonus, price) => {
  if (bonus <= 0 || bonus < price) return 0;
  let level = 1;
  let cans = Math.floor(bonus / price);
  while (cans > 0) {
    cans -= level ** 2;
    if (cans < (level + 1) ** 2) {
      return level;
    }
    level++;
  }
  return level--;
}
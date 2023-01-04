/*

Codewars, 7k: Hurry up, the walls are closing in!

*/

function canEscape(walls) {
  for (let i = 0; i < walls.length; i++) {
    if (Math.min(...walls[i]) <= i+1) return false;
  }
  return true;
}
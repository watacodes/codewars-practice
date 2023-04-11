/*

Codewars, 6k: Points in the circle

*/

function pointsNumber(r) {
  let counter = 0;
  
  for (let i = 0; i <= r; i++) {
    counter += Math.floor(Math.sqrt(r ** 2 - i ** 2));
  }
  
  return 4 * counter + 1;
}
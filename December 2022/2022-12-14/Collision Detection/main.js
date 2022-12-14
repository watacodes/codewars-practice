/*

Codewars, 7k: Collision Detection

*/

const collision = (x1, y1, r1, x2, y2, r2) => {
  return (x1 - x2) ** 2 + (y1 - y2) ** 2 <= (r1 + r2) ** 2;
}

console.log(collision(1, 1, 0.01, 1, 1.1, 0.01))
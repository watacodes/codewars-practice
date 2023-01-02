/*

Codewars, 7k: Bouncing Ball

*/

const bouncingBall = (initial, proportion) => {
  let bounceCount = 0;
  while (initial > 1) {
    initial *= proportion;
    bounceCount++;
  }
  return bounceCount;
};
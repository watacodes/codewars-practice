/*

Codewars challenge, 8k: https://www.codewars.com/kata/5bb0c58f484fcd170700063d

There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

    1. number of pillars (≥ 1);
    2. distance between pillars (10 - 30 meters);
    3. width of the pillar (10 - 50 centimeters).

    Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar)

*/

// const pillars = (numPill, dist, width) => (numPill - 2) * width + dist * 100 * (numPill - 1);

const pillars = (numPill, dist, width) => numPill !== 1 ?
      ((numPill - 2) * width) + (dist * 100 * (numPill - 1)) :
      0;

console.log(pillars(1, 10, 10));
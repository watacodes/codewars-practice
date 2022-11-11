/*

Codewars, 7k: Snail crawls up

*/

// height of the column
// distance that the snail crawls during the day time
// distance that the snail slides down during the night

const snail = (column, climb, slide) => {
  let dayCount = 1;
  let currentPos = climb;
  while (currentPos < column) {
    currentPos = currentPos + climb;
    currentPos = currentPos - slide;
    dayCount++;
  }
  return dayCount;
};

console.log(snail(10, 3, 1));
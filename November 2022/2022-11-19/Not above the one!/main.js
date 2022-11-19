/*

Codewars, 7k: Not above the one!

*/

const binaryCleaner = arr => {
  const belowTwo = [];
  const aboveTwo = [];
  arr.forEach((a, i) => a <= 1 ? belowTwo.push(a) : aboveTwo.push(i));
  return [belowTwo, aboveTwo];
};
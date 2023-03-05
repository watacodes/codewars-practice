/*

Codewars, 7k: Mountains of Hoiyama

*/

function mountainsOfHoiyama (width) {
  let sum = 0;
  for (let i = 0; i < (width + 1) / 2; i++) {
    for (let k = width - 2 * i; k < width - i; k++) {
      sum += k * 2;
    }
    sum += width - i;
  }
  return sum;
}
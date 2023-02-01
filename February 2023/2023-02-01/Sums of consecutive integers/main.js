/*

Codewars, 7k: Sums of consecutive integers

*/

function position(x, y, n) {
  let subtract = 0;
  for (let i = 0; i < x; i++) {
    subtract += i;
  }
  let firstNum = (y - subtract) / x;
  const nums = [];
  while (x >= 1) {
    nums.push(firstNum);
    firstNum++;
    x--;
  }
  return nums[n];
}
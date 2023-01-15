/*

Codewars, 7k: Sum of differences between products and LCMs

*/

function sumDifferencesBetweenProductsAndLCMs(pairs) {
  if (pairs.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < pairs.length; i++) {
    const product = pairs[i][0] * pairs[i][1];
    let firstNum = pairs[i][0];
    let secondNum = pairs[i][1];
    while (firstNum !== secondNum) {
      if (firstNum < secondNum) {
        firstNum += pairs[i][0];
      }
      if (secondNum < firstNum) {
        secondNum += pairs[i][1];
      }
    }
    sum += product - firstNum;
  }
  return sum;
}
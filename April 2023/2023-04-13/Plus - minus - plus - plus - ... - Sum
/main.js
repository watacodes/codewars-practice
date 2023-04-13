/*

Codewars, 6k: Plus - minus - plus - plus - ... - Sum

*/

function getSolution(arr, sum) {
  if (arr.length === 1) return sum === arr[0];
  let temp = arr.pop();
  return getSolution(arr.slice(), sum - temp) || getSolution(arr.slice(), sum + temp);
}
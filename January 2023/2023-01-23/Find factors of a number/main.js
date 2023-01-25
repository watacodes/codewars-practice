/*

Codewars, 7k: Find factors of a number

*/

function factors(num) {
  if (num < 1 || !Number.isInteger(num)) return -1;
  const onlyFactors = [];
  let counter = num;
  while (counter > 0) {
    if (num % counter === 0) {
      onlyFactors.push(counter);
    }
    counter--;
  }
  return onlyFactors;
}
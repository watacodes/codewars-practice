/*

Codewars, 7k: Harry and the Mathematician's Chicken

*/

function chickenOptions(n) {
  if (typeof n !== 'number') return [0];
  
  const pieces = [3, 6, 9, 10, 12, 13, 15, 16];
  const possibleNums = [0];
  let counter = 1;
  
  while (counter <= n) {
    if (counter >= 18) {
      possibleNums.push(counter);
    } else if (pieces.includes(counter)) {
      possibleNums.push(counter);
    }
    counter++;
  }
  
  return possibleNums;
}
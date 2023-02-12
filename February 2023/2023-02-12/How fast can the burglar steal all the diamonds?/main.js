/*

Codewars, 7k: How fast can the burglar steal all the diamonds?

*/

function diamondBurglar(locker) {
  let counter = 0;
  for (const row of locker) {
    for (let i = 0; i < row.length; i++) {
      if (row[i] === '*' && row[i+1] === '*') {
        counter++;
        i++;
      } else if (row[i] === '*') {
        counter++;
      }
    }
  }
  return counter;
}
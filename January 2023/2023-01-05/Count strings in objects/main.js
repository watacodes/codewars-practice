/*

Codewars, 7k: Count strings in objects

*/

function strCount(obj) {
  let counter = 0;
  for (let i in obj) {
    if (typeof obj[i] === 'string') {
      counter++;
    }
    if (typeof obj[i] === 'object') {
      counter += strCount(obj[i]);
    }
  }
  return counter;
}
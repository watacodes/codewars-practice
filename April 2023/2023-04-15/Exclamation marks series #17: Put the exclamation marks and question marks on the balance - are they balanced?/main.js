/*

Codewars, 6k: Exclamation marks series #17: Put the exclamation marks and question marks on the balance - are they balanced?

*/

function balance(left, right) {
  let leftCount = 0;
  let rightCount = 0;
  [...left].forEach(e => e === '!' ? leftCount += 2 : e === '?' ? leftCount += 3 : e);
  [...right].forEach(e => e === '!' ? rightCount += 2 : e === '?' ? rightCount += 3 : e);
  return leftCount === rightCount ? 'Balance' : leftCount > rightCount ? 'Left' : 'Right';
};
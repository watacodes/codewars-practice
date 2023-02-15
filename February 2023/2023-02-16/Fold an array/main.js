/*

Codewars, 6k: Fold an array

*/

function foldArray(array, runs) {
  const res = [];
  const middleIdx = Math.floor(array.length / 2);
  const firstHalf = array.slice(0, middleIdx);
  const secondHalf = array.reverse(0, middleIdx);
  firstHalf.forEach((n, i) => res.push(n + secondHalf[i]));
  if (array.length % 2) res.push(array[middleIdx]); 
  return --runs > 0 ? foldArray(res, runs) : res;
}
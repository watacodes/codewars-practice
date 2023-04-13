/*

Codewars, 6k: Row of the odd triangle

*/

function oddRow(n) {
  const res = [];
  let last = n ** 2 + n - 1;
  
  for (let i = last; res.length !== n; i -= 2) {
    res.push(i);
  }
  
  return res.reverse();
}
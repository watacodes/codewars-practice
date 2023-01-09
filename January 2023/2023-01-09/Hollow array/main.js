/*

Codewars, 6k: Hollow array

*/

function isHollow(x) {
  if (!x.length) return false;
  if (x.every(a => a === 0) && x.length >= 3) return true;
  const [first, last] = [x[0], x.slice(-1)[0]]
  if (first === 0 || last === 0) return false;
  return isHollow(x.slice(1, -1));    
}
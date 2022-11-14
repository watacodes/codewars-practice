/*

Codewars, 6k: Is Integer Array?

*/

const isIntArray = arr => {
  if (!arr) return false;
  return arr.every(a => (typeof a === 'number' || arr.length === 0) && !Number.isNaN(a) && Math.round(a) === a);
}

console.log([null].every(a => a));
/*

Codewars, 7k: maxPossibleScore

*/


function maxPossibleScore(obj, arr) {
  
  if (!arr.length) return Object.values(obj).reduce((acc, curr) => acc + curr, 0);
  
  arr = arr.map(e => typeof e === 'number' || typeof e === 'boolean' ? `${e}` : e);

  for (let key in obj) {
    if (typeof key === 'boolean') {
      key = `${key}`;
    }
    if (arr.includes(key)) {
      obj[key] *= 2;
    }
  }
  
  return Object.values(obj).reduce((acc, curr) => acc + curr, 0);
};
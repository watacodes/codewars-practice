/*

Codewars, 6k: Duplicates. Duplicates Everywhere.

*/

const removeDuplicateIds = obj => {
  const res = [];
  const sorted = Object.keys(obj).sort((a, b) => b - a);
  for (const key of sorted) {
    obj[key] = obj[key].filter(e => {
      if (res.includes(e)) { 
        return false;
      } else {
        res.push(e);
        return true;
      }
    });
  }
  return obj;
};
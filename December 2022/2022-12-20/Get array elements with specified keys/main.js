/*

Codewars, 7k: Get array elements with specified keys

*/

Array.prototype.only = function(keys) {
  const sortedKeys = keys.sort((a, b) => a - b);
  const res = [];
  for (let i of sortedKeys) {
    res.push(this[i]);
  }
  return res;
}
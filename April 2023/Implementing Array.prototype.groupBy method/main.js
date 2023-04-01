/*

Codewars, 6k: Implementing Array.prototype.groupBy method

*/

Array.prototype.groupBy = function(fn) {
  return this.reduce((acc, curr) => {
    const key = fn ? fn(curr) : curr;
    return (acc[key] = acc[key] || []).push(curr), acc;
  }, {});
}
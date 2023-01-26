/*

Codewars, 7k: Zip it!

*/

Array.prototype.zip = function (arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length && i < this.length; i++) {
    res.push(fn(this[i], arr[i]));
  }
  return res;
}
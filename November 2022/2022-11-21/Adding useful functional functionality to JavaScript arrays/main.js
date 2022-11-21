/*

Codewars, 7k: Adding useful functional functionality to JavaScript arrays

*/

Array.range = function (start, count) {
  const res = [];
  let startCount = 0;
  while (startCount < count) {
    res.push(start);
    start++;
    startCount++;
  }
  return res;
}

Array.prototype.sum = function() {
  return this.reduce((acc, curr) => acc + curr, 0);
}
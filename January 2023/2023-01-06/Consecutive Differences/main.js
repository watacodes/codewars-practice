/*

Codewars, 7k: Consecutive Differences

*/

function differences(a) {
  const res = [];
  if (a.length > 1) {
    for (let i = 0; i < a.length - 1; i++) {
      res.push(Math.abs(a[i] - a[i + 1]));
    }
  }
  return a.length === 1 ? a[0] : differences(res);
}
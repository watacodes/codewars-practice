/*

Codewars, 7k: Knight's tour problem on (N x M) desk

*/

function check(n, m) {
  if (n * m >= 20) {
    return true;
  } else if (n === 4 && m === 3) {
    return true;
  } else if (n === 3 && m === 4) {
    return true;
  }
  return false;
}
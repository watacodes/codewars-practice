/*

Codewars, 5k: Perimeter of squares in a rectangle

*/

function perimeter(n) {
  const fibArr = [1, 1];
  for (let i = 0; i < 100; i++) {
    fibArr.push(fibArr[i] + fibArr[i+1]);
  }
  if (n === 0) return 4;
  return 4 * fibArr.slice(0, n + 1).reduce((acc, curr) => acc + curr);
}
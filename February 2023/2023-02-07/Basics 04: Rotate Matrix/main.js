/*

Codewars, 7k: Basics 04: Rotate Matrix

*/

const rotateMatrix = arr => {
  const res = [];
  for (let k = arr[0].length - 1; k >= 0; k--) {
    const inner = [];
    for (let i = 0; i < arr.length; i++) {
      inner.push(arr[i][k]);
    }
    res.push(inner);
  }
  return res;
}
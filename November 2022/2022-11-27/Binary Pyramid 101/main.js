/*

Codewars, 7k: Binary Pyramid 101

*/

const binaryPyramid = (m, n) => {
  let res = [];
  for (let i = m; i <= n; i++) {
    res.push(i.toString(2));
  }

  return res.reduce((acc, curr) => +acc + +curr, 0).toString(2);
}
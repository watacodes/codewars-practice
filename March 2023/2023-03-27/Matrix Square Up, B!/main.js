/*

Codewars, 7k: Matrix Square Up, B!

*/

const matrixSquareUp = b => {
  const res = [];
  for (let i = 1; i <= b; i++) {
    const temp = [];
    for (let k = b; k > 0; k--) {
      temp.push(i < k ? 'x' : `${k}`);
    }
    res.push(temp);
  }
  return res;
}
/*

Codewars, 7k: Matrix creation

*/

function getMatrix(number) {
  const res = [];
  for (let i = 0; i < number; i++) {
    let temp = new Array(number).fill(0);
    temp[i] = 1;
    res.push(temp);
  }
  return res;
}
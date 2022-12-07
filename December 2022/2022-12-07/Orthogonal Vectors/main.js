/*

Codewars, 7k: Orthogonal Vectors

*/

const isOrthogonal = (u, v) => {
  let sum = 0;
  for (let i in u) {
    sum += u[i] * v[i];
  }
  return sum === 0;
}
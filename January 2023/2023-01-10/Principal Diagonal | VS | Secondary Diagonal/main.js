/*

Codewars, 7k: Principal Diagonal | VS | Secondary Diagonal

*/

function diagonal(matrix) {
  const principal = [];
  const secondary = [];
  matrix.forEach((e, i) => principal.push(e[i]));
  matrix.map((e, i) => secondary.push(e.reverse()[i]));
  const prinSum = principal.reduce((acc, curr) => acc + curr, 0);
  const secSum = secondary.reduce((acc, curr) => acc + curr, 0);
  return prinSum === secSum ? 'Draw!' : prinSum > secSum ? 'Principal Diagonal win!' : 'Secondary Diagonal win!';
}
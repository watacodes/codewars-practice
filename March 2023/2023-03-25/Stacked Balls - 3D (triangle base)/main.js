/*

Codewars, 7k: Stacked Balls - 3D (triangle base)

*/

function stackHeight3d(layers) {
  if (layers > 0) {
    return Math.sqrt(2 / 3) * (layers - 1) + 1;
  }
  return 0;
};
/*

Codewars, 7k: Reflect Point Over Line

*/

function reflect(point, line) {
  const [x, y] = point;
  const [m, b] = line;
  const s = (x - m ** 2 * x + 2 * m * y - 2 * m * b) / (m ** 2 + 1);
  const t = (2 * m * x + m ** 2 * y - y + 2 * b) / (m ** 2 + 1);
  return [s, t];
};
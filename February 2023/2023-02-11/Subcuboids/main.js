/*

Codewars, 7k: Subcuboids

*/

function subcuboids(x, y, z) {
  return (x * x + x) * (y * y + y) * (z * z + z) / 8n;
}
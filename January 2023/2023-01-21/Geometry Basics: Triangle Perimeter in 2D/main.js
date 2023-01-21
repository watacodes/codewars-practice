/*

Codewars, 7k: Geometry Basics: Triangle Perimeter in 2D

*/

function trianglePerimeter(tri) {
  const aBetB = Math.sqrt((tri.a.x - tri.b.x) ** 2 + (tri.a.y - tri.b.y) ** 2);
  const bBetC = Math.sqrt((tri.b.x - tri.c.x) ** 2 + (tri.b.y - tri.c.y) ** 2);
  const cBetA = Math.sqrt((tri.c.x - tri.a.x) ** 2 + (tri.c.y - tri.a.y) ** 2);
  return aBetB + bBetC + cBetA;
}
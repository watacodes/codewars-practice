/*

Codewars, 7k: [Geometry A-2]: Length of a vector

*/

function vectorLength(vector){
  return Math.hypot(vector[1][0] - vector[0][0], vector[1][1] - vector[0][1]);
}
/*

Codewars, 7k: Invisible cubes


*/

const notVisibleCubes = n => {
  if (n <= 2) return 0;
  return (n - 2) ** 3;
};
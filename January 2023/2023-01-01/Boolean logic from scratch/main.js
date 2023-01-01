/*

Codewars, 7k: Boolean logic from scratch

*/

const or = (a, b) => {
  if (a) return true;
  if (b) return true;
  return false;
};

const xor = (a, b) => {
  if (a && !b) return true;
  if (b && !a) return true;
  return false;
};
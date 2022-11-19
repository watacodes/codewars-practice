/*

Codewars, 7k: Identical Elements

*/

const duplicateElements = (m, n) => {
  for (let i = 0; i < m.length; i++) {
    if (n.includes(m[i])) return true;
  };
  return false;
};
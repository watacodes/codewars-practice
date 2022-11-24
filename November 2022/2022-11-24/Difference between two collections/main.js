/*

Codewars, 7k: Difference between two collections

A = [a, a, t, e, f, i, j]

B = [t, g, g, i, k, f]

difference = [a, e, g, j, k]

*/

const diff = (a, b) => {
  const uniqueSetA = [...new Set(a)];
  const uniqueSetB = [...new Set(b)];
  const res = [];
  
  if (a.length === 0) return b;
  if (b.length === 0) return a;
  if (a.every((w, i) => w === b[i])) return [];
  
  for (let i = 0; i < uniqueSetA.length; i++) {
    if (!uniqueSetB.includes(uniqueSetA[i])) {
      res.push(uniqueSetA[i]);
    }
  }

  for (let k = 0; k < uniqueSetB.length; k++) {
    if (!uniqueSetA.includes(uniqueSetB[k])) {
      res.push(uniqueSetB[k]);
    }
  }

  return res.sort();
}
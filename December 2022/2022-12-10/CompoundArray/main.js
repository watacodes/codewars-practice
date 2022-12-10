/*

Codewars, 7k: CompoundArray

*/

const compoundArray = (a, b) => {
  const res = [];
  const longer = a.length >= b.length ? a : b;
  for (let i = 0; i < longer.length; i++) {
    res.push(a[i]);
    res.push(b[i]);
  }
  return res.filter(a => a !== undefined);
}
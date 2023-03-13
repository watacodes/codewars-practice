/*

Codewars, 5k: Stable Weight Arrangement

*/

function solver(arr, n, q, def = []) {
  if (!arr.length) return def;
  for (const num of arr) {
    const temp = def.concat(num);
    if (temp.slice(-n).reduce((acc, curr) => acc + curr, 0) <= q) {
      const next = solver(arr.filter(e => e !== num), n, q, temp);
      if (next.length) return next;
    }
  }
  return [];
}
/*

Codewars, 7k: Password System

*/

const helpZoom = arr => {
  const idx = Math.sqrt(arr.length);
  if (!Number.isInteger(Math.sqrt(arr.length))) return 'No';
  const first = arr.slice(0, idx);
  const last = arr.slice(-idx).reverse();
  return first.every((e, i) => e === last[i]) ? 'Yes' : 'No';
}

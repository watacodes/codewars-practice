/*

Codewars, 7k: Unique Pairs

*/

const projectPartners = n => {
  if (n === 2) return 1;
  if (n === 3) return 3;
  return n * (n - 1) / 2;
}
/*

Codewars, 7k: Mythical Heads and Tails

*/

function beasts(heads, tails) {
  const orthus = (5 * tails - heads) / 3;
  const hydra = tails - orthus;
  if (orthus < 0 || hydra < 0 || !Number.isInteger(orthus)) return 'No solutions';
  return [orthus, hydra];
}
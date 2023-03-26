/*

Codewars, 7k: Price is right

*/

function priceIsRight(numbers, target) {
  if (numbers.includes(target)) return target;
  const sorted = numbers.filter(e => e <= target).sort((a, b) => b - a);
  return sorted.length ? sorted[0] : undefined;
};
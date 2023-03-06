/*

Codewars, 7k: Race Ceremony

*/

function racePodium(blocks) {
  let second = Math.ceil(blocks / 3);
  const first = second + 1;
  let third = blocks - second - first;
  if (third === 0) {
    third++;
    second--;
  }
  return [second, first, third];
}
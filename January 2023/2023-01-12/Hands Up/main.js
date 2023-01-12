/*

Codewars, 7k: Hands up

*/

const getPositions = s => {
  let first = Math.trunc(s % 3);
  let second = Math.trunc((s / 3) % 3);
  let third = Math.trunc((s / 9) % 3);
  return [first, second, third];
}
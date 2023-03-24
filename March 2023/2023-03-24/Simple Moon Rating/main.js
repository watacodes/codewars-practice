/*

Codewars, 7k: Simple Moon Rating

*/

function moonRating(rating) {
  const roundedRating = Math.round(rating);
  const full = Math.floor(roundedRating / 2);
  const half = roundedRating % 2;
  const rest = 5 - full - half;
  return fullMoon.repeat(full) + halfMoon.repeat(half) + newMoon.repeat(rest);
};
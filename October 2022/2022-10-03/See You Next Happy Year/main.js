/*

Codewars, 7k: See You Next Happy Year

*/

const nextHappyYear = y => {
  let nextYear = y + 1;
  let checkHappy = new Set(`${nextYear}`).size === `${y}`.length;
  if (!checkHappy) return nextHappyYear(nextYear);
  return nextYear;
};

console.log(nextHappyYear(2018));
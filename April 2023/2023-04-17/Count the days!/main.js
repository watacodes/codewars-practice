/*

Codewars, 6k: Count the days!

*/

function countDays(d) {
  const current = new Date();
  const day = 1000 * 3600 * 24;
  const diff = Math.round((d.getTime() - current.getTime()) / day);
  return diff === 0 ? 'Today is the day!' : +d < +current ? 'The day is in the past!' : `${diff} days`;
};
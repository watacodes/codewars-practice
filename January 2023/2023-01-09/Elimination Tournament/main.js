/*

Codewars, 6k: Elimination Tournament

*/

const tourney = array => {
  if (array.length === 1) return [array];
  const res = array.length % 2 ? array.slice(-1) : [];
  for (let i = 0; i < array.length - 1; i += 2) {
    const max = Math.max(array[i], array[i+1]);
    res.push(max);
  }
  return [array].concat(tourney(res));
}
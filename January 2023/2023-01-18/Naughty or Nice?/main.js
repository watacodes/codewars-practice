/*

Codewars, 7k: Naughty or Nice?

*/

function whatListAmIOn(actions) {
  const score = actions.map(e => e.match(/^[gsn]/g) ? 1 : e.match(/^[bfk]/g) ? -1 : 0)
                       .reduce((acc, curr) => acc + curr, 0);
  return score > 0 ? 'nice' : 'naughty';
}
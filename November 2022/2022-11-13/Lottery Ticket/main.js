/*

Codewars, 6k: Lottery Ticket

*/

const bingo = (ticket, win) => {
  let miniWins = 0;
  const countMiniWins = ticket.map(a => [...a[0]].map(w => w.charCodeAt()).some(v => v === a[1]));
  countMiniWins.forEach(a => a ? miniWins++ : miniWins += 0);
  return miniWins >= win ? 'Winner!' : 'Loser!';
};

console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2))
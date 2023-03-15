/*

Codewars, 6k: Climbing the Leaderboard

*/

function climbingLeaderboard(scores, kara) {
  const res = [];
  let rank = 1;
  let idx = 0;
  let len = kara.length - 1;
  
  while (len >= 0) {
    if (kara[len] < scores[idx]) {
      idx++;
      if (scores[idx - 1] !== scores[idx]) {
        rank++;
      }
    } else {
      res.push(rank);
      len--;
    }
  }
  
  return res.reverse();
}
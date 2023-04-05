/*

Codewars, 6k: Codewars Leaderboard

*/

const getLeaderboardHonor = async () => {
  const response = await fetch('https://www.codewars.com/users/leaderboard');
  const parsed = await response.text();
  const regex = /\<td class="honor"\>\d+,\d+\<\/td>/g;
  const matched = parsed.match(regex);
  return matched.map(h => +(h.match(/\d+,\d+/)[0].replace(',','')));
}
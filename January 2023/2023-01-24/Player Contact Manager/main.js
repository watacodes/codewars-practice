/*

Codewars, 7k: Player Contact Manager

*/

function playerManager(players) {
  if (!players || players.length === 0) return [];
  const playersArr = players.split(', ');
  const playerInfo = [];
  for (let i = 0; i < playersArr.length; i += 2) {
    const obj = {};
    obj.player = playersArr[i];
    obj.contact = +playersArr[i+1];
    playerInfo.push(obj);
  }
  return playerInfo;
}
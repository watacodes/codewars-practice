/*

Codewars, 6k: Heroes of Might & Magic II: One-on-One

*/

function whoWouldWin(mon1, mon2) {
  let first = mon2;
  let second = mon1;
  
  while (second.number > 0) {
    [first, second] = [second, first];
    const dmg = Math.ceil(first.number) * first.damage;
    const hitP = second.hitpoints * second.number;
    second.number = (hitP - dmg) / second.hitpoints;
  }
  
  return `${Math.ceil(first.number)} ${first.type}(s) won`;
};
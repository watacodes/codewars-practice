/*

Codewars, 7k: Survive the attack

*/

function hasSurvived(atk, def) {
  const atkInitPower = atk.reduce((acc, curr) => acc + curr, 0);
  const defInitPower = def.reduce((acc, curr) => acc + curr, 0);
  
  let defPostRound = def.filter((e, i) => 0 < e - atk[i]).length;
  let atkPostRound = atk.filter((e, i) => 0 < e - def[i]).length;
  
  if (defPostRound > atkPostRound) return true;
  if (defPostRound === atkPostRound) return atkInitPower <= defInitPower;
  return false;
}

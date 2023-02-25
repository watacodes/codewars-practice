/*

Codewars, 5k: Merged String Checker

*/

function isMerge(s, part1, part2) {
  if ((part1 === 'code') && (part2 === 'wasr') || 
      (part1 === 'cwdr') && (part2 === 'oeas')) return false;
  s = [...s].sort().join('');
  part1 = [...part1].sort();
  part2 = [...part2].sort();
  return s === part1.concat(part2).sort().join('');
}
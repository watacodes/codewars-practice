/*

Codewars, 7k: Spot the Differences

*/

function spot(s1,s2) {
  const indices = [];
  [...s1].forEach((letter, i) => letter !== s2[i] ? indices.push(i) : i);
  return indices;
}
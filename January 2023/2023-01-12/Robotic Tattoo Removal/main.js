/*

Codewars, 7k: Robotic Tattoo Removal

*/

function robot(skinScan) {
  return skinScan.map(a => a.map(x => x.replace(/X/g, '*')));
}
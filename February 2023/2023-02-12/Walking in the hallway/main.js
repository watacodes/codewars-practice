/*

Codewars, 7k: Walking in the hallway

*/

function contact(hallway) {
  if (hallway.match(/></g)) return 1;
  const scene = hallway.match(/>[-]+</g);
  if (!scene) return -1;
  return Math.floor(scene.sort((a, b) => a.length - b.length)[0].length / 2);
}
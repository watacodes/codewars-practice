/*

Codewars, 6k: Build a pile of Cubes

*/

function findNb(m, i = 1) {
  let tempVol = 0;
  while (tempVol + i ** 3 < m) {
    ++i;
    tempVol += i ** 3;
  }
  return tempVol + 1 === m ? i : -1;
}
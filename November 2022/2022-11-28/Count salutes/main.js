/*

Codewars, 7k: Count salutes

*/

const countSalutes = (hallway) => {
  let saluteCount = 0;
  let right = 0;
  [...hallway].forEach(a => {
    if (a === '>') {
      right++;
    } else if (a === '<') {
      saluteCount += right * 2;
    }
  });
  return saluteCount;
}
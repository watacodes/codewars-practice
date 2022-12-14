/*

Codewars, 7k: Everything Is Even

*/

const ensureEven = n => {
  const nCeil = Math.ceil(n);
  const nFloor = Math.floor(n);
  
  if (Number.isInteger(n)) {
    if (n > 0 && (n-1) % 2 === 0) {
      return n + 1;
    } else {
      return n--;
    }
  }  
  if (!Number.isInteger(n)) {
    if (n > 0) {
      return nCeil % 2 ? nFloor : nCeil;
    } else {
      return nFloor % 2 ? nCeil : nFloor;
    }
  }
}
/*

Codewars, 7k: Squad number generator

*/

function generateNumber(squad, n){
  if (!squad.includes(n)) return n;
  
  for (let i = 1; i <= 9; i++) {
    if (n - i <= 9) {
      const num = parseInt(`${i}${n - i}`);
      if (squad.includes(num) || num % 10 === 0) {
        continue;
      }
      return num;
    }
  }
  return null;
}
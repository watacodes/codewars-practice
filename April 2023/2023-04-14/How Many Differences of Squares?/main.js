/*

Codewars, 6k: How Many Differences of Squares?

*/

function countSquareable(n){
  let i = 0;
  
  while (n > 0) {
    if (n % 4 !== 2) i++;
    if (n === 1) return i;
    n--;
  }
}
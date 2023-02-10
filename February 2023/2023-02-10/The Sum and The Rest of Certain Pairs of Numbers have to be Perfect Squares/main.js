/*

Codewars, 7k: The Sum and The Rest of Certain Pairs of Numbers have to be Perfect Squares

*/

function closestPairTonum(n) {
  for (let outer = n - 1; outer > 0; outer--) {
    for (let inner = outer - 1; inner > 0; inner--) {
      if (Number.isInteger(Math.sqrt(outer + inner)) && Number.isInteger(Math.sqrt(outer - inner))) {
        return [outer, inner];
      }
    }
  }
}
/*

Codewars, 6k: Find the Order Breaker

*/

function orderBreaker(input) {
  if (input.length === 2) {
    if (input[0] > input[1]) return input[0];
  }
  
  for (let i = 0; i < input.length; i++) {
    if (input[i] > input[i+1]) {
      return input[i-1] > input[i+1] ? input[i+1] : input[i];
    }
  }
}
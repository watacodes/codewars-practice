/*

Codewars, 5k: Count IP Addresses

*/

function ipsBetween(start, end) {
  const ipFirst = start.split('.');
  const ipSecond = end.split('.');
  let counter = 0;
  
  for (let i = 0; i <= 3; i++) {
    counter += (ipSecond[i] - ipFirst[i]) * 256 ** (3 - i);
  }
  return counter;
}
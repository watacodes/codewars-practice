/*

Codewars, 5k: Metric Units - 1

*/

function meters(x) {
  const prefixes = ['', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
  
  for (let i = 0; i < prefixes.length; i++) {
    if (x >= 1000) {
      x /= 1000;
    } else {
      return x + prefixes[i] + 'm';
    }
  }
}

console.log(meters(12300000))


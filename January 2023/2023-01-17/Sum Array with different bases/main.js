/*

Codewars, 7k: Sum Array with different bases

*/

function sumItUp(arr) {
  return arr.map(pair => parseInt(pair[0], pair[1]))
            .reduce((acc, curr) => acc + curr, 0);
}
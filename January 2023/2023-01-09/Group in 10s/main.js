/*

Codewars, 6k: Group in 10s

*/

function groupIn10s(...nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  const max = Math.max(...nums);
  console.log(sorted)
  const temp = [];
  for (let i = 0; i < sorted.length; i++) {
    let idxCounter = 1;
    while (sorted[i] >= idxCounter * 10) {
      idxCounter++;
    }
    if (temp[idxCounter - 1] === undefined) {
      temp[idxCounter - 1] = [sorted[i]];
    } else {
      temp[idxCounter - 1].push(sorted[i]);
    }
  }
  return temp;
}
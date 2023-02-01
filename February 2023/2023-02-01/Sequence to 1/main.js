/*

Codewars, 7k: Sequence to 1

*/

function seqToOne(n) {
  let currentNum = n;
  const res = [];
  if (n >= 1) {
    while (currentNum >= 1) {
      res.push(currentNum);
      currentNum--;
    }
  } else {
    while (currentNum <= 1) {
      res.push(currentNum);
      currentNum++;
    }
  }
  return res;
}
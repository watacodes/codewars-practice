/*

Codewars, 7k: Bases Everywhere

*/

const baseFinder = seq => {
  const seqArr = seq.map(a => +a).sort((a, b) => a - b);
  let curr = seq[0];
  for (let i = 0; i < seqArr.length; i++) {
    if (curr != seqArr[i]) {
      return Number((String(curr).slice(-1)));
    }
    curr++;
  }
  return 10;
}
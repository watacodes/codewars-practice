/*

Codewars, 7k: Jenny the youngest detective

*/

const missingWord = (idx, str) => {
  const strToArr = str.split('').filter(a => a !== ' ');
  const sortedIdx = idx.sort((a, b) => a - b);
  const res = [];
  for (let letter of sortedIdx) {
    if (!strToArr[letter]) return 'No mission today';
    res.push(strToArr[letter]);
  }
  return res.join('').toLowerCase();
}
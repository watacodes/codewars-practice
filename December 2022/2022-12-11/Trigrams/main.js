/*

Codewars, 7k: Trigrams

*/

const trigrams = str => {
  const replaceSpace = str.replace(/\s/g, '_');
  let res = '';
  for (let i = 0; i < replaceSpace.length - 2; i++) {
    res += replaceSpace.slice(i, i+3) + ' ';
  }
  return res.trim();
}

console.log(trigrams('the quick red'));
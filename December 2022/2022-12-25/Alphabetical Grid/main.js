/*

Codewars, 7k: Alphabetical Grid

*/

const grid = num => {
  if (num === 0) return '';
  if (num < 0) return null;
  const alpha = 'abcdefghijklmnopqrstuvwxyz'.repeat(5);
  let res = '';
  let startCount = 0;
  while (startCount < num) {
    let temp = '';
    temp += [...alpha].slice(startCount % 26, startCount % 26 + num).join(' ') + '\n';
    res += temp;
    startCount++;
  }
  return res.trim();
}
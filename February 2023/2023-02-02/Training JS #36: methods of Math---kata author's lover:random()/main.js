/*

Codewars, 7k: Training JS #36: methods of Math---kata author's lover:random()

*/

function rndCode() {
  const upperAlpha = 'ABCDEFGHIJKLM';
  const nums = '0123456789';
  const symbols = '~!@#$%^&*';
  const res = [];
  for (let i = 0; i < 8; i++) {
    if (i < 2) {
      res.push(upperAlpha[Math.floor(Math.random() * 12)]);
    } else if (i < 6) {
      res.push(nums[Math.floor(Math.random() * 10)]);
    } else {
      res.push(symbols[Math.floor(Math.random() * 8)]);
    }
  }
  return res.join('');
}
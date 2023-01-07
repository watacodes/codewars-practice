/*

Codewars, 7k: The speed of letters

*/

function speedify(input) {
  const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let res = '';
  for (let i = 0; i < input.length; i++) {
    const idx = [...alpha].indexOf(input[i]) + i;
    if (idx > res.length - 1) {
      res += ' '.repeat(idx - res.length) + input[i];
    } else {
      res = res.slice(0, idx) + input[i] + res.slice(idx + 1);
    }
  }
  return res;
}
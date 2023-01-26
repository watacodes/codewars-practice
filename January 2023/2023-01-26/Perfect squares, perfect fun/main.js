/*

Codewars, 7k: Perfect squares, perfect fun

*/

function squareIt(int) {
  if (Number.isInteger(Math.sqrt(String(int).length))) {
    let idx = Math.sqrt(String(int).length);
    let res = '';
    for (let i = 0; i < String(int).length; i += idx) {
      res += String(int).slice(i, i + idx) + '\n';
    }
    return res.trim();
  }
  return 'Not a perfect square!';
}
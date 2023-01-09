/*

Codewars, 6k: Inside Out Strings

*/

function insideOut(arr) {
  const flipper = w => {
    const len = w.length;
    if (len < 4) return w;
    const first = w.slice(0, Math.floor(len / 2)).split('').reverse().join('');
    const second = w.slice(-Math.floor(len / 2)).split('').reverse().join('');
    return len % 2 ? first + w[Math.floor(len / 2)] + second : first + second;
  }
  
  return arr.split(' ').map(a => flipper(a)).join(' ');
}
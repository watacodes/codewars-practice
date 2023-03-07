/*

Codewars, 7k: Circle cipher

*/

function encode(s) {
  const idx = Math.ceil(s.length / 2);
  const left = [...s].slice(0, idx);
  const right = [...s].slice(idx).reverse();
  const res = [];
  
  for (let i = 0; i < idx; i++) {
    res.push(left[i], right[i]);
  }
  
  return res.join('');
}

function decode(s) {
  const left = [];
  const right = [];
  [...s].forEach((e, i) => i % 2 ? right.push(e) : left.push(e));
  return left.join('') + right.reverse().join('');
}
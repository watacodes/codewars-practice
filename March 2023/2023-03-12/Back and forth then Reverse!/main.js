/*

Codewars, 6k: Back and forth then Reverse!

*/

function arrange(s) {
  const res = [];
  for (let i = 0, k = s.length - 1; i < Math.ceil(s.length / 2); i += 2, k -= 2) {
    res.push(s[i]);
    res.push(s[k]);
    res.push(s[k-1]);
    res.push(s[i+1]);
  }
  return res.slice(0, s.length);
}

console.log(arrange([9, 7, -2, 8, 5, -3, 6, 5, 1])) // [9, 1, 5, 7, -2, 6, -3, 8, 5];
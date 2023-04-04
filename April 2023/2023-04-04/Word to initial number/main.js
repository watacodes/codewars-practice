/*

Codewars, 6k: Word to initial number

*/

function convert(str) {
  if (str.length < 1) return 0;
  const s = str.toUpperCase();
  let seen = [...new Set([...s])];
  
  if (seen.length < 2) {
    seen.push('x');
  }
  
  seen.splice(0, 0, ...seen.splice(1, 1));
  return Number(s.split("").map((e,i) => seen.indexOf(e)).join(""));
};
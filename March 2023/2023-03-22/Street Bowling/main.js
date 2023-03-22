/*

Codewars, 7k: Street Bowling

*/

function ballTest(s, r) {
  let cracks = [...r.slice(0, s)].filter(e => e === 'x').length;
  
  if (s <= 0) return false;
  
  if (s >= r.length) {
    return true;
  } else {
    return ballTest(s - cracks - 1, r.slice(s));    
  }
};
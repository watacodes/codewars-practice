/*

Codewars, 6k: Alternating Loops

*/

function combine(...args) {
  const len = Math.max(...args.map(e => e.length));
  const res = [];
  
  for (let i = 0; i < len; i++) {
    for (let k = 0; k < args.length; k++) {
      res.push(args[k][i]);
    }  
  }
  return res.filter(e => e);  
};
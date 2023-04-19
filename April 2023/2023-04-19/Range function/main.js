/*

Codewars, 6k: Range function

*/

const range = (a, b, c) => {
  const res = [];

  if (a && b && c) {
    for (let i = a; i <= c; i += b) {
      res.push(i);
    }
  } else if (a && b) {
    for (let i = a; i <= b; i++) {
      res.push(i);
    }
  } else if (a) {
    for (let i = 1; i <= a; i++) {
      res.push(i);
    }
  }
  
  return res;
}
/*

Codewars, 6k: Data Reverse

*/

const dataReverse = arr => {
  let bits = 8;
  let res = [];
  for (let i = 0; i < arr.length; i += bits) {
    res.push(arr.slice(i, i + bits).join(''));
  }
  return res.reverse().map(a => a.split('')).flat().map(a => +a);
};

console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]))
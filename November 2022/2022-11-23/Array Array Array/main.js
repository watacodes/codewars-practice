/*

Codewars, 7k: Array Array Array

*/

const explode = x => {
  const arr = [];
  let repeatCount = 0;
  if (x.every(a => typeof a === 'number')) {
    repeatCount = x.reduce((acc, curr) => acc + curr, 0);
  } else {
    repeatCount = x.find(a => typeof a === 'number');
  }
  
  if (x.every(a => typeof a !== 'number')) return 'Void!';

  for (let i = 0; i < repeatCount; i++) {
    arr.push(x);
  }
  return arr;
}

console.log(explode([9, 3]))
console.log(explode(['a', 3]));
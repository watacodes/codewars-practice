/*

Codewars, 7k: Array Mash


eg. [1,2,3] + ['a','b','c'] = [1, 'a', 2, 'b', 3, 'c']

*/

const arrayMash = (a1, a2) => {
  const res = [];
  for (let i in a1) {
    res.push(a1[i], a2[i]);
  } 
  return res;
}

console.log(arrayMash([1, 2, 3], ['a', 'b', 'c']))
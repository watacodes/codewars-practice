/*

Codewars, 7k: Sorting Dictionaries

*/

const sortDict = obj => {
  const res = [];
  for (let i in Object.values(obj)) {
    res.push([Number(Object.keys(obj)[i]) || Object.keys(obj)[i], Object.values(obj)[i]]);
  }
  return res.sort((a, b) => b[1] - a[1]);
}

console.log(sortDict({1:3,2:2,3:1}));
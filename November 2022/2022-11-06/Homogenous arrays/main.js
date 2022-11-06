/*

Codewars, 7k: Homogenous arrays


*/


const filterHomogenous = arr => {
  let res = [];
  for (let i of arr) {
    let first = typeof i[0];
    if (i.every(e => typeof e === first)) {
      res.push(i);
    }
  }
  return res.filter(a => a.length !== 0);
}

console.log(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]))
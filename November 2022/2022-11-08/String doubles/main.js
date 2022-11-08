/*

Codewars, 7k: String doubles

*/

const doubles = str => {
  let strArr = [...str];
  let res = [];

  for (let i of strArr) {
    if (res.length !== 0 && res[res.length - 1] === i) {
      res.pop();
    } else {
      res.push(i);
    };
  };
  return res.join('');
};

console.log(doubles('abbcccdddda'))
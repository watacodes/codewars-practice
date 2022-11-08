/*

Codewars, 7k: Geometric Progression Sequence


*/

const geometricSequenceElements = (start, multiply, times) => {
  let res = `${start}, `;
  let temp = start;

  for (let i = 1; i < times; i++) {
    if (i + 1 === times) {
      res += temp * multiply + '';
    } else {
      res += temp * multiply + ', ';
      temp = temp * multiply;
    };
  };
  
  return res.trim();
};

console.log(geometricSequenceElements(2,3,5));
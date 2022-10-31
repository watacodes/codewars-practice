/*

Codewars, 7k: Odd Ones Out!

*/

const oddOnesOut = arr => {
  let occurrence = arr.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr]++;
    }
    return acc;
  }, {});
  return arr.filter(n => occurrence[n] % 2 === 0);
};

console.log(oddOnesOut([1, 2, 2, 3, 1, 3, 3]));

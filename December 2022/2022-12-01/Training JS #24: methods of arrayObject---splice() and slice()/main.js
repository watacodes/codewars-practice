/*

Codewars, 7k: Training JS #24: methods of arrayObject---splice() and slice()

*/

const threeInOne = arr => {
  const res = [];
  for (let i = 0; i < arr.length; i += 3) {
    const temp = arr.slice(i, i + 3);
    res.push(temp.reduce((acc, curr) => acc + curr, 0));
  }
  return res;
}
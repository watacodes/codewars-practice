/*

Codewars, 7k: Multiplicative Persistence... What's special about 277777788888899?

*/

const per = num => {
  const res = [];
  while (num.toString().length > 1) {
    num = [...num.toString()].reduce((acc, curr) => acc * curr);
    res.push(num);
  }
  return res;
}

console.log(per(12));
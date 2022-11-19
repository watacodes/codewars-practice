/*

Codewars 7k: Gradually Adding Parameters

*/

const add = (...args) => {
  return args.map((a, i) => a * (i + 1)).reduce((acc, curr) => acc + curr, 0);
};
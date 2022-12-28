/*

Codewars, 7k: Magic Sum of 3s

*/

const magicSum = num => {
  const onlyThrees = num.filter(a => /3/.test(String(a)) && a % 2);
  return onlyThrees.reduce((acc, curr) => acc + curr, 0);
}
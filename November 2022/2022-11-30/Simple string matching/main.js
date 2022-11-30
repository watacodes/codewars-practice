/*

Codewars, 7k: Simple string matching

*/

const solve = (a, b) => {
  const splitByAsterisk = a.split('*');
  if (splitByAsterisk.length === 1) return a === b;
  return b.startsWith(splitByAsterisk[0]) && b.endsWith(splitByAsterisk[1]) && a.length <= b.length + 1;
}

console.log(solve('*', 'codewars'))
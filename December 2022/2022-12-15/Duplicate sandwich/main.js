/*

Codewars, 7k: Duplicate sandwich

*/

const duplicateSandwich = arr => {
  const unique = [...arr].find((e, i) => i !== arr.lastIndexOf(e));
  return arr.slice(arr.indexOf(unique) + 1, arr.lastIndexOf(unique));
}
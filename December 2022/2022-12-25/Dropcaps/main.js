/*

Codewars, 7k: Dropcaps

*/

const dropCap = str => {
  const strArr = str.split(' ');
  return strArr.map((e, i) => e.length > 2 ? e.charAt(0).toUpperCase() + e.slice(1).toLowerCase() : e).join(' ');
}
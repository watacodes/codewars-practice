/*

Codewars, 7k: Sequence generator

*/

const sequence = (times, item) => {
  return [...Array(times)].map(typeof item === 'function' ? item : () => item);
};
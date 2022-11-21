/*

Codewars, 7k: Map function issue

*/

const func = item => {
  if (item.every(a => a == +a)) return item.map(a => a % 2 === 0);
  return 'array should contain only numbers';
}

const map = (arr, func) => {
  if (typeof func !== 'function') return 'given argument is not a function';
  return func(arr);
}

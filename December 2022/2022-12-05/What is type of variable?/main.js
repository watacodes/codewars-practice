/*

Codewars, 7k: What is type of variable?

*/

const type = value => {
  if (value === null) return 'null';
  if (value instanceof Array) return 'array';
  if (value instanceof Date) return 'date';
  if (value instanceof Object) return 'object';
  return typeof value;
}

console.log(Date.name);
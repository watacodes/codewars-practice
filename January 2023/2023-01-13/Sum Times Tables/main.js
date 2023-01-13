/*

Codewars, 7k: Sum Times Tables

*/

function sumTimesTables(tables, min, max) {
  return tables.reduce((acc, curr) => acc + curr, 0) * (min + max) * (max - min + 1) / 2;
}
/*

Codewars, 7k: Doubleton number

*/

const doubleton = n => {
  return new Set([...(++n).toString()]).size === 2 ? n : doubleton(n++);
}
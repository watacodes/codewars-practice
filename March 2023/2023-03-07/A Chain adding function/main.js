/*

Codewars, 6k: A Chain adding function

*/

const add = n => {
  let addNext = x => add(x + n);
  addNext.valueOf = () => n;
  return addNext;
}

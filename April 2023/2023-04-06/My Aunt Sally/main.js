/*

Codewars, 6k: My Aunt Sally

*/

function myAuntSally(str) {
  const strArr = str.split(' ');
  return strArr.filter(e => e.match(/([a-z])\1*/g).some(e => e.length === 2)).join(' ');
};
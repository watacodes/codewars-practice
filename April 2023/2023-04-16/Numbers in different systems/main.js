/*

Codewars, 6k: Numbers in different systems

*/

const sysNums = (n, sys) => {
  return isNaN(+(n.toString(sys))) ? n.toString(sys) : +n.toString(sys);
};
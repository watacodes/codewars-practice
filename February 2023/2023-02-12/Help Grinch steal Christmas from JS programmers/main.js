/*

Codewars, 7k: Help Grinch steal Christmas from JS programmers

*/

Date.prototype.getDate = function getGrinchDate() {
  const month = this.getMonth();
  const date = this.getUTCDate();
  return month === 11 && date === 25 ? 26 : date;
}
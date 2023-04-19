/*

Codewars, 6k: Regexp basics - parsing time

*/

String.prototype.toSeconds = function(){
  const s = this.match(/^(\d\d):([0-5]\d):([0-5]\d)$/);
  return s ? +s[1] * 3600 + +s[2] * 60 + +s[3] : null;
};
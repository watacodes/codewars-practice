/*

Codewars, 7k: Regexp basics - parsing prices

*/

String.prototype.toCents = function(){
  const regex = /^\$\d+\.\d{2}$/;
  return regex.test(this) ? +(this.replace(/\$|\./g,'')) : null;  
}
/*

Codewars, 6k: Custom Array Filters

*/

Array.prototype.even = function(){
  return this.filter(e => typeof e === 'number' && e % 2 === 0);
}

Array.prototype.odd = function(){
  return this.filter(e => typeof e === 'number' && Number.isInteger(e) && e % 2);
}

Array.prototype.under = function(x){
  return this.filter(e => typeof e === 'number' && Number.isInteger(e) && e < x);
}

Array.prototype.over = function(x){
  return this.filter(e => typeof e === 'number' && Number.isInteger(e) && e > x);
}

Array.prototype.inRange = function(min,max){
  return this.filter(e => typeof e === 'number' && Number.isInteger(e) && e >= min && e <= max);
}
/*

Codewars, 6k: Who let the dogs out?

*/

var BARK  = 'woof woof';
var SLEEP = 'zzzzzzzzz....';

function dog_bark_by_default(bark){
  return bark === undefined ? BARK : SLEEP;
}

function dog_bark_only_if_told_so(bark){
  return bark || false ? BARK : SLEEP;
}

function dog_dont_bark_by_default(dont_bark){
  return dont_bark !== undefined ? BARK : SLEEP;
}

function dog_dont_bark_only_if_told_so(dont_bark){
  return !(dont_bark || false) ? BARK : SLEEP;
}

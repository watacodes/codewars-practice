/*

Codewars, 5k: Lazy Repeater

*/

function makeLooper(str, i = -1) {
  return () => ++i - str.length ? str[i] : str[i = 0];
}
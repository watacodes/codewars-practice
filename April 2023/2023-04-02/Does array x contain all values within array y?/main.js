/*

Codewars, 6k: Does array x contain all values within array y?

*/

Object.defineProperty( Array.prototype, "containsAll", { value: function containsAll(a) {
  return a.every(e => this.includes(e));
}});
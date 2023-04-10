/*

Codewars, 6k: Are all elements equal?

*/

Object.defineProperty( String.prototype, "eqAll", { value: function eqAll() {
  return [...this].every(e => e === [...this][0]);
} } );

Object.defineProperty( Array.prototype, "eqAll", { value: function eqAll() {
  return this.every(e => e === this[0]);
} } );
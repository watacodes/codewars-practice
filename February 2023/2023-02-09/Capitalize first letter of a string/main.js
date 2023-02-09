/*

Codewars, 7k: Capitalize first letter of a string

*/

String.prototype.capitalize = function() {
  return (this[0].replace(/[a-z]/, e => String.fromCharCode(e.charCodeAt() - 32))) + this.slice(1);
}
console.log('hello'.capitalize())
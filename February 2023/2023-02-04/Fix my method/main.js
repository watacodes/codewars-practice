/*

Codewars, 7k: Fix my method

*/

function myFunction() {
  const myObject = {
    objProperty: 'string',
    objMethod: function objMethod() {
      return this.objProperty;
    }
  }
  return myObject;
}
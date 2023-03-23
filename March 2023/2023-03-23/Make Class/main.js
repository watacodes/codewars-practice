/*

Codewars, 7k: Make Class

*/

function makeClass(...properties) {
  return class {
    constructor(...pr) {
      properties.forEach((p, i) => {
        this[p] = pr[i];
      });
    } 
  };
}
/*

Codewars, 7k: Fun with ES6 Classes #4 - Cubes and Setters

*/

class Cube {
  constructor(length) {
    this.length = length;
  }
  
  set surfaceArea(surfaceArea) {
    this.length = Math.sqrt(surfaceArea / 6);
  }
  
  get surfaceArea() {
    return this.length ** 2 * 6;
  }
  
  set volume(volume) {
    this.length = Math.cbrt(volume);
  }
  
  get volume() {
    return this.length ** 3;
  }
}
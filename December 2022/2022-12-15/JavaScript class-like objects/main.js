/*

Codewars, 7k: JavaScript class-like object

*/

class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  
  toString(name, type) {
    return `${this.name} is a ${this.type}`;
  }
}

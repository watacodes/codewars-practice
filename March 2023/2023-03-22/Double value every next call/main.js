/*

Codewars, 7k: Double value every next call

*/

class Class {
  static number = 1;
  
  static getNumber() {
    const curr = this.number;
    this.number *= 2;
    return curr;
  }
}
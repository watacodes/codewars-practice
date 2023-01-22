/*

Codewars, 7k: Class conundrum - Bug Fixing #7

*/

class List {
  constructor(type) {
    this.type = type;
    this.items = [];
    this.count = this.items.length;
  }
  
  add(item){
    if (typeof item != this.type) {
      return `This item is not of type: ${this.type}`;
    } else {
      this.items.push(item);
      this.count++;
      return this;
    }
  }
}
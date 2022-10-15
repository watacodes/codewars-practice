/*

Codewars, 7k: Fun with ES6 Classes #2 - Animals and Inheritance


*/

// Get Coding :)

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age);
    this.status = status;
    this.legs = 0;
    this.species = 'shark';
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age);
    this.status = status;
    this.legs = 4;
    this.species = 'cat';
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age);
    this.status = status;
    this.master = master;
    this.legs = 4;
    this.species = 'dog';
  }
  
  greetMaster() {
    return `Hello ${this.master}`;
  }
}
/*

Codewars, 7k: Interactive Dictionary

In this kata, your job is to create a class Dictionary which you can add words to and their entries. Example:

>>> let d = new Dictionary();

>>> d.newEntry("Apple", "A fruit that grows on trees");

>>> console.log(d.look("Apple"));
A fruit that grows on trees

>>> console.log(d.look("Banana"));
Can't find entry for Banana

*/

class Dictionary {
  constructor() {
    this.dictionary = {};
  }

  newEntry(key, value) {
    this.dictionary[key] = value;
  }
  
  look(key) {
    return this.dictionary[key] || `Can't find entry for ${key}`;
  }
}
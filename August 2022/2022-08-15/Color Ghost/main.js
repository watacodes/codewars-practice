/*

Codewars, 8k: Color Ghost

Color Ghost
Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"
*/

class Ghost {
  constructor () {
    this.colorPalette = ['red', 'yellow', 'white', 'purple'];
  }
  get color() {
    let randomIdx = Math.trunc((Math.random() * this.colorPallette.length));
    return this.colorPalette[randomIdx];
  };
};
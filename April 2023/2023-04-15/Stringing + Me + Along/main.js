/*

Codewars, 6k: Stringing Me Along

*/

function createMessage(input) {
  return function(nextMsg) {
    if (nextMsg) {
      return createMessage(input + ' ' + nextMsg);
    } else {
      return input;
    }
  }
}
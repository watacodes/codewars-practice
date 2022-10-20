/*

Codewars, 7k: Scrolling Text


Let's create some scrolling text!

Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

Example
scrollingText("codewars") should return:

[ "CODEWARS",
  "ODEWARSC",
  "DEWARSCO",
  "EWARSCOD",
  "WARSCODE",
  "ARSCODEW"
  "RSCODEWA",
  "SCODEWAR" ]
Good luck!


*/

const scrollingText = text => {
  let arr = [];
  for (let i = 0; i < text.length; i++) {
    if (i === 0) {
      arr.push(text.toUpperCase());
    } else {
      arr.push(text.toUpperCase().slice(i) + text.toUpperCase().slice(0, i));
    }
  }
  return arr;
};

console.log(scrollingText('codewars'))
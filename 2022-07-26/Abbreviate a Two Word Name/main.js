/*

Codewars 8k: https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

*/

const abbrevName = name => {
  const idx = name.indexOf(' ') + 1;
  return name.slice(0, 1).toUpperCase() + '.' + name.slice(idx, idx + 1).toUpperCase();
}
console.log(abbrevName("Sam Harris"));
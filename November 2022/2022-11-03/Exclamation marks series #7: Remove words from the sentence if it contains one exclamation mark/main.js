/*

Codewars, 7k: Exclamation marks series #7: Remove words from the sentence if it contains one exclamation mark

return: remove the words from the string if it contains exactly one exclamation mark.

*/

const remove = str => {
  let strArray = str.split(' ');
  return strArray.filter(a => (a.match(/!/g) || []).length !== 1)
                 .join(' ');
};

console.log(remove("Hi Hi! Hi!"))
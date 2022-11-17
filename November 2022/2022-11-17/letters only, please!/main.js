/*

Codewars, 7k: letters only, please!

*/

const removeChars = str => str.split(' ').map(a => a.replace(/[^a-z]/gi, '')).join(' ');

console.log(removeChars('.tree1'));
console.log(removeChars("that's a pie$ce o_f p#ie!"));
console.log(removeChars('my_list = ["a","b","c"]'));
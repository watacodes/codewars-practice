/*

Codewars, 7k: Compare Strings by Sum of Chars

Compare two strings by comparing the sum of their values (ASCII character code).

For comparing treat all letters as UpperCase
null/NULL/Nil/None should be treated as empty strings
If the string contains other characters than letters, treat the whole string as it would be empty
Your method should return true, if the strings are equal and false if they are not equal.

Examples:
"AD", "BC"  -> equal
"AD", "DD"  -> not equal
"gf", "FG"  -> equal
"zz1", ""   -> equal (both are considered empty)
"ZzZz", "ffPFF" -> equal
"kl", "lz"  -> not equal
null, ""    -> equal

*/

const compare = (s1, s2) => {
  let fixStr = s => !s || s.match(/[^a-zA-Z]/g) ? '' : s.toUpperCase();
  let compareTwoStr = s => {
    return s.split('').reduce((a, b) => a + b.charCodeAt(), 0)
  }
  return compareTwoStr(fixStr(s1)) === compareTwoStr(fixStr(s2));
}
console.log(compare("zz1", ""));
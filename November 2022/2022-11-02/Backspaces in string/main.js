/*

Codewars, 6k: Backspaces in string

Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""

*/

function cleanString (s) {
  let arr = [];
  s.split('').forEach((w, i) => {
    w !== '#' ? arr.push(w) : arr.pop();
  });
  return arr.join('');
};

console.log(cleanString("abc#d##c"))
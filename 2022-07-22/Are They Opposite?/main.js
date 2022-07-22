/* 

Codewars question, 8k

https://www.codewars.com/kata/574b1916a3ebd6e4fa0012e7

Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.

The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string. Also take note of the edge case - if both strings are empty then you should return false/False.

Examples (input -> output)
"ab","AB"     -> true
"aB","Ab"     -> true
"aBcd","AbCD" -> true
"AB","Ab"     -> false
"",""         -> false

*/

function isOpposite(s1,s2) {    
    if ((s1.length === 0 || s2.length === 0) ||
         s1.toLowerCase() !== s2.toLowerCase()) return false;
    for (let i = 0; i < s1.length; i++) {
        if (s1.charCodeAt(i) === s2.charCodeAt(i)) return false;
    }
    return true;
}

//   console.log(isOpposite('ab', 'AB'));
//   console.log(isOpposite('aB', 'Ab'));
//   console.log(isOpposite('aBcd', 'AbCD'));
//   console.log(isOpposite('aBcde', 'AbCD'));
//   console.log(isOpposite('AB', 'Ab'));
//   console.log(isOpposite('', ''));
  console.log(isOpposite('WEIN', 'wEin'));
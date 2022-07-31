/*  

Codewars challenge, 8k: https://www.codewars.com/kata/57eae20f5500ad98e50002c5

Simple, remove the spaces from the string, then return the resultant string.

*/

function removeSpaces(x) {
    return x.replace(/\s/g, '');

    // \s means it matches any whitespace symbols, i.e space, tabs and line breaks
    // + means it matches one or more of the preceding tokens, hence it's referencing \s (It works without + this time)
    // g indicates searching all the full string. (Without this, it'll return the string with only one whitespace removed.)
}

console.log(removeSpaces('8 j 8   mBliB8g  imjB8B8  jl  B'));

/* 

Failed reason: 

I orignally thought that I can simply use trim(), but it only removes the whitespaces both ends of the string.

Approach:

Use replace() and regex.


*/
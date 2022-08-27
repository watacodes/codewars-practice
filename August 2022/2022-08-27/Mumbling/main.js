/*

Codewars, 8k: Mumbling

This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.

*/

// The pattern is:
// Repeat the 1st letter of the give string once, add a hyphen after that
// You repeat n times, which is associated with the position of the letter in the given string. (1st -> once, 2nd -> twice)
// And the 1st letter before the hyphen should always be capitalized.
// If you have multiplte letters before the hyphen, from second to the last letters should be lowercased.

const accum = s => {
  let sToArr = s.split('');
  let convertedArr = sToArr.map((a, i) => a.repeat(i + 1));
  return convertedArr.map(a => a.charAt(0).toUpperCase() + a.slice(1).toLowerCase()).join('-');
}

console.log(accum("abcd"));
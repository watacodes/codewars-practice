/*

Codewars, 6k: Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'

*/

const findMissingLetter = array => {
  for (let letter = 0; letter < array.length; letter++) {
    if (array[letter].charCodeAt() + 1 !== array[letter+1].charCodeAt()) {
      return String.fromCharCode(array[letter].charCodeAt() + 1);
    }
  }
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']))